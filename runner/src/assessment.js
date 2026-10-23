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

import { QUESTION_VIEW_TAGS } from './config.js';
import { deepQuerySelectorAll } from './dom.js';
import { getQuestionBodyEl } from './solver.js';

export function createAssessmentHelpers(doc, win) {
    function getViewportRect(elWindow = win) {
        const vh = elWindow.innerHeight || doc.documentElement.clientHeight;
        const vw = elWindow.innerWidth || doc.documentElement.clientWidth;
        return { vh, vw };
    }

    function getAdjustedRect(el, elWindow = win) {
        if (!el || !el.getBoundingClientRect) return null;
        const rect = el.getBoundingClientRect();
        let top = rect.top;
        let bottom = rect.bottom;
        let left = rect.left;
        let right = rect.right;
        let cw = elWindow;
        try {
            while (cw && cw !== win) {
                const frame = cw.frameElement;
                if (!frame) break;
                const frameRect = frame.getBoundingClientRect();
                top += frameRect.top;
                bottom += frameRect.top;
                left += frameRect.left;
                right += frameRect.left;
                cw = cw.parent;
            }
        } catch {}
        return { top, bottom, left, right, width: rect.width, height: rect.height };
    }

    function elementVisibilityRatio(el, elWindow = win) {
        const rect = getAdjustedRect(el, elWindow);
        if (!rect || rect.width <= 0 || rect.height <= 0) return 0;
        const { vh, vw } = getViewportRect(elWindow);
        const visibleW = Math.max(0, Math.min(rect.right, vw) - Math.max(rect.left, 0));
        const visibleH = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
        return (visibleW * visibleH) / (rect.width * rect.height);
    }

    function isElementSubstantiallyVisible(el, minRatio = 0.35, elWindow = win) {
        return elementVisibilityRatio(el, elWindow) >= minRatio;
    }

    function getCarouselOffsetRatio(root = doc) {
        const container = deepQuerySelectorAll('.js-abs-block-container', root)[0];
        if (!container) return null;
        const style = win.getComputedStyle(container);
        if (!style.transform || style.transform === 'none') return 0;
        try {
            const matrix = new DOMMatrix(style.transform);
            const w = container.getBoundingClientRect().width;
            if (!w) return 0;
            return Math.max(0, -matrix.m41 / w);
        } catch {
            return 0;
        }
    }

    function isOnQuestionSlide(root) {
        const offset = getCarouselOffsetRatio(root);
        return offset !== null && offset >= 0.35;
    }

    function hasVisibleScorePercent(searchRoot) {
        if (deepQuerySelectorAll('.percent-text', searchRoot).some(el => {
            const t = (el.textContent || '').trim();
            if (!/\d{1,3}\s*%/.test(t)) return false;
            return isElementSubstantiallyVisible(el, 0.08);
        })) return true;

        return deepQuerySelectorAll('.progress[aria-label]', searchRoot).some(el => {
            const label = el.getAttribute('aria-label') || '';
            if (!/\d{1,3}\s*%/.test(label)) return false;
            return isElementSubstantiallyVisible(el, 0.08);
        });
    }

    function hasResultSummaryText(searchRoot) {
        const t = (searchRoot.textContent || '').toLowerCase();
        return /you have scored|you have passed|you did not pass|congratulations|try again|assessment results/i.test(t);
    }

    function isAssessmentResultVisible(searchRoot = doc) {
        if (deepQuerySelectorAll('assessmentresults-view', searchRoot).some(el =>
            isElementSubstantiallyVisible(el, 0.1),
        )) return true;

        if (deepQuerySelectorAll('[class*="resultblock"]', searchRoot).some(el =>
            el.classList.contains('is-complete') && isElementSubstantiallyVisible(el, 0.08),
        )) return true;

        if (hasVisibleScorePercent(searchRoot)) return true;

        const bodyInner = deepQuerySelectorAll('.assessmentResults__body-inner', searchRoot)[0];
        if (bodyInner && isElementSubstantiallyVisible(bodyInner, 0.08)) {
            const t = (bodyInner.textContent || '').toLowerCase();
            if (/you have scored|congratulations|you have passed|you did not pass/i.test(t)) {
                return true;
            }
        }

        if (hasResultSummaryText(searchRoot) && hasVisibleScorePercent(searchRoot)) return true;

        const retryBtn = deepQuerySelectorAll(
            '.js-assessment-retry-btn, .assessmentResults__retry-btn',
            searchRoot,
        ).find(el => isElementSubstantiallyVisible(el, 0.1));
        if (retryBtn && /reset|retry/i.test((retryBtn.textContent || '').toLowerCase())) {
            const article = retryBtn.closest('.article, .abs, [class*="article"]') || searchRoot;
            if (hasVisibleScorePercent(article) || hasResultSummaryText(article)) return true;
        }

        return false;
    }

    function isAssessmentComplete(root) {
        if (isAssessmentResultVisible(doc)) return true;
        if (!root) return false;

        for (const btn of deepQuerySelectorAll('.block-button', root)) {
            const label = (btn.textContent || '').trim();
            if (!/result\s*page/i.test(label)) continue;
            if (btn.classList.contains('active-block') || btn.classList.contains('is-active') ||
                btn.getAttribute('aria-current') === 'true') {
                return true;
            }
        }

        if (isAssessmentResultVisible(root)) return true;

        if (deepQuerySelectorAll('.final-screen-inner', root).some(el =>
            isElementSubstantiallyVisible(el, 0.25),
        )) return true;

        if (hasVisibleScorePercent(root) && hasResultSummaryText(root)) return true;

        const summaryEls = deepQuerySelectorAll('h1, h2, h3, p, div, span, [class*="score"]', root);
        if (summaryEls.some(el => {
            const t = (el.textContent || '').toLowerCase();
            if (!/congratulations|you have passed|you did not pass|you have scored/i.test(t)) return false;
            return isElementSubstantiallyVisible(el, 0.08);
        })) return true;

        return false;
    }

    function hasActiveQuestionToolbar(root) {
        return deepQuerySelectorAll('.question-label', root).some(el =>
            isElementSubstantiallyVisible(el, 0.1) && /\d+\s+of\s+\d+/i.test(el.textContent || ''),
        );
    }

    function isFormalExamLayout(root) {
        if (!root) return false;
        if (hasActiveQuestionToolbar(root)) return true;
        if (getInAssessmentStartButtons(root).length > 0) return true;
        if (deepQuerySelectorAll('.js-abs-block-container', root).length > 0) return true;
        if (deepQuerySelectorAll('.block-button', root).some(btn =>
            /^Q\d+/i.test((btn.textContent || '').trim()),
        )) return true;
        return false;
    }

    function isQuestionReadyToAnswer(qContainer) {
        const body = getQuestionBodyEl(qContainer);
        if (!body) return false;

        const vis = elementVisibilityRatio(body);
        if (vis < 0.35) return false;

        const rect = getAdjustedRect(body);
        if (!rect) return false;

        const { vh } = getViewportRect();
        if (rect.top > vh * 0.68) return false;
        if (rect.bottom < vh * 0.12) return false;

        return true;
    }

    function findReadyQuestionContainer(root) {
        const q = findVisibleQuestionContainer(root);
        if (!q || !isQuestionReadyToAnswer(q)) return null;
        return q;
    }

    function hasQuestionContent(root) {
        return deepQuerySelectorAll(QUESTION_VIEW_TAGS, root)
            .some(view => !!getQuestionBodyEl(view));
    }

    function scrollQuestionIntoView(root) {
        const { vh } = getViewportRect();
        let target = null;
        let targetTop = Infinity;

        for (const view of deepQuerySelectorAll(QUESTION_VIEW_TAGS, root)) {
            const body = getQuestionBodyEl(view);
            if (!body) continue;
            if (isQuestionReadyToAnswer(view)) return false;

            const rect = getAdjustedRect(body);
            if (!rect || rect.top >= vh) continue;

            if (rect.top < targetTop) {
                targetTop = rect.top;
                target = body;
            }
        }

        if (!target) return false;
        target.scrollIntoView({ block: 'center', behavior: 'auto' });
        return true;
    }

    function isActiveQuestionView(view, root) {
        if (isAssessmentComplete(root)) return false;

        const body = getQuestionBodyEl(view);
        if (!body) return false;

        const bodyVis = elementVisibilityRatio(body);
        if (bodyVis < 0.12) return false;

        const container = deepQuerySelectorAll('.js-abs-block-container', root)[0];
        if (container) {
            const offset = getCarouselOffsetRatio(root);
            if (offset !== null && offset < 0.25) return false;
        }

        if (hasActiveQuestionToolbar(root)) {
            return bodyVis >= 0.18;
        }

        const widget = deepQuerySelectorAll(
            '.mcq__widget, .matching__widget, .objectMatching__widget',
            view,
        )[0];
        if (widget && elementVisibilityRatio(widget) < 0.2) return false;

        return bodyVis >= 0.35;
    }

    function getOrderedQuestionViews(root) {
        return deepQuerySelectorAll(QUESTION_VIEW_TAGS, root)
            .filter(qContainer => !!getQuestionBodyEl(qContainer) && isActiveQuestionView(qContainer, root));
    }

    function getCurrentQuestionNumber(root) {
        for (const el of deepQuerySelectorAll('.question-label', root)) {
            const m = (el.textContent || '').match(/(\d+)\s+of\s+(\d+)/i);
            if (m && isElementSubstantiallyVisible(el, 0.15)) {
                return { index: parseInt(m[1], 10), total: parseInt(m[2], 10) };
            }
        }
        for (const el of deepQuerySelectorAll(
            '.component__title-inner, .matching__title-inner, .objectMatching__title-inner, .mcq__title-inner',
            root,
        )) {
            const m = (el.textContent || '').match(/question\s*(\d+)/i);
            if (m && isElementSubstantiallyVisible(el, 0.15)) {
                return { index: parseInt(m[1], 10), total: null };
            }
        }
        for (const btn of deepQuerySelectorAll('.block-button', root)) {
            const m = (btn.textContent || '').trim().match(/^Q(\d+)$/i);
            if (!m) continue;
            if (btn.classList.contains('active-block') || btn.classList.contains('is-active') ||
                btn.getAttribute('aria-current') === 'true') {
                return { index: parseInt(m[1], 10), total: null };
            }
        }
        const offset = getCarouselOffsetRatio(root);
        if (offset !== null && offset >= 0.35) {
            return { index: Math.round(offset) + 1, total: null };
        }
        return null;
    }

    function getQuestionContainers(root) {
        if (isAssessmentComplete(root)) return [];

        const ordered = getOrderedQuestionViews(root);
        if (!ordered.length) return [];

        const qNum = getCurrentQuestionNumber(root);
        if (qNum?.index >= 1) {
            const byLabel = ordered.filter(view => {
                const title = deepQuerySelectorAll(
                    '.component__title-inner, .mcq__title-inner, .matching__title-inner, .objectMatching__title-inner',
                    view,
                )[0];
                const m = (title?.textContent || '').match(/question\s*(\d+)/i);
                return m && parseInt(m[1], 10) === qNum.index;
            });
            if (byLabel.length) return [byLabel[0]];
        }

        const scored = ordered
            .map(qContainer => {
                const body = getQuestionBodyEl(qContainer);
                if (!body) return null;
                return { qContainer, visibility: elementVisibilityRatio(body) };
            })
            .filter(item => item && item.visibility >= (hasActiveQuestionToolbar(root) ? 0.18 : 0.35));

        if (!scored.length) return [];

        scored.sort((a, b) => b.visibility - a.visibility);
        const best = scored[0];
        const second = scored[1];

        if (best.visibility >= 0.4 && (!second || best.visibility >= second.visibility * 1.25)) {
            return [best.qContainer];
        }

        const slideIdx = Math.round(getCarouselOffsetRatio(root) || 0);
        if (slideIdx >= 0 && slideIdx < ordered.length) {
            return [ordered[slideIdx]];
        }

        return [best.qContainer];
    }

    function findVisibleQuestionContainer(root) {
        if (isAssessmentComplete(root)) return null;

        const ordered = getQuestionContainers(root);
        if (ordered.length) return ordered[0];

        const views = deepQuerySelectorAll(QUESTION_VIEW_TAGS, root);
        let best = null;
        let bestVis = 0;
        for (const view of views) {
            if (!isActiveQuestionView(view, root)) continue;
            const body = getQuestionBodyEl(view);
            if (!body) continue;
            const vis = elementVisibilityRatio(body);
            if (vis > bestVis) {
                bestVis = vis;
                best = view;
            }
        }
        const minVis = hasActiveQuestionToolbar(root) ? 0.18 : 0.35;
        return bestVis >= minVis ? best : null;
    }

    function getVisibleAssessmentRoot(minRatio = 0.2) {
        const shells = deepQuerySelectorAll('.assessment-1q, .abs__container.has-arrows', doc);
        return shells.find(shell => isElementSubstantiallyVisible(shell, minRatio)) || null;
    }

    function getInAssessmentStartButtons(root = doc) {
        return deepQuerySelectorAll(
            [
                'adaptive-start-screen-view .start-button',
                '.assessment-start-screen .start-button',
                'adaptive-start-screen-view div.start-button[role="button"]',
                'adaptive-start-screen-view button.start-button',
                '.assessment-start-screen button.start-button',
                'button.start-button',
                '[role="button"].start-button',
                'button[aria-label*="Start" i]',
                'button[title*="Start" i]',
            ].join(', '),
            root,
        );
    }

    function isOnQuizResultScreen(root) {
        if (isAssessmentResultVisible(doc)) return true;
        return !!(root && isAssessmentResultVisible(root));
    }

    function tryExitQuizResult(root) {
        if (!root) return false;

        for (const btn of deepQuerySelectorAll('.block-button', root)) {
            const label = (btn.textContent || '').trim();
            if (!/result/i.test(label)) continue;
            if (btn.classList.contains('active-block') || btn.classList.contains('is-active') ||
                btn.getAttribute('aria-current') === 'true') {
                continue;
            }
            btn.click();
            return true;
        }

        const nextBtns = deepQuerySelectorAll(
            'button[data-blockstrip-slider="right"], button.article__btn-arrow.is-right, .block-buttons-container button.is-right',
            root,
        );
        for (const btn of nextBtns) {
            if (btn.disabled || btn.classList.contains('is-disabled')) continue;
            if (!isElementSubstantiallyVisible(btn, 0.12)) continue;
            btn.click();
            return true;
        }
        return false;
    }

    function isAssessmentInProgress() {
        const root = getVisibleAssessmentRoot(0.2);
        if (!root) return false;
        if (isAssessmentComplete(root)) return false;
        if (isOnQuizResultScreen(root)) return false;

        if (findReadyQuestionContainer(root)) return true;

        if (!isFormalExamLayout(root)) return false;

        const offset = getCarouselOffsetRatio(root);
        if (offset !== null && offset >= 0.35) return true;

        if (hasActiveQuestionToolbar(root)) return true;

        return deepQuerySelectorAll('.block-button.active-block', root).some(btn =>
            /^Q\d+/i.test((btn.textContent || '').trim()) && isElementSubstantiallyVisible(btn, 0.2),
        );
    }

    function shouldBlockModuleAdvance(root, isSubmitEnabledFn, isQuestionAnsweredFn) {
        if (isOnQuizResultScreen(root)) return false;
        if (!root || !isAssessmentInProgress()) return false;
        const qContainer = findReadyQuestionContainer(root);
        if (!qContainer) return false;
        if (isSubmitEnabledFn(doc)) return false;
        return !isQuestionAnsweredFn(qContainer);
    }

    function markInAssessmentStartsHandled(root, clickedButtons) {
        getInAssessmentStartButtons(root).forEach(btn => clickedButtons.add(btn));
    }

    function isAssessmentStarted(clickedButtons) {
        const root = getVisibleAssessmentRoot(0.15);
        if (!root) return false;

        if (isAssessmentComplete(root)) {
            markInAssessmentStartsHandled(root, clickedButtons);
            return true;
        }

        if (findReadyQuestionContainer(root)) {
            markInAssessmentStartsHandled(root, clickedButtons);
            return true;
        }

        if (isFormalExamLayout(root) && isAssessmentInProgress()) {
            markInAssessmentStartsHandled(root, clickedButtons);
            return true;
        }

        const starts = getInAssessmentStartButtons(root);
        if (starts.length === 0) return true;
        return starts.every(btn => clickedButtons.has(btn));
    }

    function needsMoreScrollForAssessment(clickedButtons) {
        if (isAssessmentResultVisible(doc)) return false;
        const root = getVisibleAssessmentRoot(0.15);
        if (!root) return false;
        if (isAssessmentComplete(root)) return false;
        if (isAssessmentStarted(clickedButtons)) return false;
        const pendingStarts = getInAssessmentStartButtons(root).filter(btn => !clickedButtons.has(btn));
        return pendingStarts.some(btn => !isElementSubstantiallyVisible(btn, 0.5));
    }

    return {
        elementVisibilityRatio,
        isElementSubstantiallyVisible,
        isOnQuestionSlide,
        isAssessmentResultVisible,
        isAssessmentComplete,
        findVisibleQuestionContainer,
        findReadyQuestionContainer,
        hasQuestionContent,
        scrollQuestionIntoView,
        isQuestionReadyToAnswer,
        isOnQuizResultScreen,
        tryExitQuizResult,
        getVisibleAssessmentRoot,
        getInAssessmentStartButtons,
        isAssessmentInProgress,
        shouldBlockModuleAdvance,
        markInAssessmentStartsHandled,
        isAssessmentStarted,
        needsMoreScrollForAssessment,
        getCurrentQuestionNumber,
    };
}
