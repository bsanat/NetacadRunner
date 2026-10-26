/*
    netacad-automation
    Copyright (C) 2026 Saurabh Kumar Yadav

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const COURSE_FILES = {
    ccna1: 'data/variables_ccna1.js',
    ccna2: 'data/variables_ccna2.js',
    ccna3: 'data/variables_ccna3.js',
    python1: 'data/variables_python1.js',
    python2: 'data/variables_python2.js',
    data: 'data/variables_data.js',
    cybersecurity: 'data/variables_cybersecurity.js',
};

const NETACAD_RE = /^https:\/\/([a-z0-9-]+\.)*netacad\.com\//i;

chrome.downloads.onCreated.addListener((item) => {
    (async () => {
        const { running } = await chrome.storage.local.get('running');
        if (!running) return;
        const fromNetacad = NETACAD_RE.test(item.referrer || '') ||
            NETACAD_RE.test(item.url || '') ||
            (item.url || '').startsWith('blob:');
        if (fromNetacad) {
            chrome.downloads.cancel(item.id).catch(() => {});
        }
    })();
});

async function getActiveNetacadTab() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id || !tab.url || !NETACAD_RE.test(tab.url)) {
        throw new Error('Open a NetAcad course tab first.');
    }
    return tab;
}

async function injectStatusBridge(tabId) {
    await chrome.scripting.executeScript({
        target: { tabId },
        world: 'MAIN',
        func: () => {
            window.__NETACAD_EXTENSION = true;
            window.__netacadSetStatus = (text) => {
                window.dispatchEvent(
                    new CustomEvent('netacad-runner-status', { detail: String(text) }),
                );
            };
        },
    });
}

async function appendStatus(text) {
    const { statusLog = [] } = await chrome.storage.local.get('statusLog');
    const next = [...statusLog, text].slice(-8);
    await chrome.storage.local.set({
        lastStatus: text,
        lastStatusAt: Date.now(),
        statusLog: next,
        running: !['Stopped', 'Error', 'Bad tab', 'Bad course', 'No data'].includes(text),
    });
}

async function getPageRunnerState(tabId) {
    const [{ result }] = await chrome.scripting.executeScript({
        target: { tabId },
        world: 'MAIN',
        func: () => ({
            hasRunner: !!window.__netacadRunner,
            course: window.__netacadLoadedCourse || null,
            version: window.__netacadRunner?.version || null,
        }),
    });
    return result || { hasRunner: false, course: null };
}

async function injectAndStart(tabId, course) {
    const dataFile = COURSE_FILES[course];
    if (!dataFile) throw new Error('Unknown course.');

    const page = await getPageRunnerState(tabId);

    if (page.hasRunner && page.course === course && page.version === chrome.runtime.getManifest().version) {
        await injectStatusBridge(tabId);
        await chrome.scripting.executeScript({
            target: { tabId },
            world: 'MAIN',
            func: () => window.__netacadRunner?.start?.(),
        });
        await chrome.storage.local.set({ running: true, course });
        await appendStatus('Running');
        return;
    }

    if (page.hasRunner) {
        await chrome.storage.local.set({ pendingCourse: course, pendingTabId: tabId });
        await appendStatus('Reload');
        await chrome.tabs.reload(tabId);
        return;
    }

    await injectStatusBridge(tabId);
    await chrome.scripting.executeScript({
        target: { tabId },
        world: 'MAIN',
        files: [dataFile],
    });
    await chrome.scripting.executeScript({
        target: { tabId },
        world: 'MAIN',
        func: (c) => {
            window.__netacadLoadedCourse = c;
        },
        args: [course],
    });
    await chrome.scripting.executeScript({
        target: { tabId },
        world: 'MAIN',
        files: ['runner.js'],
    });
    await chrome.scripting.executeScript({
        target: { tabId },
        world: 'MAIN',
        func: () => window.__netacadRunner?.start?.(),
    });

    await chrome.storage.local.set({ running: true, course });
    await appendStatus('Running');
}

async function injectStop(tabId) {
    await chrome.scripting.executeScript({
        target: { tabId },
        world: 'MAIN',
        func: () => window.__netacadRunner?.stop?.(),
    });
    await chrome.storage.local.set({ running: false });
    await appendStatus('Stopped');
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status !== 'complete') return;
    (async () => {
        const { pendingCourse, pendingTabId } = await chrome.storage.local.get([
            'pendingCourse',
            'pendingTabId',
        ]);
        if (!pendingCourse || pendingTabId !== tabId) return;
        await chrome.storage.local.remove(['pendingCourse', 'pendingTabId']);
        try {
            await injectAndStart(tabId, pendingCourse);
        } catch (e) {
            const text = e?.message?.includes('NetAcad') ? 'Bad tab' : 'Error';
            await appendStatus(text);
        }
    })();
});

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    (async () => {
        try {
            if (msg.type === 'status') {
                await appendStatus(msg.text);
                sendResponse({ ok: true });
                return;
            }

            const tab = await getActiveNetacadTab();

            if (msg.type === 'start') {
                await injectAndStart(tab.id, msg.course);
                sendResponse({ ok: true });
                return;
            }

            if (msg.type === 'stop') {
                await injectStop(tab.id);
                sendResponse({ ok: true });
                return;
            }

            sendResponse({ ok: false, error: 'Неизвестная команда.' });
        } catch (e) {
            const msg = e?.message || String(e);
            const text = msg.includes('NetAcad')
                ? 'Bad tab'
                : msg.includes('Unknown course')
                    ? 'Bad course'
                    : 'Error';
            await appendStatus(text);
            const error = text === 'Bad tab'
                ? 'Сначала откройте вкладку курса на www.netacad.com.'
                : text === 'Bad course'
                    ? 'Выбран неизвестный курс. Выберите курс из списка.'
                    : 'Не удалось выполнить действие. Обновите вкладку курса и повторите попытку.';
            sendResponse({ ok: false, error });
        }
    })();
    return true;
});
