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
import { installPageDownloadGuard } from './download-guard.js';

function findVisiblePageTracerPopup(doc, content) {
    return deepQuerySelectorAll(
        '[role="dialog"].pageTracer, .notify__popup.pageTracer, [role="dialog"].pagetracer',
        doc,
    ).find(el => content.isElementSubstantiallyVisible(el, 0.05));
}

export function tryAdvancePageTracerPopup(doc, content) {
    if (!findVisiblePageTracerPopup(doc, content)) return false;

    const closeBtn = deepQuerySelectorAll(
        'button.close-button, button#close-btn, button.close-btn',
        doc,
    ).find(btn => !btn.disabled &&
        !btn.classList.contains('disabled') &&
        content.isElementSubstantiallyVisible(btn, 0.05));

    if (closeBtn) {
        closeBtn.click();
        return true;
    }

    return false;
}

function tryHandleAccordion(doc, content, clickedButtons, opts) {
    if (opts.allowInlineButtons === false) return false;

    const items = deepQuerySelectorAll('button.accordion__item-btn', doc)
        .filter(btn => btn.getAttribute('aria-expanded') === 'false' &&
            !btn.disabled &&
            !btn.classList.contains('disabled') &&
            !clickedButtons.has(btn) &&
            content.isElementSubstantiallyVisible(btn, 0.35))
        .sort((a, b) => (parseInt(a.dataset.index, 10) || 0) - (parseInt(b.dataset.index, 10) || 0));

    if (!items.length) return false;
    items[0].click();
    clickedButtons.add(items[0]);
    return true;
}

function tryHandlePageTracer(doc, content, win, clickedButtons, opts) {
    if (opts.allowInlineButtons === false) return false;

    const items = deepQuerySelectorAll('button.pageTracer-button', doc)
        .filter(btn => !btn.disabled &&
            !btn.classList.contains('disabled') &&
            !clickedButtons.has(btn) &&
            content.isElementSubstantiallyVisible(btn, 0.35))
        .sort((a, b) => (parseInt(a.dataset.pageTracerButtonId, 10) || 0) -
            (parseInt(b.dataset.pageTracerButtonId, 10) || 0));

    if (!items.length) return false;
    const btn = items[0];
    btn.click();
    clickedButtons.add(btn);
    return true;
}

export function tryHandleFlipcards(doc, content, clickedButtons) {
    const items = deepQuerySelectorAll('button.flipcard__item', doc)
        .filter(btn => !btn.disabled &&
            !btn.classList.contains('disabled') &&
            !clickedButtons.has(btn) &&
            content.isElementSubstantiallyVisible(btn, 0.35) &&
            btn.querySelector('.flipcard__item-back[aria-hidden="true"]'))
        .sort((a, b) => (parseInt(a.dataset.index, 10) || 0) - (parseInt(b.dataset.index, 10) || 0));

    if (!items.length) return false;
    clickedButtons.add(items[0]);
    items[0].click();
    return true;
}

export function tryHandleInteractiveWidgets(doc, content, win, clickedButtons, opts = {}) {
    installPageDownloadGuard(win);

    if (tryAdvancePageTracerPopup(doc, content)) return true;
    if (tryHandleFlipcards(doc, content, clickedButtons)) return true;
    if (tryHandleAccordion(doc, content, clickedButtons, opts)) return true;
    if (tryHandlePageTracer(doc, content, win, clickedButtons, opts)) return true;
    return false;
}
