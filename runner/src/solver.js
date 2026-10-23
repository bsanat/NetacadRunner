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
import { tryClickVisibleCheck } from './check-button.js';
import {
    dbAnswerMatchesOption,
    expectedSelectionCount,
    extractCleanText,
    extractMcqOptionText,
    isMatchingAnswers,
    normalizeMcqOptionText,
    normalizeText,
    parseMatchingPairs,
    scoreOptionAnswer,
} from './text.js';

export function getQuestionBodyEl(qContainer) {
    return deepQuerySelectorAll(
        '.mcq__body-inner, .matching__body-inner, .objectMatching__body-inner, .js-question-text',
        qContainer,
    )[0];
}

function decodeHtmlEntities(str) {
    const ta = document.createElement('textarea');
    ta.innerHTML = String(str ?? '');
    return ta.value;
}

function normalizeCodeDomText(str) {
    return String(str ?? '')
        .replace(/\u00A0/g, ' ')
        .replace(/\r?\n+/g, '\n')
        .replace(/[ \t]+\n/g, '\n')
        .replace(/\n[ \t]+/g, '\n')
        .trim();
}

export function extractQuestionCodeText(qContainer) {
    if (!qContainer) return '';

    const slideRoot =
        qContainer.closest('.js-abs-block-container, .abs__container, .assessment-1q') || qContainer;

    const cw =
        deepQuerySelectorAll(
            [
                'code-window-webcomponent-mcq[precode]',
                'code-window-webcomponent-mcq',
                'code-window-webcomponent[precode]',
                'code-window-webcomponent',
            ].join(', '),
            slideRoot,
        )[0] || null;

    let code = '';

    if (cw) {
        const precodeAttr = cw.getAttribute('precode');
        if (precodeAttr) {
            try {
                const decoded = decodeHtmlEntities(precodeAttr);
                const arr = JSON.parse(decoded);
                const lines = (arr || [])
                    .map(o => (o && typeof o.text === 'string' ? o.text : ''))
                    .map(t => decodeHtmlEntities(t));
                code = lines.join('\n');
            } catch {}
        }

        if (!code) {
            const commands = deepQuerySelectorAll('.code-container .command, .command', slideRoot);
            if (commands.length) {
                code = commands
                    .map(n => (n.innerText || n.textContent || '').trim())
                    .filter(Boolean)
                    .join('\n');
            }
        }
    }

    return normalizeCodeDomText(code);
}

export function isMatchingQuestionContainer(qContainer) {
    const tag = (qContainer.tagName || '').toLowerCase();
    if (tag === 'matching-view' || tag === 'object-matching-view') return true;
    return deepQuerySelectorAll(
        'matching-dropdown-view, object-matching-dropdown-view, .matching__item_main, .objectMatching-category-item-container',
        qContainer,
    ).length > 0;
}

export function isMatchingDropdownComplete(qContainer) {
    const rows = deepQuerySelectorAll(
        'matching-dropdown-view, object-matching-dropdown-view, .matching__item_main, .objectMatching-category-item-container',
        qContainer,
    );
    if (!rows.length) return false;

    let required = 0;
    let done = 0;
    for (const row of rows) {
        const titleEl = deepQuerySelectorAll(
            '.matching__item-title_inner, .objectMatching__item-title_inner, .matching__item-title',
            row,
        )[0];
        const left = normalizeText(titleEl?.textContent || '');
        if (!left || /please select/i.test(left)) continue;

        required++;
        const selected = deepQuerySelectorAll('.dropdown__inner, .js-dropdown-inner', row)[0];
        const selText = normalizeText(selected?.textContent || '');
        if (selText && !/please select an option/i.test(selText)) done++;
    }
    return required > 0 && done === required;
}

export function isQuestionAnswered(qContainer) {
    if (isMatchingDropdownComplete(qContainer)) return true;
    if (deepQuerySelectorAll('input:checked', qContainer).length > 0) return true;

    const selects = deepQuerySelectorAll('select', qContainer);
    if (selects.length > 0) {
        return selects.every(s => s.selectedIndex > 0 && s.value);
    }

    const textInputs = deepQuerySelectorAll(
        'input:not([type="hidden"]):not([type="radio"]):not([type="checkbox"]), textarea',
        qContainer,
    );
    if (textInputs.length > 0) {
        return textInputs.every(i => (i.value || '').trim().length > 0);
    }

    const matched = deepQuerySelectorAll('.is-matched, .is-complete, [data-matched="true"]', qContainer);
    return matched.length > 0;
}

export function shouldTreatAsManual(entry, qContainer) {
    if (entry?.manual) return true;
    if (isMatchingQuestionContainer(qContainer) && !(entry?.answers || []).length) return true;
    return false;
}

export function waitForManualCompletion(qContainer, doc, entry) {
    const userDone = isQuestionAnswered(qContainer) || isSubmitEnabled(doc);
    if (!userDone) {
        if (!qContainer.dataset.manualWarned) {
            qContainer.dataset.manualWarned = 'true';
        }
        return true;
    }
    delete qContainer.dataset.manualWarned;
    return false;
}

function trySetSelectForRow(row, rightNorm) {
    const select = row.querySelector('select');
    if (!select) return false;
    for (const opt of select.options) {
        const optNorm = normalizeText(opt.textContent);
        if (optNorm === rightNorm || optNorm.includes(rightNorm) || rightNorm.includes(optNorm)) {
            if (select.value !== opt.value) {
                select.value = opt.value;
                select.dispatchEvent(new Event('change', { bubbles: true }));
                select.dispatchEvent(new Event('input', { bubbles: true }));
                return true;
            }
            return false;
        }
    }
    return false;
}

export function solveMatchingQuestion(qContainer, pairs) {
    let changed = false;
    const rows = deepQuerySelectorAll('tr, li, .matching__item, .mcq__item, [class*="matching"]', qContainer);

    for (const { left, right } of pairs) {
        let pairDone = false;

        for (const row of rows) {
            const rowText = extractCleanText(row);
            if (!rowText || (!rowText.includes(left) && !left.includes(rowText))) continue;
            if (trySetSelectForRow(row, right)) {
                changed = true;
                pairDone = true;
                break;
            }
        }

        if (pairDone) continue;

        const leftEls = deepQuerySelectorAll('button, [role="button"], label, .mcq__item', qContainer)
            .filter(el => {
                const t = extractCleanText(el);
                return t === left || (t.length > 3 && (t.includes(left) || left.includes(t)));
            });

        for (const leftEl of leftEls) {
            const rightEls = deepQuerySelectorAll('button, [role="button"], label, .mcq__item, [role="option"]', qContainer)
                .filter(el => {
                    const t = extractCleanText(el);
                    return t === right || (t.length > 3 && (t.includes(right) || right.includes(t)));
                });

            for (const rightEl of rightEls) {
                if (leftEl === rightEl) continue;
                leftEl.click();
                rightEl.click();
                changed = true;
                pairDone = true;
                break;
            }
            if (pairDone) break;
        }
    }
    return changed;
}

function rateMcqOptions(options, correctAnswers) {
    const rated = [];
    for (const opt of options) {
        const optTextEl = deepQuerySelectorAll('.mcq__item-text-inner', opt)[0];
        if (!optTextEl) continue;
        const text = extractMcqOptionText(optTextEl);
        if (!text) continue;
        rated.push({ opt, text, ...scoreOptionAnswer(text, correctAnswers) });
    }
    return rated;
}

function clickMcqOption(opt) {
    const input = deepQuerySelectorAll('input[type="radio"], input[type="checkbox"]', opt)[0] ||
        opt.querySelector('input[type="radio"], input[type="checkbox"]');
    const label = deepQuerySelectorAll('label', opt)[0] || opt.querySelector('label');
    if (label) label.click();
    else if (input) input.click();
    else opt.click();

    if (input && !input.checked) {
        input.checked = true;
        input.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
        input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
    }
}

function pickOptionsToSelect(rated, maxSelect, correctAnswers) {
    if (!rated.length || maxSelect < 1) return [];

    const sorted = [...rated].sort((a, b) => a.tier - b.tier || b.score - a.score);
    const answers = (correctAnswers || []).map(a => normalizeMcqOptionText(a)).filter(Boolean);
    const picked = [];
    const used = new Set();

    for (const ans of answers) {
        if (picked.length >= maxSelect) break;
        let best = null;
        for (const row of sorted) {
            if (used.has(row.opt)) continue;
            const exact = row.text === ans;
            const match = exact || dbAnswerMatchesOption(ans, row.text);
            if (!match) continue;
            if (!best || row.tier < best.tier || (row.tier === best.tier && row.score > best.score)) {
                best = row;
            }
        }
        if (best) {
            picked.push(best);
            used.add(best.opt);
        }
    }

    if (picked.length >= maxSelect) return picked.slice(0, maxSelect);

    for (const row of sorted) {
        if (picked.length >= maxSelect) break;
        if (used.has(row.opt)) continue;
        if (row.tier <= 1) {
            picked.push(row);
            used.add(row.opt);
        }
    }
    if (picked.length) return picked.slice(0, maxSelect);

    const fuzzy = sorted.filter(x => x.tier === 2 && x.score >= 0.92);
    if (!fuzzy.length) return [];

    const topScore = fuzzy[0].score;
    return fuzzy.filter(x => x.score >= topScore - 0.001).slice(0, maxSelect);
}

function getOptionsToSelect(options, correctAnswers, maxSelect) {
    return pickOptionsToSelect(rateMcqOptions(options, correctAnswers), maxSelect, correctAnswers);
}

function countCheckedMatchingOptions(options, correctAnswers, maxSelect) {
    const targets = new Set(getOptionsToSelect(options, correctAnswers, maxSelect).map(x => x.opt));
    let n = 0;
    for (const opt of options) {
        if (!targets.has(opt)) continue;
        const input = deepQuerySelectorAll('input', opt)[0] || opt.querySelector('input');
        if (input && input.checked) n++;
    }
    return n;
}

function hasCorrectMcqSelection(options, correctAnswers, maxSelect) {
    return countCheckedMatchingOptions(options, correctAnswers, maxSelect) >= maxSelect;
}

export function selectMcqOptions(qContainer, correctAnswers, questionText, opts = {}) {
    const needCount = expectedSelectionCount(questionText, correctAnswers);
    const multiClick = opts.multiClick ?? needCount > 1;
    const options = deepQuerySelectorAll('.mcq__item, .js-mcq-item', qContainer);
    const isRadioGroup = !!deepQuerySelectorAll('[role="radiogroup"]', qContainer).length ||
        (options.length > 0 && options.every(opt => {
            const input = deepQuerySelectorAll('input[type="radio"]', opt)[0];
            return input || opt.querySelector('input[type="radio"]');
        }));
    const maxSelect = isRadioGroup ? 1 : needCount;
    const toSelect = getOptionsToSelect(options, correctAnswers, maxSelect);

    if (!toSelect.length) return false;
    if (hasCorrectMcqSelection(options, correctAnswers, maxSelect)) return false;

    let clicked = false;
    for (const { opt } of toSelect) {
        const input = deepQuerySelectorAll('input', opt)[0] || opt.querySelector('input');
        if (input && input.checked) continue;
        clickMcqOption(opt);
        clicked = true;
        if (!multiClick) return true;
    }
    return clicked;
}

export function isSubmitEnabled(doc) {
    const submitBtns = deepQuerySelectorAll('.submit-button', doc);
    return submitBtns.some(sBtn =>
        !sBtn.disabled && !sBtn.classList.contains('is-disabled') && !sBtn.hasAttribute('disabled'),
    );
}

export function trySubmitAndAdvance(doc, qContainer = null, opts = {}) {
    const answered = !qContainer || isQuestionAnswered(qContainer);
    const scope = qContainer?.closest?.('.js-abs-block-container, .abs__container, .assessment-1q') ||
        qContainer || doc;

    if (answered && opts.elementVisibilityRatio) {
        if (tryClickVisibleCheck(doc, scope, {
            elementVisibilityRatio: opts.elementVisibilityRatio,
        })) {
            return true;
        }
    } else if (answered) {
        const checkBtn = deepQuerySelectorAll('button.check__button', scope).find(b =>
            !b.disabled && !b.classList.contains('is-disabled') && !b.hasAttribute('disabled'),
        );
        if (checkBtn) {
            checkBtn.click();
            return true;
        }
    }

    const submitBtns = deepQuerySelectorAll('.submit-button', doc);
    for (const sBtn of submitBtns) {
        if (!sBtn.disabled && !sBtn.classList.contains('is-disabled') && !sBtn.hasAttribute('disabled')) {
            if (!answered) return false;
            sBtn.click();
            return true;
        }
    }

    if (!answered) return false;

    const innerNextBtns = deepQuerySelectorAll('button[data-blockstrip-slider="right"], .is-right', doc);
    for (const nBtn of innerNextBtns) {
        if (nBtn.closest('.block-buttons-container') && !nBtn.disabled && !nBtn.classList.contains('is-disabled')) {
            nBtn.click();
            return true;
        }
    }
    return false;
}

export function solveQuestion(qContainer, entry, qText, doc, multiClick) {
    const correctAnswers = entry.answers;
    if (isMatchingAnswers(correctAnswers)) {
        return solveMatchingQuestion(qContainer, parseMatchingPairs(correctAnswers));
    }
    return selectMcqOptions(qContainer, correctAnswers, qText, { multiClick });
}
