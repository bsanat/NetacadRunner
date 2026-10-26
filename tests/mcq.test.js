// SPDX-License-Identifier: GPL-3.0-or-later
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { tryHandleCheckExercise } from '../runner/src/check-exercise.js';
import { tryHandlePythonExercise } from '../runner/src/python-exercise.js';
import { isQuestionAnswered, selectMcqOptions, trySubmitAndAdvance } from '../runner/src/solver.js';

function textNode(textContent) {
    return { textContent, querySelectorAll: () => [], cloneNode: () => textNode(textContent) };
}

function fixture({ question = 'Which devices? Choose two.', answers = ['router', 'switch'],
    options = ['router', 'switch', 'hub'], type = 'checkbox', selected = [], rerender = false } = {}) {
    const checked = new Set(selected);
    const clicks = [];
    let checks = 0;
    let submits = 0;
    let detachedClicks = 0;
    const body = textNode(question);
    const q = {
        tagName: 'MCQ-VIEW', dataset: {}, options: [], closest: () => block,
        querySelectorAll(selector) {
            if (selector.includes('.mcq__body-inner')) return [body];
            if (selector === '.mcq__item, .js-mcq-item') return this.options;
            if (selector === 'input:checked') return this.options.map(o => o.input).filter(i => i.checked);
            if (selector === 'input[type="checkbox"]') return type === 'checkbox' ? this.options.map(o => o.input) : [];
            return [];
        },
    };
    function render() {
        q.options.forEach(o => { o.isConnected = false; });
        q.options = options.map((text, index) => {
            const input = new EventTarget();
            input.type = type;
            Object.defineProperty(input, 'checked', {
                get: () => checked.has(index),
                set(value) { if (value) checked.add(index); else checked.delete(index); },
            });
            const opt = {
                input, isConnected: true,
                querySelectorAll(selector) {
                    if (selector === '.mcq__item-text-inner') return [textNode(text)];
                    if (selector === 'label') return [label];
                    if (selector === 'input' || selector === 'input[type="radio"], input[type="checkbox"]' ||
                        selector === `input[type="${type}"]`) return [input];
                    return [];
                },
                querySelector(selector) { return this.querySelectorAll(selector)[0] || null; },
            };
            const label = { click() {
                if (!opt.isConnected) { detachedClicks++; return; }
                if (type === 'radio') checked.clear();
                input.checked = !input.checked;
                clicks.push(text);
                if (rerender) render();
            } };
            return opt;
        });
    }
    render();
    const check = {
        disabled: false, classList: { contains: () => false }, hasAttribute: () => false,
        closest: () => checkView, click() { checks++; },
    };
    const submit = { ...check, click() { submits++; } };
    const checkView = {
        dataset: {}, closest: () => block, compareDocumentPosition: () => 2,
        querySelectorAll: selector => selector === 'button.check__button' ? [check] : [],
    };
    const block = {
        querySelectorAll(selector) {
            if (selector === 'mcq-view') return [q];
            if (selector === 'button.check__button') return [check];
            return [];
        },
    };
    const codewindow = {
        closest: () => null,
        querySelectorAll: selector => selector === '.before-body-text' ? [body] : [],
    };
    const doc = {
        querySelectorAll(selector) {
            if (selector === 'mcq-view') return [q];
            if (selector === 'check-view') return [checkView];
            if (selector === 'codewindow-view') return [codewindow];
            if (selector === '.submit-button') return [submit];
            return [];
        },
    };
    const databases = {
        getActiveDb: () => ({ ready: true }), lookupEntryCached: () => ({ answers }),
    };
    return { q, doc, databases, answers, clicks, checked, assessment: { elementVisibilityRatio: () => 1 },
        checks: () => checks, submits: () => submits, detachedClicks: () => detachedClicks };
}

for (const [word, count] of [['two', 2], ['three', 3]]) {
    test(`Choose ${word}: partial selections stay incomplete across ticks`, () => {
        const f = fixture({ question: `Which devices?\nChoose ${word} correct answers.`,
            answers: ['router', 'switch', 'hub'].slice(0, count) });
        for (let i = 1; i <= count; i++) {
            assert.equal(selectMcqOptions(f.q, f.answers, 'which devices?', { multiClick: false }), true);
            assert.equal(f.checked.size, i);
            assert.equal(isQuestionAnswered(f.q), i === count);
        }
        assert.equal(selectMcqOptions(f.q, f.answers, '', { multiClick: false }), false);
        assert.equal(f.checked.size, count);
    });
}

test('raw Choose two instruction wins over extra answer aliases', () => {
    const f = fixture({ selected: [0, 1], answers: ['router', 'switch', 'hub'] });
    assert.equal(isQuestionAnswered(f.q, f.answers), true);
    assert.equal(selectMcqOptions(f.q, f.answers, 'which devices?', { multiClick: false }), false);
    assert.deepEqual(f.clicks, []);
});

test('Choose one checkbox needs one selection even with extra database aliases', () => {
    const f = fixture({ question: 'Which device? Choose one.', selected: [0] });
    assert.equal(isQuestionAnswered(f.q, f.answers), true);
    assert.equal(selectMcqOptions(f.q, f.answers, 'which device?'), false);
});

test('a ready Submit button cannot submit a partial selection', () => {
    const f = fixture({ question: 'Which devices?', selected: [0] });
    assert.equal(isQuestionAnswered(f.q, f.answers), false);
    assert.equal(trySubmitAndAdvance(f.doc, f.q, { correctAnswers: f.answers }), false);
    assert.equal(f.checks(), 0);
    assert.equal(f.submits(), 0);
});

test('inline Check completes a partial answer without Choose text before checking', () => {
    const f = fixture({ question: 'Which devices?', selected: [0] });
    assert.equal(tryHandleCheckExercise(f.doc, f.databases, f.assessment), true);
    assert.deepEqual(f.clicks, ['switch']);
    assert.equal(f.checks(), 0);
    assert.equal(tryHandleCheckExercise(f.doc, f.databases, f.assessment), true);
    assert.equal(f.checks(), 1);
});

test('inline Check stays blocked when only one of two required answers matches', () => {
    const f = fixture({ question: 'Which devices?', answers: ['router', 'firewall'] });
    tryHandleCheckExercise(f.doc, f.databases, f.assessment);
    tryHandleCheckExercise(f.doc, f.databases, f.assessment);
    assert.deepEqual(f.clicks, ['router']);
    assert.equal(f.checks(), 0);
});

test('an incorrect preselected option does not count towards a complete database answer', () => {
    const f = fixture({ selected: [0, 2] });
    assert.equal(isQuestionAnswered(f.q, f.answers), false);
    assert.equal(trySubmitAndAdvance(f.doc, f.q, { correctAnswers: f.answers }), false);
    assert.equal(f.checks(), 0);
});

test('inline Check removes an extra choice and fills both required choices before checking', () => {
    const f = fixture({ selected: [2] });
    for (let tick = 0; tick < 3; tick++) {
        assert.equal(tryHandleCheckExercise(f.doc, f.databases, f.assessment), true);
        assert.equal(f.checks(), 0);
    }
    assert.deepEqual([...f.checked].sort(), [0, 1]);
    tryHandleCheckExercise(f.doc, f.databases, f.assessment);
    assert.equal(f.checks(), 1);
});

test('single-choice radio needs only one choice even with several database aliases', () => {
    const f = fixture({ type: 'radio', question: 'Which device?', answers: ['router', 'switch'] });
    selectMcqOptions(f.q, f.answers, 'which device?', { multiClick: false });
    assert.equal(f.checked.size, 1);
    assert.equal(isQuestionAnswered(f.q, f.answers), true);
});

test('batch selection yields to a fresh tick when the first click replaces the DOM', () => {
    const f = fixture({ rerender: true });
    selectMcqOptions(f.q, f.answers, '', { multiClick: true });
    assert.deepEqual(f.clicks, ['router']);
    assert.equal(f.detachedClicks(), 0);
    assert.equal(isQuestionAnswered(f.q), false);
    selectMcqOptions(f.q, f.answers, '', { multiClick: true });
    assert.deepEqual(f.clicks, ['router', 'switch']);
    assert.equal(isQuestionAnswered(f.q), true);
});

test('Python Check waits for all database answers when the body has no Choose text', () => {
    globalThis.Node = { DOCUMENT_POSITION_PRECEDING: 2 };
    const f = fixture({ question: 'Which devices?', answers: ['router', 'switch', 'hub'], selected: [0] });
    tryHandlePythonExercise(f.doc, f.databases, f.assessment);
    assert.equal(f.checked.size, 2);
    assert.equal(f.checks(), 0);
    tryHandlePythonExercise(f.doc, f.databases, f.assessment);
    assert.equal(f.checked.size, 3);
    assert.equal(f.checks(), 1);
});
