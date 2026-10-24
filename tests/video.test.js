// SPDX-License-Identifier: GPL-3.0-or-later
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createContentHelpers } from '../runner/src/content.js';
import { tryHandleModuleIntroVideo } from '../runner/src/module-intro-video.js';
import { skipVideo } from '../runner/src/video.js';

globalThis.window = { __netacadSetStatus() {} };

class Video extends EventTarget {
    constructor() {
        super();
        this.duration = 120;
        this.paused = true;
        this.ended = false;
        this.playCalls = 0;
        this.seeks = [];
        this.player = {
            parentElement: null,
            getBoundingClientRect: () => ({ width: 640, height: 480, top: 0, left: 0 }),
            getAttribute: () => '',
            querySelector: () => null,
        };
        this.parentElement = this.player;
    }

    get currentTime() { return this.seeks.at(-1) || 0; }
    set currentTime(value) {
        assert(Number.isFinite(value));
        if (this.seekError) throw new Error('Not seekable');
        this.seeks.push(value);
    }
    play() {
        this.playCalls++;
        if (this.playError) return Promise.reject(this.playError);
        this.paused = false;
        return Promise.resolve();
    }
    closest(selector) { return selector.includes('.player-wrapper') ? this.player : null; }
}

function setup(t) {
    t.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
    const video = new Video();
    const runtime = { isPaused: false, isVideoActive: false };
    const processed = new Set();
    t.after(() => runtime.cancelVideo?.());
    return { video, runtime, processed, start: () => skipVideo(video, video.player, runtime, processed) };
}

test('video is processed only after its real ended event', t => {
    const { video, runtime, processed, start } = setup(t);
    start();
    assert.equal(video.muted, true);
    assert.deepEqual(video.seeks, [117.5]);
    assert.equal(processed.has(video), false);
    assert.equal(runtime.isPaused, true);
    video.ended = true;
    video.dispatchEvent(new Event('ended'));
    assert.equal(processed.has(video), true);
    assert.equal(runtime.isPaused, false);
    assert.equal(runtime.isVideoActive, false);
    assert.equal(runtime.cancelVideo, null);
});

test('visible Play button opens a poster before native playback', t => {
    const { video, start } = setup(t);
    let clicks = 0;
    video.player.querySelector = () => ({
        getClientRects: () => [{}],
        click() { clicks++; video.paused = false; },
    });
    start();
    assert.equal(clicks, 1);
    assert.equal(video.playCalls, 0);
    assert.equal(video.seeks.length, 1);
});

test('already playing at time zero does not wait for another play event', t => {
    const { video, start } = setup(t);
    video.paused = false;
    start();
    assert.equal(video.playCalls, 0);
    assert.equal(video.seeks.length, 1);
});

test('metadata and duration changes seek once and never to infinity', t => {
    const { video, start } = setup(t);
    video.duration = NaN;
    start();
    video.dispatchEvent(new Event('loadedmetadata'));
    video.duration = Infinity;
    video.dispatchEvent(new Event('durationchange'));
    assert.deepEqual(video.seeks, []);
    video.duration = 30;
    video.dispatchEvent(new Event('durationchange'));
    video.dispatchEvent(new Event('loadedmetadata'));
    video.dispatchEvent(new Event('playing'));
    assert.deepEqual(video.seeks, [27.5]);
});

test('rejected autoplay releases the loop and allows retry after cooldown', async t => {
    const { video, runtime, processed, start } = setup(t);
    video.playError = Object.assign(new Error('Gesture required'), { name: 'NotAllowedError' });
    start();
    await new Promise(setImmediate);
    assert.equal(runtime.isPaused, false);
    assert.equal(processed.has(video), false);
    start();
    assert.equal(video.playCalls, 1);
    t.mock.timers.tick(5000);
    video.playError = null;
    start();
    assert.equal(video.playCalls, 2);
    assert.equal(runtime.isPaused, true);
});

test('timeout, media errors and seek errors never count as completion', t => {
    const { video, runtime, processed, start } = setup(t);
    video.duration = NaN;
    start();
    t.mock.timers.tick(15000);
    assert.equal(runtime.isPaused, false);
    assert.equal(processed.has(video), false);
    video.duration = 60;
    video.seekError = true;
    start();
    assert.equal(runtime.isPaused, false);
    assert.equal(processed.has(video), false);
    video.seekError = false;
    start();
    video.dispatchEvent(new Event('error'));
    assert.equal(runtime.isPaused, false);
    assert.equal(processed.has(video), false);
});

test('Stop removes pending callbacks and timers', async t => {
    const { video, runtime, processed, start } = setup(t);
    video.duration = NaN;
    start();
    runtime.cancelVideo();
    video.duration = 60;
    video.dispatchEvent(new Event('loadedmetadata'));
    video.dispatchEvent(new Event('playing'));
    video.dispatchEvent(new Event('ended'));
    t.mock.timers.tick(20000);
    await new Promise(setImmediate);
    assert.deepEqual(video.seeks, []);
    assert.equal(video.playCalls, 1);
    assert.equal(runtime.isPaused, false);
    assert.equal(processed.has(video), false);
});

function contentFixture(video) {
    const doc = {
        body: {}, documentElement: {},
        querySelectorAll: selector => selector === 'video' ? [video] : [],
    };
    const win = {
        innerHeight: 800, innerWidth: 1200,
        getComputedStyle: () => ({ display: 'block', visibility: 'visible', opacity: '1' }),
    };
    const assessment = {
        elementVisibilityRatio: () => 1,
        isElementSubstantiallyVisible: el => el.visible !== false,
        isAssessmentResultVisible: () => false,
    };
    return { doc, win, content: createContentHelpers(doc, win, assessment) };
}

function posterFixture() {
    const { doc, content } = contentFixture(null);
    let nativeVideo = null;
    let clicks = 0;
    const poster = {
        busy: false,
        getAttribute: () => String(poster.busy),
    };
    const container = { querySelector: () => nativeVideo };
    const button = {
        disabled: false,
        visible: true,
        closest: selector => selector === '.media-poster' ? poster : container,
        click() { clicks++; },
    };
    doc.querySelectorAll = selector => {
        if (selector === '.media-poster .vjs-big-play-button') return [button];
        if (selector === 'video') return nativeVideo ? [nativeVideo] : [];
        return [];
    };
    return { content, poster, button, clicks: () => clicks, load: () => { nativeVideo = new Video(); } };
}

test('lazy poster opens even though no native video exists yet', () => {
    const { content, clicks } = posterFixture();
    assert.equal(content.getNextPendingVideo(new Set()), null);
    assert.equal(content.tryOpenVideo(), true);
    assert.equal(clicks(), 1);
});

test('lazy poster waits during loading, throttles retries and yields to native video', t => {
    t.mock.timers.enable({ apis: ['Date'] });
    const { content, poster, button, clicks, load } = posterFixture();
    content.tryOpenVideo();
    assert.equal(content.tryOpenVideo(), true);
    assert.equal(clicks(), 1);
    t.mock.timers.tick(5000);
    poster.busy = true;
    button.disabled = true;
    assert.equal(content.tryOpenVideo(), true);
    assert.equal(clicks(), 1);
    poster.busy = false;
    button.disabled = false;
    content.tryOpenVideo();
    assert.equal(clicks(), 2);
    load();
    assert.equal(content.tryOpenVideo(), false);
});

test('lazy poster outside the visible area is not clicked', () => {
    const { content, button, clicks } = posterFixture();
    button.visible = false;
    assert.equal(content.tryOpenVideo(), false);
    assert.equal(clicks(), 0);
});

test('player cover is eligible even when the native video has no size yet', () => {
    const video = new Video();
    video.getBoundingClientRect = () => ({ width: 0, height: 0 });
    const { content } = contentFixture(video);
    assert.equal(content.shouldInteractWithVideo(video, new Set()), true);
});

test('temporarily hidden video becomes eligible when shown', () => {
    const video = new Video();
    const { content, win } = contentFixture(video);
    const processed = new Set();
    win.getComputedStyle = () => ({ display: 'none' });
    assert.equal(content.getNextPendingVideo(processed), null);
    assert.equal(processed.has(video), false);
    win.getComputedStyle = () => ({ display: 'block', visibility: 'visible', opacity: '1' });
    assert.equal(content.getNextPendingVideo(processed), video);
});

test('earlier offscreen or already finished videos do not block the visible player', () => {
    const earlier = new Video();
    const visible = new Video();
    const { doc, content } = contentFixture(visible);
    earlier.player.getBoundingClientRect = () => ({ width: 640, height: 480, top: -1000, left: 0 });
    doc.querySelectorAll = selector => selector === 'video' ? [earlier, visible] : [];
    const processed = new Set();
    assert.equal(content.getNextPendingVideo(processed), visible);
    assert.equal(processed.has(earlier), false);
    earlier.ended = true;
    assert.equal(content.getNextPendingVideo(processed), visible);
    assert.equal(processed.has(earlier), true);
});

test('finished intro can close; finished inline player does not block navigation', () => {
    const video = new Video();
    video.ended = true;
    const { doc, win, content } = contentFixture(video);
    const holder = {
        querySelector: selector => selector === 'video' ? video : video.player,
        closest: () => null,
        contains: () => true,
    };
    let closed = 0;
    let button = { disabled: false, classList: { contains: () => false }, click() { closed++; } };
    doc.querySelectorAll = selector => {
        if (selector === '.brightcove-video-holder') return [holder];
        if (selector === 'button.js-notify-close-btn') return button ? [button] : [];
        return [];
    };
    const processed = new Set([video]);
    assert.equal(tryHandleModuleIntroVideo(doc, content, win, {}, processed), true);
    assert.equal(closed, 1);
    button = null;
    assert.equal(tryHandleModuleIntroVideo(doc, content, win, {}, processed), false);
});
