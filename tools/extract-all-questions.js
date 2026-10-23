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

(() => {
    const topDoc = (() => {
        try {
            return window.top.document;
        } catch {
            return document;
        }
    })();

    const courseIframe =
        topDoc.querySelector('iframe[title="Course content"]') ||
        [...topDoc.querySelectorAll('iframe')].find((f) => {
            try {
                const d = f.contentDocument || f.contentWindow?.document;
                return !!d?.querySelector?.('iframe[title="Course content"]');
            } catch {
                return false;
            }
        });

    const ROOT = courseIframe?.contentDocument || courseIframe?.contentWindow?.document || topDoc;
    const win = ROOT.defaultView || window;

    const noNewlines = (s) =>
        String(s ?? '')
            .replace(/\u00A0/g, ' ')
            .replace(/\r?\n+/g, ' ')
            .replace(/[ \t]+/g, ' ')
            .trim();

    const collectShadowRoots = (node, out, seen) => {
        if (!node || seen.has(node)) return;
        seen.add(node);
        out.push(node);
        if (node.shadowRoot) collectShadowRoots(node.shadowRoot, out, seen);
        if (!node.querySelectorAll) return;
        node.querySelectorAll('*').forEach((child) => {
            if (child.shadowRoot) collectShadowRoots(child.shadowRoot, out, seen);
        });
    };

    const deepQuerySelectorAll = (selector, root = ROOT) => {
        const results = [];
        const seen = new Set();
        const roots = [];
        collectShadowRoots(root, roots, new Set());

        for (const searchRoot of roots) {
            if (!searchRoot.querySelectorAll) continue;

            for (const el of searchRoot.querySelectorAll(selector)) {
                if (!seen.has(el)) {
                    seen.add(el);
                    results.push(el);
                }
            }

            try {
                searchRoot.querySelectorAll?.('iframe')?.forEach((iframe) => {
                    try {
                        const innerDoc = iframe.contentDocument || iframe.contentWindow?.document;
                        if (!innerDoc) return;
                        for (const el of deepQuerySelectorAll(selector, innerDoc)) {
                            if (!seen.has(el)) {
                                seen.add(el);
                                results.push(el);
                            }
                        }
                    } catch {}
                });
            } catch {}
        }
        return results;
    };

    const getQuestionBodyEl = (qContainer) =>
        deepQuerySelectorAll(
            '.mcq__body-inner, .matching__body-inner, .objectMatching__body-inner, .js-question-text',
            qContainer,
        )[0];

    const decodeHtml = (s) => {
        const ta = document.createElement('textarea');
        ta.innerHTML = String(s ?? '');
        return ta.value;
    };

    const extractCode = (qContainer) => {
        const slideRoot =
            qContainer.closest('.js-abs-block-container, .abs__container, .assessment-1q') || qContainer;

        const cw = deepQuerySelectorAll(
            'code-window-webcomponent-mcq[precode], code-window-webcomponent-mcq, code-window-webcomponent[precode], code-window-webcomponent',
            slideRoot,
        )[0];

        let code = '';

        if (cw) {
            const precodeAttr = cw.getAttribute('precode');
            if (precodeAttr) {
                try {
                    const decodedPrecode = decodeHtml(precodeAttr);
                    const arr = JSON.parse(decodedPrecode);
                    const lines = (arr || [])
                        .map((o) => (o && typeof o.text === 'string' ? o.text : ''))
                        .map((t) => decodeHtml(t));
                    code = lines.join('\n');
                } catch {}
            }

            if (!code) {
                const commands = deepQuerySelectorAll('.code-container .command, .command', slideRoot);
                if (commands.length) {
                    code = commands.map((n) => (n.innerText || '').trim()).filter(Boolean).join('\n');
                }
            }
        }

        return noNewlines(code);
    };

    const extractQuestion = (qContainer) => {
        const body = getQuestionBodyEl(qContainer);
        if (!body) return '';
        const raw = (body.innerText || body.textContent || '').replace(/\u00A0/g, ' ');
        return noNewlines(raw);
    };

    const getQuestionNumber = (qContainer) => {
        const title = deepQuerySelectorAll(
            '.component__title-inner, .mcq__title-inner, .matching__title-inner, .objectMatching__title-inner',
            qContainer,
        )[0];
        const m = (title?.textContent || '').match(/question\s*(\d+)/i);
        return m ? parseInt(m[1], 10) : null;
    };

    const domOrder = (a, b) => {
        if (a === b) return 0;
        const pos = a.compareDocumentPosition(b);
        if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
        if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1;
        return 0;
    };

    const assessmentRoots = deepQuerySelectorAll(
        '.assessment-1q, .abs__container.has-arrows, .js-abs-block-container',
        ROOT,
    );
    const searchRoots = assessmentRoots.length ? assessmentRoots : [ROOT];

    const views = [];
    const viewSeen = new Set();
    for (const searchRoot of searchRoots) {
        for (const view of deepQuerySelectorAll('mcq-view, matching-view, object-matching-view', searchRoot)) {
            if (!getQuestionBodyEl(view) || viewSeen.has(view)) continue;
            viewSeen.add(view);
            views.push(view);
        }
    }

    views.sort((a, b) => {
        const na = getQuestionNumber(a);
        const nb = getQuestionNumber(b);
        if (na != null && nb != null && na !== nb) return na - nb;
        if (na != null) return -1;
        if (nb != null) return 1;
        return domOrder(a, b);
    });

    const questions = [];
    const dedupe = new Set();

    for (const view of views) {
        const question = extractQuestion(view);
        if (!question) continue;
        const code = extractCode(view);
        const key = `${question}\0${code}`;
        if (dedupe.has(key)) continue;
        dedupe.add(key);
        questions.push({ question, code });
    }

    console.log(`Extracted ${questions.length} question(s)`);
    console.log(questions);
    return questions;
})();
