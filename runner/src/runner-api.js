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

import { installPageDownloadGuard } from './download-guard.js';
import { initDatabases } from './db.js';
import { findCourseIframe } from './iframe.js';
import { createMainLoop } from './loop.js';
import { resetStatusThrottle, setStatus } from './status.js';

let activeLoop = null;
let iframeRetryTimer = null;
let running = false;

function clearIframeRetry() {
    if (iframeRetryTimer) {
        clearTimeout(iframeRetryTimer);
        iframeRetryTimer = null;
    }
}

function attachLoop(doc, win) {
    const databases = initDatabases();
    activeLoop = createMainLoop(doc, win, databases);
}

export function startRunner() {
    if (activeLoop) return;

    running = true;
    resetStatusThrottle();
    setStatus('Running');

    try {
        if (typeof RAW_DB === 'undefined') {
            console.error('[AutoRunner] RAW_DB is not defined.');
            setStatus('No data');
            running = false;
            return;
        }

        const iframe = findCourseIframe();
        if (!iframe) {
            setStatus('Find frame');
            clearIframeRetry();
            iframeRetryTimer = setTimeout(() => {
                iframeRetryTimer = null;
                startRunner();
            }, 2000);
            return;
        }

        clearIframeRetry();
        const win = iframe.contentWindow;
        const doc = iframe.contentDocument || win.document;
        installPageDownloadGuard(win);
        attachLoop(doc, win);
        activeLoop.start();
    } catch (e) {
        console.error('[AutoRunner] FATAL:', e);
        try {
            window.top.console.error('[AutoRunner] FATAL:', e);
        } catch {}
        setStatus('Error');
        running = false;
    }
}

export function stopRunner() {
    running = false;
    clearIframeRetry();
    if (activeLoop) {
        activeLoop.stop();
        activeLoop = null;
    }
    setStatus('Stopped');
}

export function isRunnerActive() {
    return running;
}

export function restartRunner() {
    stopRunner();
    startRunner();
}
