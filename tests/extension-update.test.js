// SPDX-License-Identifier: GPL-3.0-or-later
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';

const source = readFileSync(new URL('../extension/background.js', import.meta.url), 'utf8');
const { version } = JSON.parse(readFileSync(new URL('../extension/manifest.json', import.meta.url), 'utf8'));

function fixture({ runnerVersion = version, course = 'ccna1', hasRunner = true } = {}) {
    const calls = { starts: 0, reloads: [], files: [] };
    const storage = {};
    const runner = () => ({ start() { calls.starts++; } });
    const pageWindow = { __netacadLoadedCourse: course, dispatchEvent() {} };
    if (hasRunner) {
        pageWindow.__netacadRunner = runner();
        if (runnerVersion !== null) pageWindow.__netacadRunner.version = runnerVersion;
    }
    const page = vm.createContext({ window: pageWindow, CustomEvent: class {} });
    let onMessage;
    let onUpdated;
    const chrome = {
        downloads: { onCreated: { addListener() {} } },
        runtime: {
            getManifest: () => ({ version }),
            onMessage: { addListener(fn) { onMessage = fn; } },
        },
        tabs: {
            query: async () => [{ id: 42, url: 'https://www.netacad.com/launch' }],
            reload: async tabId => { calls.reloads.push(tabId); },
            onUpdated: { addListener(fn) { onUpdated = fn; } },
        },
        storage: { local: {
            get: async () => ({ ...storage }),
            set: async values => { Object.assign(storage, values); },
            remove: async keys => { keys.forEach(key => delete storage[key]); },
        } },
        scripting: { executeScript: async ({ func, args = [], files }) => {
            if (files) {
                calls.files.push(...files);
                if (files.includes('runner.js')) pageWindow.__netacadRunner = { ...runner(), version };
                return [{}];
            }
            page.args = args;
            return [{ result: vm.runInContext(`(${func.toString()})(...args)`, page) }];
        } },
    };
    vm.runInNewContext(source, { chrome, Date, console });
    return {
        calls, storage, pageWindow,
        start: () => new Promise(resolve => onMessage({ type: 'start', course: 'ccna1' }, {}, resolve)),
        completeReload: async () => {
            delete pageWindow.__netacadRunner;
            delete pageWindow.__netacadLoadedCourse;
            onUpdated(42, { status: 'complete' });
            await new Promise(setImmediate);
        },
    };
}

for (const [name, runnerVersion] of [['unversioned', null], ['stale', `${version}-old`]]) {
    test(`${name} page runner reloads instead of restarting old code`, async () => {
        const { calls, storage, start } = fixture({ runnerVersion });
        assert.equal((await start()).ok, true);
        assert.equal(calls.starts, 0);
        assert.deepEqual(calls.files, []);
        assert.deepEqual(calls.reloads, [42]);
        assert.equal(storage.pendingCourse, 'ccna1');
        assert.equal(storage.pendingTabId, 42);
    });
}

test('current runner on the same course is reused', async () => {
    const { calls, start } = fixture();
    assert.equal((await start()).ok, true);
    assert.equal(calls.starts, 1);
    assert.deepEqual(calls.files, []);
    assert.deepEqual(calls.reloads, []);
});

test('switching courses still reloads even with a current runner', async () => {
    const { calls, storage, start } = fixture({ course: 'python1' });
    await start();
    assert.equal(calls.starts, 0);
    assert.deepEqual(calls.reloads, [42]);
    assert.equal(storage.pendingCourse, 'ccna1');
});

test('fresh page receives course data and the runner before starting', async () => {
    const { calls, storage, start } = fixture({ hasRunner: false });
    await start();
    assert.deepEqual(calls.files, ['data/variables_ccna1.js', 'runner.js']);
    assert.equal(calls.starts, 1);
    assert.deepEqual(calls.reloads, []);
    assert.equal(storage.running, true);
});

test('completed pending reload injects and starts the updated runner', async () => {
    const { calls, storage, pageWindow, start, completeReload } = fixture({ runnerVersion: null });
    await start();
    await completeReload();
    assert.deepEqual(calls.files, ['data/variables_ccna1.js', 'runner.js']);
    assert.equal(calls.starts, 1);
    assert.equal(pageWindow.__netacadRunner.version, version);
    assert.equal(pageWindow.__netacadLoadedCourse, 'ccna1');
    assert.equal(storage.pendingCourse, undefined);
    assert.equal(storage.pendingTabId, undefined);
    assert.equal(storage.running, true);
});
