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

export function extractInfraExamQuestions() {
    const normalize = (s) =>
        String(s || "")
            .replace(/[\u200B-\u200D\uFEFF]/g, "")
            .replace(/\s+/g, " ")
            .trim();

    const root =
        document.querySelector(".thecontent") ||
        document.querySelector(".entry-content") ||
        document.body;

    const RED_STYLE = /#ff0000|#f00\b|color:\s*red\b|rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)/i;

    const isRedInline = (el) => {
        if (!el?.getAttribute) return false;
        const style = el.getAttribute("style") || "";
        return RED_STYLE.test(style);
    };

    const isRedComputed = (el) => {
        try {
            const c = window.getComputedStyle(el).color;
            return c === "rgb(255, 0, 0)" || c.toLowerCase() === "red";
        } catch {
            return false;
        }
    };

    const getRedTexts = (node) => {
        if (!node) return [];

        const candidates = [
            ...node.querySelectorAll(
                '[style*="#ff0000"], [style*="#f00"], [style*="color: red"], [style*="color:red"], [style*="rgb(255, 0, 0)"], span[style], b[style], strong[style], code[style]'
            ),
        ];

        const parts = [];
        for (const el of candidates) {
            if (el.closest?.("table")) continue;
            if (!isRedInline(el) && !isRedComputed(el)) continue;
            const t = normalize(el.textContent);
            if (t) parts.push(t);
        }

        return [...new Set(parts)];
    };

    const getQuestionText = (li) => {
        const h3s = [...li.querySelectorAll("h3")].filter((h) => !h.closest?.("table"));
        const filtered = h3s
            .map((h) => normalize(h.textContent))
            .filter(Boolean)
            .filter((t) => !/^Explanation\b/i.test(t) && !/^Final Output\b/i.test(t));
        return filtered[0] || "";
    };

    const getCode = (li) => {
        const normalizeCode = (s) =>
            String(s || "")
                .replace(/\u00A0/g, " ")
                .replace(/[\u200B-\u200D\uFEFF]/g, "")
                .replace(/\r?\n+/g, " ")
                .replace(/[ \t]+/g, " ")
                .trim();

        const pres = [...li.querySelectorAll("pre")].filter((pre) => !pre.closest?.("table"));
        const chunks = pres
            .map((pre) => normalizeCode(pre.textContent))
            .filter(Boolean);
        if (!chunks.length) return null;
        return chunks.join(" ");
    };

    const getAnswers = (li) => {
        const answers = [];

        const uls = [...li.querySelectorAll(":scope > ul"), ...li.querySelectorAll(":scope ul")];

        for (const ul of uls) {
            const optionLis = [...ul.children].filter((c) => c.tagName === "LI");
            for (const optLi of optionLis) {
                const reds = getRedTexts(optLi);
                if (reds.length) answers.push(...reds);
            }
        }

        const unique = [...new Set(answers)].filter(Boolean);
        if (unique.length) return unique;

        const finalH3 = [...li.querySelectorAll("h3")].find((h) => /final output/i.test(normalize(h.textContent)));
        if (finalH3) {
            const container = finalH3.closest("td") || finalH3.parentElement;
            const strongs = [...(container?.querySelectorAll("strong") || [])]
                .map((s) => normalize(s.textContent))
                .filter(Boolean);
            if (strongs.length) return [strongs[0]];
        }

        return [];
    };

    const questionLis = [...root.querySelectorAll("ol > li")].filter((li) => li.querySelector("h3"));

    const questions = questionLis
        .map((li) => {
            const question = getQuestionText(li);
            if (!question) return null;
            const code = getCode(li);
            const answers = getAnswers(li);
            return { question, code, answers };
        })
        .filter(Boolean);

    return {
        title: document.title,
        url: location.href,
        questions,
        nextUrl: null,
    };
}

