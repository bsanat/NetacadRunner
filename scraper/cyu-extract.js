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

export function extractAnswers() {
    const isQuestionStrong = (text) => {
        const t = (text || "").replace(/[\u200B-\u200D\uFEFF]/g, "").trim();
        return /^\d+\.\s/.test(t) && !/^Explanation/i.test(t);
    };

    const questionNumber = (text) => {
        const m = (text || "").match(/^(\d+)\./);
        return m ? parseInt(m[1], 10) : null;
    };

    const isNextQuestion = (el) => {
        if (!el) return false;
        if (el.tagName === "STRONG" && isQuestionStrong(el.innerText)) return true;
        if (el.tagName === "P") {
            const nextStrong = el.querySelector(":scope > strong");
            if (nextStrong && isQuestionStrong(nextStrong.innerText)) return true;
        }
        return false;
    };

    const collectCorrectAnswers = (anchor) => {
        const correctAnswers = [];
        let nextSibling = anchor.nextElementSibling;

        while (nextSibling) {
            if (nextSibling.tagName === "UL") {
                nextSibling.querySelectorAll("li.correct_answer").forEach((ans) => {
                    const text = ans.innerText.trim();
                    if (text) correctAnswers.push(text);
                });
                break;
            }

            if (isNextQuestion(nextSibling)) break;

            nextSibling = nextSibling.nextElementSibling;
        }

        return correctAnswers;
    };

    const countQuestionsIn = (el) => {
        let count = 0;
        const seen = new Set();

        const addStrong = (strong) => {
            if (!strong || !isQuestionStrong(strong.innerText)) return;
            if (strong.closest(".message_box")) return;
            const num = questionNumber(strong.innerText);
            if (num == null || seen.has(num)) return;
            seen.add(num);
            count++;
        };

        for (const p of el.querySelectorAll("p")) {
            addStrong(p.querySelector(":scope > strong"));
        }
        for (const strong of el.querySelectorAll("strong")) {
            const parent = strong.parentElement;
            if (parent?.tagName === "P" && parent.querySelector(":scope > strong") === strong) {
                continue;
            }
            addStrong(strong);
        }

        return count;
    };

    const getContentRoot = () => {
        const candidates = [
            ...document.querySelectorAll(".thecontent"),
            ...document.querySelectorAll(".entry-content .thecontent"),
            ...document.querySelectorAll(".post-single-content .thecontent"),
            ...document.querySelectorAll(".entry-content"),
            ...document.querySelectorAll("article"),
        ];

        let best = document.body;
        let maxQuestions = 0;

        for (const el of candidates) {
            const count = countQuestionsIn(el);
            if (count > maxQuestions) {
                maxQuestions = count;
                best = el;
            }
        }

        return best;
    };

    const findQuestionAnchors = (root) => {
        const anchors = [];
        const seenNums = new Set();

        const push = (anchor, strong) => {
            const questionText = strong.innerText.trim();
            const num = questionNumber(questionText);
            if (num == null || seenNums.has(num)) return;
            seenNums.add(num);
            anchors.push({ anchor, questionText });
        };

        for (const pNode of root.querySelectorAll("p")) {
            const strong = pNode.querySelector(":scope > strong");
            if (strong && isQuestionStrong(strong.innerText)) {
                push(pNode, strong);
            }
        }

        for (const strong of root.querySelectorAll("strong")) {
            if (!isQuestionStrong(strong.innerText)) continue;
            if (strong.closest(".message_box")) continue;
            const parent = strong.parentElement;
            if (parent?.tagName === "P" && parent.querySelector(":scope > strong") === strong) {
                continue;
            }
            push(strong, strong);
        }

        anchors.sort((a, b) => {
            const na = questionNumber(a.questionText) ?? 0;
            const nb = questionNumber(b.questionText) ?? 0;
            return na - nb;
        });

        return anchors;
    };

    const root = getContentRoot();
    const byNumber = new Map();

    for (const { anchor, questionText } of findQuestionAnchors(root)) {
        const correctAnswers = collectCorrectAnswers(anchor);

        const entry = { question: questionText };
        if (correctAnswers.length > 0) {
            entry.answers = correctAnswers;
        } else {
            entry.manual = true;
            entry.answers = [];
            entry.missingAnswers = true;
        }

        const num = questionNumber(questionText);
        if (num == null) continue;

        const existing = byNumber.get(num);
        const score = entry.answers?.length || 0;
        const existingScore = existing?.answers?.length || 0;
        if (!existing || score > existingScore) {
            byNumber.set(num, entry);
        }
    }

    const results = [...byNumber.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([, entry]) => entry);

    const title =
        document.querySelector("h1.entry-title, h1.post-title, article h1, h1")?.innerText?.trim() ||
        document.title;

    const nextLink = document.querySelector(
        ".post-navigation .nav-next a[rel='next'], .nav-links .nav-next a[rel='next'], .nav-next a[rel='next']"
    );

    const expectedCount = results.length > 0 ? Math.max(...results.map((r) => questionNumber(r.question) || 0)) : 0;
    const missingNumbers = [];
    for (let i = 1; i <= expectedCount; i++) {
        if (!byNumber.has(i)) missingNumbers.push(i);
    }

    return {
        title,
        url: location.href,
        questions: results,
        nextUrl: nextLink?.href || null,
        _meta: { questionCount: results.length, missingNumbers },
    };
}
