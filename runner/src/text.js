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

const PT_ACTIVITY_BOILERPLATE =
    /open the pt activity\.?\s*perform the tasks in the activity instructions and then answer the question\.?\s*/gi;

const ACTIVITY_FILE_RE = /\.(pka|pkt|zip|pdf|exe)(?:\?|#|$)/i;
const DOWNLOAD_LINK_RE = /activity_download|download_btn|file_download/i;

export function normalizeText(str) {
    if (!str) return '';
    return str
        .replace(/[\u200B-\u200D\uFEFF]/g, '')
        .replace(/[\u2000-\u200F\u2028-\u202F]/g, '')
        .replace(/\u00A0/g, ' ')
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/<[^>]*>?/gm, '')
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201C\u201D]/g, '"')
        .replace(/[\u2013\u2014]/g, '-')
        .replace(/\bmicrowaves\b/g, 'microwave')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

const CHOOSE_COUNT_RE =
    /(?:choose|select)\s+(two|three|four|five|six|seven|eight|all(?:\s+that\s+apply)?|one)/i;

const CHOOSE_INSTRUCTION_RE =
    /^(?:choose|select)\s+(?:two|three|four|five|six|seven|eight|all(?:\s+that\s+apply)?|one)\b/i;

function isChooseInstructionText(text) {
    const t = normalizeText(text || '');
    return CHOOSE_INSTRUCTION_RE.test(t) && /\bcorrect\s+answers?\b/.test(t);
}

export function stripChooseClause(text) {
    let t = String(text ?? '');
    t = t.replace(
        /\s*\((?:choose|select)\s+(?:two|three|four|five|six|seven|eight|all\s+that\s+apply|all|one)[^)]*\)\s*\.?\s*$/gi,
        '',
    );
    t = t.replace(
        /\s*(?:choose|select)\s+(?:two|three|four|five|six|seven|eight|all\s+that\s+apply|all|one)\s+correct\s+answers?\s*\.?\s*$/gi,
        '',
    );
    return t.trim();
}

export function stripPtActivityBoilerplate(text) {
    if (!text) return '';
    return normalizeText(text)
        .replace(/^file_download\s*/i, '')
        .replace(/^pt activity\s*/i, '')
        .replace(PT_ACTIVITY_BOILERPLATE, '')
        .trim();
}

function hadPtActivityBoilerplate(text) {
    const raw = normalizeText(text || '');
    const stripped = stripPtActivityBoilerplate(text);
    return stripped.length < raw.length - 15;
}

export function isGenericPtQuestion(text) {
    const raw = normalizeText(text || '');
    if (/^(open the )?pt activity\b|perform the tasks in the activity/i.test(raw)) return true;
    const stripped = stripPtActivityBoilerplate(text);
    if (!stripped) return true;
    return hadPtActivityBoilerplate(text);
}

export function questionLookupKey(question, answers) {
    const q = normalizeText(question || '');
    const substantive = stripPtActivityBoilerplate(q);
    if (substantive.length >= 25) return substantive;
    if (isGenericPtQuestion(q) && answers?.length) {
        return `${q}::${answers.map(a => normalizeText(a)).sort().join('|')}`;
    }
    return q;
}

export function normalizeCodeForKey(code) {
    if (!code) return '';
    return String(code)
        .replace(/[\u200B-\u200D\uFEFF]/g, '')
        .replace(/[\u2000-\u200F\u2028-\u202F]/g, '')
        .replace(/\u00A0/g, ' ')
        .replace(/\r?\n+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

export function questionLookupKeyWithCode(question, answers, code) {
    const base = questionLookupKey(question, answers);
    const c = normalizeCodeForKey(code);
    return c ? `${base}::code::${c}` : base;
}

export function extractNumbers(str) {
    return (str.match(/\d+/g) || []).join(',');
}

export function textSimilarity(a, b) {
    if (!a || !b) return 0;
    if (a === b) return 1;
    const aNums = extractNumbers(a);
    const bNums = extractNumbers(b);
    if (aNums && bNums && aNums !== bNums) return 0;
    const shorter = a.length <= b.length ? a : b;
    const longer = a.length <= b.length ? b : a;
    if (longer.includes(shorter) && shorter.length / longer.length >= 0.82) {
        return shorter.length / longer.length;
    }
    const aw = a.split(' ').filter(w => w.length > 1);
    const bw = new Set(b.split(' ').filter(w => w.length > 1));
    if (!aw.length) return 0;
    let hit = 0;
    for (const w of aw) if (bw.has(w)) hit++;
    return hit / aw.length;
}

const OSI_LAYER_ALIASES = {
    'layer 1': ['physical', 'physical layer'],
    'layer 2': ['data link', 'data-link', 'datalink'],
    'layer 3': ['network', 'network layer'],
    'layer 4': ['transport', 'transport layer'],
    'layer 5': ['session', 'session layer'],
    'layer 6': ['presentation', 'presentation layer'],
    'layer 7': ['application', 'application layer'],
};

export function expandLayerAliases(answers) {
    const out = new Set(answers);
    for (const ans of answers) {
        const layerMatch = ans.match(/^layer\s*(\d+)$/);
        if (!layerMatch) continue;
        const key = `layer ${layerMatch[1]}`;
        for (const alias of OSI_LAYER_ALIASES[key] || []) out.add(alias);
    }
    for (const ans of answers) {
        for (const [layer, aliases] of Object.entries(OSI_LAYER_ALIASES)) {
            if (aliases.includes(ans)) out.add(layer);
        }
    }
    return [...out];
}

export function expectedSelectionCount(questionText, correctAnswers) {
    const q = normalizeText(questionText || '');
    const chooseMatch = q.match(CHOOSE_COUNT_RE);
    if (chooseMatch) {
        const map = { two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, all: correctAnswers.length };
        return map[chooseMatch[1]] || correctAnswers.length;
    }
    return correctAnswers.length;
}

function isActivityDownloadLink(el) {
    if (!el || el.nodeType !== 1) return false;
    const tag = (el.tagName || '').toUpperCase();
    if (tag !== 'A') return false;
    const href = el.getAttribute('href') || '';
    const cls = el.getAttribute('class') || '';
    if (ACTIVITY_FILE_RE.test(href)) return true;
    if (DOWNLOAD_LINK_RE.test(cls) || DOWNLOAD_LINK_RE.test(href)) return true;
    if (el.querySelector('material-icon[icon="file_download"], material-icon[iconname="file_download"], .download-icon')) {
        return true;
    }
    return false;
}

function isDownloadOnlyParagraph(p) {
    const text = (p.textContent || '').replace(/\s+/g, ' ').trim();
    if (!text) return true;
    const links = [...p.querySelectorAll('a[href]')];
    if (!links.length || !links.every(isActivityDownloadLink)) return false;
    const linkText = links.map(a => (a.textContent || '').trim()).join(' ');
    const extra = text.replace(linkText, '').replace(/\s+/g, ' ').trim();
    return extra.length < 20;
}

function removeNonQuestionContent(root) {
    root.querySelectorAll('.screenReader-position-text, .accessibility-completion-indicator')
        .forEach(n => n.remove());
    root.querySelectorAll('a[href]').forEach(a => {
        if (isActivityDownloadLink(a)) a.remove();
    });
    root.querySelectorAll('p').forEach(p => {
        if (isDownloadOnlyParagraph(p)) p.remove();
    });
}

export function extractCleanText(el) {
    if (!el) return '';
    const clone = el.cloneNode(true);
    clone.querySelectorAll('br').forEach(br => br.replaceWith(' '));
    removeNonQuestionContent(clone);
    clone.querySelectorAll('p, strong, em, b').forEach(node => {
        if (isChooseInstructionText(node.textContent)) node.remove();
    });
    const raw = normalizeText(clone.textContent || clone.innerText);
    const substantive = stripPtActivityBoilerplate(raw);
    const text = substantive.length >= 25 ? substantive : raw;
    return stripChooseClause(text) || text;
}

export function normalizeMcqOptionText(str) {
    return normalizeText(str).replace(/\bsubnet\s+mask\b/g, 'subnet mask');
}

export function extractMcqOptionText(el) {
    if (!el) return '';
    const clone = el.cloneNode(true);
    clone.querySelectorAll('br').forEach(br => br.replaceWith(' '));
    clone.querySelectorAll('.screenReader-position-text, .accessibility-completion-indicator')
        .forEach(n => n.remove());
    return normalizeMcqOptionText(clone.textContent || clone.innerText || '');
}

function splitIosCommandParts(text) {
    return normalizeText(text)
        .split(/(?=router\([^)]+\)#)/i)
        .map(p => p.trim())
        .filter(p => p.length > 5);
}

function parseNetworkMaskPair(text) {
    const n = normalizeMcqOptionText(text);
    const ip = n.match(/(?:subnetwork|network)\s+(\d+\.\d+\.\d+\.\d+)/i)?.[1];
    const mask = n.match(/(?:subnet\s+mask|mask)\s+(\d+\.\d+\.\d+\.\d+)/i)?.[1];
    return ip && mask ? { ip, mask } : null;
}

function networkMaskPairMatches(ansText, optText) {
    const a = parseNetworkMaskPair(ansText);
    const o = parseNetworkMaskPair(optText);
    return !!(a && o && a.ip === o.ip && a.mask === o.mask);
}

function isIpv6AddressText(text) {
    const t = (text || '').replace(/\s/g, '');
    return /^[0-9a-f:]{8,}$/i.test(t) && t.includes(':');
}

function ipv6LiteralMatch(ansText, optText) {
    return normalizeText(ansText).replace(/\s/g, '') === normalizeText(optText).replace(/\s/g, '');
}

function isUriLikeText(text) {
    const t = normalizeMcqOptionText(text);
    if (!t) return false;
    if (/^https?:\/\//i.test(t)) return true;
    if (/^www\./i.test(t)) return true;
    if (/^#/.test(t)) return true;
    return /\.(html?|htm|php|asp|json)(?:#|$|\?)/i.test(t) && t.includes('/');
}

function uriAnswerMatchesOption(ansText, optText) {
    const a = normalizeMcqOptionText(ansText);
    const o = normalizeMcqOptionText(optText);
    if (!a || !o) return false;
    if (a === o) return true;

    const ansHasScheme = /^https?:\/\//i.test(a);
    const optHasScheme = /^https?:\/\//i.test(o);
    if (!ansHasScheme && optHasScheme) return false;
    if (ansHasScheme && !optHasScheme) return false;
    if (ansHasScheme) return a === o;

    const stripFragment = (s) => s.replace(/#.*$/, '');
    return stripFragment(a) === stripFragment(o);
}

export function dbAnswerMatchesOption(ansNorm, optNorm) {
    if (!ansNorm || !optNorm) return false;
    const a = normalizeMcqOptionText(ansNorm);
    const o = normalizeMcqOptionText(optNorm);

    if (isIpv6AddressText(a) || isIpv6AddressText(o)) {
        return ipv6LiteralMatch(a, o);
    }
    if (isUriLikeText(a) || isUriLikeText(o)) {
        return uriAnswerMatchesOption(a, o);
    }
    if (o === a) return true;
    if (networkMaskPairMatches(a, o)) return true;
    if (o.includes(a) && a.length >= 12) {
        const lengthRatio = a.length / o.length;
        if (lengthRatio >= 0.85 || o.length - a.length <= 8) return true;
    }

    const parts = splitIosCommandParts(a);
    if (parts.length > 1) return parts.every(p => o.includes(p));
    return false;
}

export function scoreOptionAnswer(optNorm, correctAnswers) {
    const optMcq = normalizeMcqOptionText(optNorm);
    const raw = (correctAnswers || []).map(a => normalizeMcqOptionText(a)).filter(Boolean);
    if (raw.includes(optMcq)) return { score: 1, tier: 0 };
    if (raw.some(ans => dbAnswerMatchesOption(ans, optMcq))) return { score: 1, tier: 0 };
    if (raw.some(isIpv6AddressText)) return { score: 0, tier: 2 };

    const expanded = expandLayerAliases(raw);
    if (expanded.includes(optMcq)) return { score: 1, tier: 1 };

    let best = 0;
    for (const ans of expanded) {
        if (!ans) continue;
        const sim = textSimilarity(ans, optMcq);
        if (sim > best) best = sim;
    }
    return { score: best, tier: 2 };
}

export function isMatchingAnswers(answers) {
    return answers.some(a => a.includes('->'));
}

export function parseMatchingPairs(answers) {
    return answers
        .filter(a => a.includes('->'))
        .map(a => {
            const idx = a.indexOf('->');
            return {
                left: normalizeText(a.slice(0, idx)),
                right: normalizeText(a.slice(idx + 2)),
            };
        });
}
