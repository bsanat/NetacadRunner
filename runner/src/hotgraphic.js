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

function findVisibleHotgraphicPopup(doc, content) {
    return deepQuerySelectorAll(
        '[role="dialog"].hotgraphic-popup, .hotgraphic-popup[role="dialog"]',
        doc,
    ).find(el => content.isElementSubstantiallyVisible(el, 0.05));
}

function tryAdvanceHotgraphicPopup(doc, content) {
    if (!findVisibleHotgraphicPopup(doc, content)) return false;

    const nextBtn = deepQuerySelectorAll('button.js-hotgraphic-controls-click.next', doc)
        .find(btn => !btn.disabled &&
            !btn.classList.contains('hidden') &&
            !btn.classList.contains('disabled') &&
            content.isElementSubstantiallyVisible(btn, 0.05));

    if (nextBtn) {
        nextBtn.click();
        return true;
    }

    const closeBtn = deepQuerySelectorAll('button.js-hotgraphic-popup-close', doc)
        .find(btn => !btn.disabled && content.isElementSubstantiallyVisible(btn, 0.05));

    if (closeBtn) {
        closeBtn.click();
        return true;
    }

    return false;
}

function tryClickHotgraphicItem(doc, content) {
    const items = deepQuerySelectorAll('button.js-hotgraphic-item-click', doc)
        .filter(btn => !btn.classList.contains('is-visited') &&
            !btn.disabled &&
            !btn.classList.contains('disabled') &&
            content.isElementSubstantiallyVisible(btn, 0.35))
        .sort((a, b) => (parseInt(a.dataset.index, 10) || 0) - (parseInt(b.dataset.index, 10) || 0));

    if (!items.length) return false;
    items[0].click();
    return true;
}

export function tryHandleHotgraphic(doc, content, opts = {}) {
    if (tryAdvanceHotgraphicPopup(doc, content)) return true;
    if (opts.allowInlineButtons === false) return false;
    return tryClickHotgraphicItem(doc, content);
}
