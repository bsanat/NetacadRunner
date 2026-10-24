// SPDX-License-Identifier: GPL-3.0-or-later
import { setStatus } from './status.js';

const failedAttempts = new WeakMap();

export function getVideoPlayer(video) {
    return video.closest('.brightcove-video-holder, .video-js, .plyr, .player-wrapper') ||
        video.parentElement || video;
}

export function skipVideo(video, player, runtime, processedVideos) {
    if (video.ended) {
        processedVideos.add(video);
        return false;
    }

    const failure = failedAttempts.get(video);
    if (failure && video.paused && Date.now() < failure.retryAt) {
        setStatus(failure.status);
        return true;
    }

    let active = true;
    let sought = false;
    runtime.isPaused = true;
    runtime.isVideoActive = true;
    setStatus('Video');

    const finish = (completed, status) => {
        if (!active) return;
        active = false;
        clearTimeout(timeout);
        for (const [event, handler] of listeners) video.removeEventListener(event, handler);
        runtime.cancelVideo = null;
        runtime.isPaused = false;
        runtime.isVideoActive = false;
        if (completed) {
            processedVideos.add(video);
            failedAttempts.delete(video);
        } else if (status) {
            failedAttempts.set(video, { status, retryAt: Date.now() + 5000 });
            setStatus(status);
        }
    };

    const seek = () => {
        if (!active || sought || video.paused || !Number.isFinite(video.duration) || video.duration <= 0) return;
        try {
            video.currentTime = Math.max(0, video.duration - 2.5);
            sought = true;
        } catch {
            finish(false, 'Video error');
        }
    };
    const listeners = [
        ['loadedmetadata', seek],
        ['durationchange', seek],
        ['playing', seek],
        ['ended', () => finish(true)],
        ['error', () => finish(false, 'Video error')],
    ];
    const timeout = setTimeout(() => finish(false, 'Video waiting'), 15000);
    for (const [event, handler] of listeners) video.addEventListener(event, handler);
    runtime.cancelVideo = () => finish(false);

    try {
        video.muted = true;
        const playButton = player?.querySelector(
            '.vjs-big-play-button, .play-button, .plyr__control--overlaid, ' +
            'button[aria-label="Play"], button[title="Play Video"], button[aria-label="Воспроизвести"]',
        );
        if (video.paused && playButton && !playButton.disabled && playButton.getClientRects().length) {
            playButton.click();
        }
        if (active && video.paused) {
            const playing = video.play();
            playing?.then(seek).catch(error => {
                if (!active) return;
                if (!video.paused) seek();
                else finish(false, error?.name === 'NotAllowedError' ? 'Video blocked' : 'Video error');
            });
        }
        seek();
    } catch {
        finish(false, 'Video error');
    }
    return true;
}
