// SPDX-License-Identifier: GPL-3.0-or-later
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createMainLoop } from '../runner/src/loop.js';
import { createContentHelpers } from '../runner/src/content.js';

test('a long lesson reaches the bottom within one second and Stop cancels scrolling', t => {
    t.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
    const steps = [];
    const doc = {
        documentElement: { scrollHeight: 8000, clientHeight: 800 },
        body: { scrollHeight: 8000 },
        querySelector: () => null, querySelectorAll: () => [],
    };
    const win = {
        innerHeight: 800, innerWidth: 1200, scrollY: 0,
        __netacadSetStatus() {}, top: { document: doc },
        scrollBy({ top, behavior }) {
            assert.equal(behavior, 'instant');
            assert(top <= this.innerHeight * 0.9, 'keep overlap between viewports');
            steps.push(top);
            this.scrollY = Math.min(this.scrollY + top, 7200);
        },
    };
    globalThis.window = win;
    globalThis.document = doc;
    const loop = createMainLoop(doc, win, {});
    t.after(() => loop.stop());
    loop.start();
    for (let elapsed = 0; elapsed < 1000; elapsed += 10) t.mock.timers.tick(10);
    assert.equal(win.scrollY, 7200);
    assert(steps.length > 1);
    loop.stop();
    const stoppedAt = steps.length;
    t.mock.timers.tick(1000);
    assert.equal(steps.length, stoppedAt);
});

test('nested lesson scrolling overrides CSS smooth scrolling', () => {
    let position = 0;
    let smoothRequests = 0;
    const container = {
        scrollHeight: 8000, clientHeight: 800, clientWidth: 1000,
        get scrollTop() { return position; },
        set scrollTop(_value) { smoothRequests++; },
        scrollBy({ top, behavior }) { assert.equal(behavior, 'instant'); position += top; },
        scrollTo({ top, behavior }) { assert.equal(behavior, 'instant'); position = top; },
    };
    const doc = {
        documentElement: { scrollHeight: 800, clientHeight: 800 }, body: { scrollHeight: 800 },
        querySelector: selector => selector === '.page__inner' ? container : null,
    };
    const win = { innerHeight: 800, scrollY: 0 };
    const scroll = createContentHelpers(doc, win, {}).createScrollState();
    scroll.scrollByStep(720);
    assert.equal(position, 720);
    scroll.scrollToBottom();
    assert.equal(position, 7200);
    assert.equal(smoothRequests, 0);
});
