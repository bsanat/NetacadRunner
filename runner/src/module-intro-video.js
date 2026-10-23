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

import { deepQuerySelectorAll } from './dom.js';
import { skipVideo } from './video.js';

function isFullscreenBrightcovePlayer(player, win) {
    if (!player) return false;
    const vh = win.innerHeight || 800;
    const rect = player.getBoundingClientRect();
    if (rect.height >= vh * 0.45) return true;
    const style = player.getAttribute('style') || '';
    return /100vh/i.test(style);
}

function findModuleIntroVideo(doc, content, win) {
    for (const holder of deepQuerySelectorAll('.brightcove-video-holder', doc)) {
        if (!content.isElementSubstantiallyVisible(holder, 0.15)) continue;

        const player = holder.querySelector('.video-js');
        const video = holder.querySelector('video');
        if (!video) continue;

        const dialog = holder.closest('[role="dialog"], .notify__popup, .modal, .overlay');
        if (dialog || isFullscreenBrightcovePlayer(player, win)) {
            return { holder, player, video, dialog };
        }
    }
    return null;
}

function tryDismissIntro(doc, content, intro) {
    const roots = [intro.dialog, intro.holder?.parentElement, intro.holder].filter(Boolean);
    const inScope = (el) => roots.some(root => root.contains(el));

    const dismissSelectors = [
        'button.js-notify-close-btn',
        'button.close-button',
        'button.close-btn',
        'button[aria-label*="Close"]',
        'button.vjs-close-button',
    ];

    for (const sel of dismissSelectors) {
        const btn = deepQuerySelectorAll(sel, doc)
            .find(b => !b.disabled &&
                !b.classList.contains('disabled') &&
                inScope(b) &&
                content.isElementSubstantiallyVisible(b, 0.05));
        if (btn) {
            btn.click();
            return true;
        }
    }

    const textBtn = deepQuerySelectorAll('button', doc)
        .find(b => !b.disabled &&
            !b.classList.contains('disabled') &&
            inScope(b) &&
            content.isElementSubstantiallyVisible(b, 0.05) &&
            /^(continue|next|close|skip|got it|start)$/i.test((b.textContent || '').trim()));
    if (textBtn) {
        textBtn.click();
        return true;
    }

    return false;
}

export function tryHandleModuleIntroVideo(doc, content, win, runtime, processedVideos) {
    const intro = findModuleIntroVideo(doc, content, win);
    if (!intro) return false;

    if (intro.video.ended) {
        processedVideos.add(intro.video);
        return tryDismissIntro(doc, content, intro);
    }
    if (processedVideos.has(intro.video)) return false;
    return skipVideo(intro.video, intro.player, runtime, processedVideos);
}
