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

function getCheckPhase(checkView) {
    return parseInt(checkView.dataset.netacadCheckPhase || '0', 10) || 0;
}

export function isCheckViewComplete(checkView) {
    return getCheckPhase(checkView) >= 2;
}

export function getCheckAction(checkView) {
    const phase = getCheckPhase(checkView);
    if (phase >= 2) return null;
    if (phase === 0) return 'show';
    return 'verify';
}

export function tryClickCheckViewButton(checkView, btn) {
    const action = getCheckAction(checkView);
    if (!action) return false;

    btn.click();
    checkView.dataset.netacadCheckPhase = action === 'show' ? '1' : '2';
    return true;
}

export function tryClickVisibleCheck(doc, scope = doc, opts = {}) {
    const minVis = opts.minVis ?? 0.15;
    const visFn = opts.elementVisibilityRatio;
    if (!visFn) return false;

    let bestBtn = null;
    let bestCheckView = null;
    let bestVis = 0;

    for (const btn of deepQuerySelectorAll('button.check__button', scope)) {
        if (btn.disabled || btn.classList.contains('is-disabled') || btn.hasAttribute('disabled')) {
            continue;
        }

        const checkView = btn.closest('check-view') ||
            deepQuerySelectorAll('check-view', scope).find(cv =>
                deepQuerySelectorAll('button.check__button', cv)[0] === btn,
            );
        if (!checkView || !getCheckAction(checkView)) continue;

        const vis = visFn(btn);
        if (vis < minVis || vis <= bestVis) continue;

        bestVis = vis;
        bestBtn = btn;
        bestCheckView = checkView;
    }

    if (!bestBtn || !bestCheckView) return false;
    return tryClickCheckViewButton(bestCheckView, bestBtn);
}
