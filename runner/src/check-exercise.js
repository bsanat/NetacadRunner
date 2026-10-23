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

import { getCheckAction, tryClickCheckViewButton } from './check-button.js';
import { deepQuerySelectorAll } from './dom.js';
import {
    extractQuestionCodeText,
    getQuestionBodyEl,
    isQuestionAnswered,
    shouldTreatAsManual,
    solveQuestion,
} from './solver.js';
import { extractCleanText } from './text.js';

function findBlockRoot(checkView) {
    return checkView.closest('block-view, article-view, .component__widget, .abs__block') ||
        checkView.parentElement;
}

function blockMcqsReady(block, assessment) {
    for (const mcq of deepQuerySelectorAll('mcq-view', block)) {
        const body = getQuestionBodyEl(mcq);
        if (!body || assessment.elementVisibilityRatio(body) < 0.15) continue;
        if (!isQuestionAnswered(mcq)) return false;
    }
    return true;
}

function answerBlockMcqs(block, doc, databases, assessment) {
    const activeDb = databases.getActiveDb(doc);
    if (!activeDb.ready) return false;

    let acted = false;
    for (const mcq of deepQuerySelectorAll('mcq-view', block)) {
        if (isQuestionAnswered(mcq)) continue;

        const body = getQuestionBodyEl(mcq);
        if (!body || assessment.elementVisibilityRatio(body) < 0.15) continue;

        const qText = extractCleanText(body);
        const qCode = extractQuestionCodeText(mcq);
        const entry = databases.lookupEntryCached(activeDb, qText, qCode);
        if (entry && !shouldTreatAsManual(entry, mcq) &&
            solveQuestion(mcq, entry, qText, doc, false)) {
            acted = true;
        }
    }

    return acted;
}

export function tryHandleCheckExercise(doc, databases, assessment) {
    const visFn = assessment.elementVisibilityRatio;

    for (const checkView of deepQuerySelectorAll('check-view', doc)) {
        if (!getCheckAction(checkView)) continue;

        const btn = deepQuerySelectorAll('button.check__button', checkView)[0];
        if (!btn || btn.disabled || btn.classList.contains('is-disabled') ||
            btn.hasAttribute('disabled')) {
            continue;
        }

        if (visFn(btn) < 0.15) continue;

        const block = findBlockRoot(checkView);
        if (answerBlockMcqs(block, doc, databases, assessment)) {
            return true;
        }
        if (!blockMcqsReady(block, assessment)) continue;

        return tryClickCheckViewButton(checkView, btn);
    }

    return false;
}
