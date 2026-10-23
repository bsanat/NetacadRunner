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
import { normalizeText } from './text.js';

function findCodewindowBefore(checkView, doc) {
    let last = null;
    for (const cw of deepQuerySelectorAll('codewindow-view', doc)) {
        if (checkView.compareDocumentPosition(cw) & Node.DOCUMENT_POSITION_PRECEDING) {
            last = cw;
        }
    }
    return last;
}

export function extractPythonQuestionText(codewindowRoot) {
    const el = deepQuerySelectorAll('.before-body-text', codewindowRoot)[0];
    if (!el) return '';
    const raw = (el.innerText || el.textContent || '').replace(/\u00A0/g, ' ');
    return normalizeText(raw.replace(/^question\s*\d+\s*:\s*/i, ''));
}

export function findVisiblePythonCheckExercise(doc, elementVisibilityRatio, minVis = 0.15) {
    let best = null;
    let bestVis = 0;

    for (const checkView of deepQuerySelectorAll('check-view', doc)) {
        const btn = deepQuerySelectorAll('button.check__button', checkView)[0];
        if (!btn || btn.disabled || btn.classList.contains('is-disabled') ||
            btn.hasAttribute('disabled')) {
            continue;
        }
        if (!getCheckAction(checkView)) continue;

        const vis = elementVisibilityRatio(btn);
        if (vis < minVis || vis <= bestVis) continue;

        const codewindow = findCodewindowBefore(checkView, doc);
        if (!codewindow) continue;

        bestVis = vis;
        best = {
            checkView,
            button: btn,
            codewindow,
            questionText: extractPythonQuestionText(codewindow),
            code: extractQuestionCodeText(codewindow),
        };
    }

    return best;
}

export function tryHandlePythonExercise(doc, databases, assessment) {
    const ctx = findVisiblePythonCheckExercise(doc, assessment.elementVisibilityRatio);
    if (!ctx) return false;

    const unansweredMcq = deepQuerySelectorAll('mcq-view', doc).some(v => {
        const body = getQuestionBodyEl(v);
        return body &&
            assessment.elementVisibilityRatio(body) >= 0.15 &&
            !isQuestionAnswered(v);
    });
    if (unansweredMcq) return false;

    const activeDb = databases.getActiveDb(doc);
    const mcqViews = deepQuerySelectorAll('mcq-view', doc).filter(v => {
        const body = getQuestionBodyEl(v);
        return body && assessment.elementVisibilityRatio(body) >= 0.15;
    });

    if (mcqViews.length && activeDb.ready) {
        const mcq = mcqViews.sort(
            (a, b) => assessment.elementVisibilityRatio(getQuestionBodyEl(b)) -
                assessment.elementVisibilityRatio(getQuestionBodyEl(a)),
        )[0];
        const entry = databases.lookupEntryCached(activeDb, ctx.questionText, ctx.code);
        if (entry && !shouldTreatAsManual(entry, mcq)) {
            solveQuestion(mcq, entry, ctx.questionText, doc, false);
        }
    }

    return tryClickCheckViewButton(ctx.checkView, ctx.button);
}
