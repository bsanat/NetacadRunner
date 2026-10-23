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

export function extractExamAnswers() {
    const isQuestionStrong = (text) => {
        const t = (text || "").replace(/[\u200B-\u200D\uFEFF]/g, "").trim();
        return /^\d+\.\s/.test(t) && !/^Explanation/i.test(t);
    };

    const questionNumber = (text) => {
        const m = (text || "").match(/^(\d+)\./);
        return m ? parseInt(m[1], 10) : null;
    };

    const getContentRoot = () => {
        const candidates = [
            ...document.querySelectorAll(".thecontent"),
            ...document.querySelectorAll(".entry-content .thecontent"),
            ...document.querySelectorAll(".post-single-content .thecontent"),
            ...document.querySelectorAll(".entry-content"),
            ...document.querySelectorAll("article .entry-content"),
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

    const countQuestionsIn = (root) => {
        const seen = new Set();
        let count = 0;

        const addStrong = (strong) => {
            if (!strong || !isQuestionStrong(strong.innerText)) return;
            if (strong.closest(".message_box")) return;
            const num = questionNumber(strong.innerText);
            if (num == null || seen.has(num)) return;
            seen.add(num);
            count++;
        };

        for (const p of root.querySelectorAll("p")) {
            addStrong(p.querySelector(":scope > strong"));
        }
        for (const strong of root.querySelectorAll("strong")) {
            const parent = strong.parentElement;
            if (parent?.tagName === "P" && parent.querySelector(":scope > strong") === strong) {
                continue;
            }
            addStrong(strong);
        }

        return count;
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

    const isNextQuestion = (el) => {
        if (!el) return false;
        if (el.tagName === "STRONG" && isQuestionStrong(el.innerText)) return true;
        if (el.tagName === "P") {
            const strong = el.querySelector(":scope > strong");
            if (strong && isQuestionStrong(strong.innerText)) return true;
        }
        return false;
    };

    const RED_STYLE = /#ff0000|#f00\b|color:\s*red\b|rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)/i;

    const hasRedMarkup = (el) => {
        if (!el) return false;
        const style = el.getAttribute?.("style") || "";
        if (RED_STYLE.test(style)) return true;
        const html = el.innerHTML || "";
        return /#ff0000|#f00\b|color:\s*#?ff0000|color:\s*red\b/i.test(html);
    };

    const hasRedStyle = (el) => {
        if (!el) return false;
        if (hasRedMarkup(el)) return true;
        try {
            const computed = window.getComputedStyle(el);
            const color = computed.color || "";
            if (color === "rgb(255, 0, 0)" || color === "red") return true;
        } catch {
            /* ignore */
        }
        return false;
    };

    const isMarkedCorrect = (li) => {
        if (li.classList.contains("correct_answer")) return true;
        if (li.querySelector(".correct_answer")) return true;
        if (hasRedMarkup(li) || hasRedStyle(li)) return true;
        for (const marked of li.querySelectorAll("span[style], strong[style], b[style], strong, b")) {
            if (hasRedMarkup(marked) || hasRedStyle(marked)) return true;
        }
        return false;
    };

    const textFromRedMarkup = (li) => {
        const html = li?.innerHTML || "";
        if (!/#ff0000|#f00\b|color:\s*#?ff0000|color:\s*red\b/i.test(html)) return "";

        const parts = [];
        const re = /color:\s*#?ff0000[^>]*>(?:\s*<(?:strong|b)>)?\s*([^<]+)/gi;
        let match;
        while ((match = re.exec(html))) {
            const t = match[1].replace(/\s+/g, " ").trim();
            if (t && !parts.includes(t)) parts.push(t);
        }
        return parts[0] || "";
    };

    const textFromRedNodes = (li) => {
        const parts = [];
        for (const el of li.querySelectorAll('[style*="#ff0000"], [style*="#f00"], [style*="color: red"], [style*="color:#ff0000"]')) {
            const t = (el.textContent || "").replace(/\s+/g, " ").trim();
            if (t && !parts.includes(t)) parts.push(t);
        }
        if (parts.length > 0) return parts;

        for (const el of li.querySelectorAll("span[style], strong[style], strong, b, span")) {
            if (!hasRedMarkup(el) && !hasRedStyle(el)) continue;
            const t = (el.textContent || el.innerText || "").replace(/\s+/g, " ").trim();
            if (t && !parts.includes(t)) parts.push(t);
        }
        return parts;
    };

    const textFromLi = (li) => {
        const redParts = textFromRedNodes(li);
        if (redParts.length > 0) return redParts[0];

        const fromMarkup = textFromRedMarkup(li);
        if (fromMarkup) return fromMarkup;

        const bold = li.querySelector("strong, b");
        const boldText = (bold?.textContent || bold?.innerText || "").trim();
        if (boldText) return boldText;

        const red = li.querySelector('[style*="#ff0000"], [style*="#f00"], [style*="color: red"]');
        const redText = (red?.textContent || red?.innerText || "").trim();
        if (redText) return redText;

        return (li.textContent || li.innerText || "").trim();
    };

    const imageFrom = (el) => {
        if (!el) return null;
        const img = el.querySelector?.("img[src]");
        if (img?.src) return img.src;
        const link = el.querySelector?.('a[href*="/wp-content/uploads/"]');
        return link?.href || null;
    };

    const parseTable = (table) => {
        const pairs = [];
        table.querySelectorAll("tr").forEach((tr) => {
            const cells = [...tr.querySelectorAll("td, th")]
                .map((c) => c.innerText.trim())
                .filter(Boolean);
            if (cells.length >= 2) {
                pairs.push({ left: cells[0], right: cells[1] });
            }
        });
        return pairs;
    };

    const parseList = (ul) => {
        const answers = [];
        ul.querySelectorAll(":scope > li").forEach((li) => {
            const correctSpan = li.querySelector(".correct_answer");
            if (correctSpan) {
                const text = (correctSpan.textContent || correctSpan.innerText || "").trim();
                if (text) answers.push(text);
                return;
            }

            if (isMarkedCorrect(li)) {
                const text = textFromLi(li);
                if (text) answers.push(text);
                return;
            }

            const bold = li.querySelector("strong, b");
            if (bold) {
                const liText = li.innerText.trim();
                const boldText = bold.innerText.trim();
                if (boldText && (liText === boldText || liText.startsWith(boldText))) {
                    answers.push(boldText);
                }
            }
        });
        return answers;
    };

    const isPtPreamble = (text) => /Open the PT Activity/i.test(text || "");

    const resolvePtFollowUpQuestion = (el) => {
        if (!el) return null;

        const strongFrom = (strong) => {
            if (!strong || strong.closest(".message_box")) return null;
            const t = (strong.innerText || strong.textContent || "").trim();
            if (t.length < 12) return null;
            if (/^\d+\.\s/.test(t)) return null;
            if (/Open the PT Activity/i.test(t)) return null;
            if (/^Explanation/i.test(t)) return null;
            if (/^Case \d+/i.test(t)) return null;
            if (/^How to find/i.test(t)) return null;
            if (/^NOTE:/i.test(t)) return null;
            return t;
        };

        if (el.tagName === "STRONG") return strongFrom(el);
        if (el.tagName === "P") {
            const strong = el.querySelector(":scope > strong");
            return strongFrom(strong);
        }
        return null;
    };

    const collectAnswers = (anchor, questionText) => {
        const isMatch = /\bMatch\b/i.test(questionText);
        const isPt = isPtPreamble(questionText);
        let imageUrl = imageFrom(anchor);
        const listAnswers = [];
        const tablePairs = [];
        const paragraphAnswers = [];
        let sawUnmarkedUl = false;
        let resolvedQuestion = null;

        let nextSibling = anchor.nextElementSibling;
        while (nextSibling) {
            if (isNextQuestion(nextSibling)) break;

            if (isPt && !resolvedQuestion) {
                resolvedQuestion = resolvePtFollowUpQuestion(nextSibling);
            }

            if (nextSibling.classList?.contains("message_box")) {
                if (listAnswers.length === 0 && tablePairs.length === 0 && paragraphAnswers.length === 0) {
                    const ulInside = nextSibling.querySelector("ul");
                    if (ulInside) listAnswers.push(...parseList(ulInside));
                }
                if (listAnswers.length > 0 || tablePairs.length > 0 || paragraphAnswers.length > 0) break;
            } else if (nextSibling.tagName === "UL") {
                const parsed = parseList(nextSibling);
                if (parsed.length > 0) {
                    listAnswers.push(...parsed);
                } else if (nextSibling.querySelectorAll(":scope > li").length > 0) {
                    sawUnmarkedUl = true;
                }
            } else if (nextSibling.tagName === "TABLE") {
                tablePairs.push(...parseTable(nextSibling));
            } else if (nextSibling.tagName === "P") {
                const text = (nextSibling.innerText || nextSibling.textContent || "")
                    .replace(/\s+/g, " ")
                    .trim();
                if (text && !/^Explanation/i.test(text)) {
                    paragraphAnswers.push(text);
                }
                imageUrl = imageUrl || imageFrom(nextSibling);
            } else {
                imageUrl = imageUrl || imageFrom(nextSibling);
            }

            nextSibling = nextSibling.nextElementSibling;
        }

        const entry = { question: resolvedQuestion || questionText };
        if (isPt && imageUrl) entry.imageUrl = imageUrl;

        if (tablePairs.length > 0) {
            entry.answers = tablePairs.map((p) => `${p.left} -> ${p.right}`);
        } else if (listAnswers.length > 0) {
            entry.answers = listAnswers;
        } else if (paragraphAnswers.length > 0) {
            entry.answers = paragraphAnswers;
        } else if (isMatch || sawUnmarkedUl || imageUrl) {
            entry.manual = true;
            entry.answers = [];
            if (imageUrl) entry.imageUrl = imageUrl;
        } else {
            entry.manual = true;
            entry.answers = [];
            entry.missingAnswers = true;
        }

        return entry;
    };

    const root = getContentRoot();
    const byNumber = new Map();

    for (const { anchor, questionText } of findQuestionAnchors(root)) {
        const entry = collectAnswers(anchor, questionText);
        const num = questionNumber(questionText);
        if (num == null) continue;

        const existing = byNumber.get(num);
        const entryScore = (entry.answers?.length || 0) + (entry.manual ? 0 : 0);
        const existingScore = existing ? (existing.answers?.length || 0) : -1;

        if (!existing || entryScore > existingScore) {
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
        _meta: { rootTag: root.className, questionCount: results.length, missingNumbers },
    };
}
