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

import { deepQuerySelectorAll, getTopDocument } from './dom.js';

export function isPracticeExamTitle(text) {
    const t = (text || '').trim();
    if (!t || /checkpoint/i.test(t) || /module\s+.*quiz/i.test(t)) return false;
    if (/packet\s+tracer/i.test(t) && !/\bexam\b/i.test(t)) return false;
    if (/certification\s+practice\s+exam/i.test(t)) return true;
    if (/practice\s+final\s+exam/i.test(t)) return true;
    if (/\bpractice\s+exam\b/i.test(t)) return true;
    if (/\bpractice\b/i.test(t) && /\bexam\b/i.test(t)) return true;
    return false;
}

export function isCheckpointExam() {
    const spans = getTopDocument().querySelectorAll('span[class*="selectedNodeName"]');
    for (const span of spans) {
        if (/checkpoint\s+exam/i.test((span.textContent || '').trim())) return true;
    }
    return false;
}

export function isPracticeExam() {
    const spans = getTopDocument().querySelectorAll('span[class*="selectedNodeName"]');
    for (const span of spans) {
        if (isPracticeExamTitle(span.textContent)) return true;
    }
    try {
        const iframe = getTopDocument().querySelector('iframe[title="Course content"]');
        const src = iframe?.getAttribute('src') || '';
        let href = '';
        try {
            href = iframe?.contentWindow?.location?.href || '';
        } catch {}
        const route = `${src} ${href}`;
        if (/certification-practice-exam|practice-final-exam/i.test(route)) return true;
    } catch {}
    return false;
}

export function isFinalExamTitle(text) {
    const t = (text || '').trim();
    if (!t || /checkpoint/i.test(t) || /module\s+.*quiz/i.test(t)) return false;
    if (/\bpractice\b/i.test(t)) return false;
    if (/\bcourse\s+final\s+exam\b/i.test(t)) return true;
    if (/\bfinal\s+exam\b/i.test(t)) return true;
    if (/\bcourse\s+final\s+test\b/i.test(t)) return true;
    if (/\bfinal\s+test\b/i.test(t)) return true;
    return false;
}

export function isFinalExam() {
    const spans = getTopDocument().querySelectorAll('span[class*="selectedNodeName"]');
    for (const span of spans) {
        if (isFinalExamTitle(span.textContent)) return true;
    }
    try {
        const iframe = getTopDocument().querySelector('iframe[title="Course content"]');
        const src = iframe?.getAttribute('src') || '';
        let href = '';
        try {
            href = iframe?.contentWindow?.location?.href || '';
        } catch {}
        const route = `${src} ${href}`;
        if (/practice-final-exam/i.test(route)) return false;
        if (/course-final-exam|final-exam|course-final-test|final-test/i.test(route)) return true;
    } catch {}
    return false;
}

export function isSecureExam() {
    return isPracticeExam() || isFinalExam();
}

export function isModuleQuiz(doc) {
    const spans = getTopDocument().querySelectorAll('span[class*="selectedNodeName"]');
    for (const span of spans) {
        const t = (span.textContent || '').trim();
        if (/\bpractice\s+quiz\b/i.test(t)) return true;
        if (/module\s+(practice\s+and\s+)?quiz/i.test(t)) return true;
        if (/^\d+(?:\.\d+)+\.?\s+quiz\b/i.test(t)) return true;
        if (/module\s+\d+\s+exam/i.test(t)) return true;
        if (/module\s+exam/i.test(t)) return true;
    }
    if (!doc) return false;
    const hints = deepQuerySelectorAll('.module-title, .page__title-inner, h1, h2', doc);
    return hints.some(el => /(module\s+(quiz|exam)|practice\s+quiz|\d+(?:\.\d+)+\.?\s+quiz)/i.test((el.textContent || '').trim()));
}
