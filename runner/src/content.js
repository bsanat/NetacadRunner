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

import { BOTTOM_PERCENT } from './config.js';
import { deepQuerySelectorAll, getTopDocument } from './dom.js';
import { getVideoPlayer, skipVideo } from './video.js';

export function createContentHelpers(doc, win, assessment) {
    const { elementVisibilityRatio, isElementSubstantiallyVisible, isAssessmentResultVisible, isOnQuestionSlide } = assessment;

    function getVideosInOrder() {
        return deepQuerySelectorAll('video', doc);
    }

    function isVideoHidden(video) {
        const brightcove = video.closest('brightcove-view');
        if (brightcove?.classList.contains('animated-hide')) return true;

        let el = getVideoPlayer(video);
        while (el && el !== doc.body) {
            const style = win.getComputedStyle(el);
            if (style.display === 'none' || style.visibility === 'hidden') return true;
            if (parseFloat(style.opacity) < 0.05) return true;
            el = el.parentElement;
        }
        return false;
    }

    function getNextPendingVideo(processedVideos) {
        for (const video of getVideosInOrder()) {
            if (processedVideos.has(video)) continue;
            if (video.ended) {
                processedVideos.add(video);
                continue;
            }
            if (isVideoHidden(video)) continue;
            if (shouldInteractWithVideo(video, processedVideos)) return video;
        }
        return null;
    }

    function shouldInteractWithVideo(video, processedVideos, elWindow = win) {
        if (!video || processedVideos.has(video)) return false;
        if (isAssessmentResultVisible(doc)) return false;

        const player = getVideoPlayer(video);
        const rect = player.getBoundingClientRect();
        if (rect.width < 64 || rect.height < 48) return false;

        const vis = elementVisibilityRatio(player, elWindow);
        if (vis < 0.4) return false;

        const vh = elWindow.innerHeight || doc.documentElement.clientHeight;
        const vw = elWindow.innerWidth || doc.documentElement.clientWidth;
        const cy = rect.top + rect.height / 2;
        const cx = rect.left + rect.width / 2;
        const inset = 12;
        if (cy < inset || cy > vh - inset || cx < inset || cx > vw - inset) return false;

        const block = video.closest('block-view, [class*="block"]');
        if (block && elementVisibilityRatio(block, elWindow) < 0.2) return false;

        return true;
    }

    function findScrollContainer() {
        const scrollingElement = doc.scrollingElement || doc.documentElement;
        const docScrollHeight = Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight);
        if (docScrollHeight > win.innerHeight + 1) return { useWindow: true };

        const candidates = [
            doc.querySelector('.page__inner'),
            doc.querySelector('.article__container'),
            doc.body,
            doc.documentElement,
        ];
        let best = null;
        let bestArea = 0;
        for (const el of candidates) {
            if (!el) continue;
            const sh = el.scrollHeight;
            const ch = el.clientHeight;
            if (sh > ch + 50 && el.clientWidth * ch > bestArea) {
                bestArea = el.clientWidth * ch;
                best = el;
            }
        }
        if (best) return { useWindow: false, element: best };
        if (scrollingElement.scrollHeight > scrollingElement.clientHeight + 1) {
            return { useWindow: false, element: scrollingElement };
        }
        return { useWindow: true };
    }

    function createScrollState() {
        let scrollContainer = findScrollContainer();

        function getScrollElement() {
            if (!scrollContainer.useWindow && scrollContainer.element) {
                return scrollContainer.element;
            }
            return doc.scrollingElement || doc.documentElement;
        }

        function getScrollTop() {
            if (scrollContainer.useWindow) return win.scrollY;
            return scrollContainer.element.scrollTop;
        }

        function getMaxScrollPx() {
            const clientHeight = scrollContainer.useWindow ? win.innerHeight : scrollContainer.element.clientHeight;
            const scrollHeight = scrollContainer.useWindow
                ? Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight)
                : scrollContainer.element.scrollHeight;
            return Math.max(0, scrollHeight - clientHeight);
        }

        function getScrollPercent() {
            const maxScroll = getMaxScrollPx();
            if (maxScroll <= 5) return 100;
            const scrollTop = scrollContainer.useWindow ? win.scrollY : scrollContainer.element.scrollTop;
            return (scrollTop / maxScroll) * 100;
        }

        function scrollByStep(amount) {
            if (scrollContainer.useWindow) win.scrollBy({ top: amount, behavior: 'instant' });
            else scrollContainer.element.scrollTop += amount;
        }

        function isAtScrollBottom() {
            if (getScrollPercent() < BOTTOM_PERCENT && getMaxScrollPx() > 5) return false;
            const docMax = Math.max(
                doc.documentElement.scrollHeight,
                doc.body.scrollHeight,
            ) - win.innerHeight;
            return docMax <= 5 || win.scrollY >= docMax - 8;
        }

        function scrollToBottom() {
            const max = getMaxScrollPx();
            if (scrollContainer.useWindow) {
                win.scrollTo({ top: max, behavior: 'instant' });
            } else {
                scrollContainer.element.scrollTop = max;
            }
            const docMax = Math.max(
                doc.documentElement.scrollHeight,
                doc.body.scrollHeight,
            ) - win.innerHeight;
            if (docMax > 5 && win.scrollY < docMax - 8) {
                win.scrollTo({ top: docMax, behavior: 'instant' });
            }
        }

        function refreshScrollContainer() {
            scrollContainer = findScrollContainer();
        }

        return {
            getScrollElement,
            getScrollTop,
            getScrollPercent,
            getMaxScrollPx,
            scrollByStep,
            isAtScrollBottom,
            scrollToBottom,
            refreshScrollContainer,
            get scrollContainer() {
                return scrollContainer;
            },
        };
    }

    function isModuleNavButton(btn) {
        if (!btn) return false;
        const cls = typeof btn.className === 'string' ? btn.className : '';
        return /moduleNavBtn|moduleNavIcon/i.test(cls);
    }

    function findInContentNextButton(getVisibleAssessmentRoot, isAssessmentInProgress, root = doc, opts = {}) {
        const allowOnResult = opts.allowOnResult ?? false;
        if (!allowOnResult && getVisibleAssessmentRoot(0.15) && isAssessmentInProgress()) return null;

        const candidates = deepQuerySelectorAll(
            'button.article__btn-arrow.is-right, button[data-blockstrip-slider="right"]',
            root,
        );

        for (const btn of candidates) {
            if (isModuleNavButton(btn)) continue;
            if (btn.closest('.assessment-1q, .abs__toolbar, .secure-toolbar-container')) continue;
            if (btn.closest('.block-buttons-container') && btn.closest('.assessment-1q, .abs__container.has-arrows')) {
                continue;
            }
            if (btn.disabled || btn.classList.contains('is-disabled') ||
                btn.getAttribute('aria-disabled') === 'true') continue;
            if (!isElementSubstantiallyVisible(btn, 0.12)) continue;
            return btn;
        }
        return null;
    }

    function findModuleNavNextButton() {
        const topDoc = getTopDocument();
        const btns = topDoc.querySelectorAll(
            'button.moduleNavBtn--sFwjV.next--3dfUb, button[class*="moduleNavBtn"][class*="next--"]',
        );
        for (const btn of btns) {
            if (btn.disabled || btn.classList.contains('disabled')) continue;
            return btn;
        }
        return null;
    }

    function handleVideoTick(video, processedVideos, runtime) {
        if (processedVideos.has(video)) return false;
        if (!shouldInteractWithVideo(video, processedVideos, win)) return false;

        return skipVideo(video, getVideoPlayer(video), runtime, processedVideos);
    }

    return {
        getNextPendingVideo,
        shouldInteractWithVideo,
        createScrollState,
        findInContentNextButton,
        findModuleNavNextButton,
        handleVideoTick,
        isElementSubstantiallyVisible,
    };
}
