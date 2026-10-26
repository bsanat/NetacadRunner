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
window.__NETACAD_EXTENSION=true;
(() => {
  // package.json
  var version = "1.0.5";
  var GUARD_KEY = "__netacadDownloadGuardInstalled";
  var DOWNLOAD_EXT_RE = /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|zip|rar|csv|txt|rtf|7z|tar|gz)(\?|#|$)/i;
  function isDownloadNavigation(href, el) {
    if (!href || href === "#" || href.startsWith("javascript:")) return false;
    if (el?.download) return true;
    if (/^blob:|^data:/i.test(href)) return true;
    return DOWNLOAD_EXT_RE.test(href);
  }
  function isDownloadButton(el) {
    if (!el?.closest) return false;
    const btn = el.closest("button, a[download]");
    if (!btn) return false;
    if (btn.matches?.('.download-button, #download-btn, [icon="download"]')) return true;
    if (btn.querySelector?.(".fa-download, .fa.fa-download")) return true;
    const text = (btn.textContent || "").trim();
    if (/^download\b/i.test(text)) return true;
    return false;
  }
  function shouldBlockEventTarget(target) {
    if (isDownloadButton(target)) return true;
    const anchor = target?.closest?.("a[href], a[download]");
    if (!anchor) return false;
    const href = anchor.getAttribute("href") || anchor.href || "";
    return isDownloadNavigation(href, anchor);
  }
  function installPageDownloadGuard(win) {
    if (!win?.document || win[GUARD_KEY]) return;
    win[GUARD_KEY] = true;
    const doc = win.document;
    const blockEvent = (e) => {
      if (shouldBlockEventTarget(e.target)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    };
    for (const type of ["click", "mousedown", "mouseup", "pointerdown", "pointerup", "auxclick"]) {
      doc.addEventListener(type, blockEvent, true);
    }
    const origOpen = win.open;
    win.open = function patchedOpen(url, ...rest) {
      if (typeof url === "string" && isDownloadNavigation(url, null)) return null;
      return origOpen.call(win, url, ...rest);
    };
    const origAssign = win.location.assign?.bind(win.location);
    const origReplace = win.location.replace?.bind(win.location);
    if (origAssign) {
      win.location.assign = (url) => {
        if (typeof url === "string" && isDownloadNavigation(url, null)) return;
        return origAssign(url);
      };
    }
    if (origReplace) {
      win.location.replace = (url) => {
        if (typeof url === "string" && isDownloadNavigation(url, null)) return;
        return origReplace(url);
      };
    }
    const anchorClickDesc = Object.getOwnPropertyDescriptor(HTMLAnchorElement.prototype, "click");
    const origAnchorClick = anchorClickDesc?.value;
    if (origAnchorClick) {
      HTMLAnchorElement.prototype.click = function patchedAnchorClick() {
        const href = this.getAttribute("href") || this.href || "";
        if (isDownloadNavigation(href, this)) return;
        return origAnchorClick.call(this);
      };
    }
  }
  var PT_ACTIVITY_BOILERPLATE = /open the pt activity\.?\s*perform the tasks in the activity instructions and then answer the question\.?\s*/gi;
  var ACTIVITY_FILE_RE = /\.(pka|pkt|zip|pdf|exe)(?:\?|#|$)/i;
  var DOWNLOAD_LINK_RE = /activity_download|download_btn|file_download/i;
  function normalizeText(str) {
    if (!str) return "";
    return str.replace(/[\u200B-\u200D\uFEFF]/g, "").replace(/[\u2000-\u200F\u2028-\u202F]/g, "").replace(/\u00A0/g, " ").replace(/<!--[\s\S]*?-->/g, "").replace(/<[^>]*>?/gm, "").replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/[\u2013\u2014]/g, "-").replace(/\bmicrowaves\b/g, "microwave").replace(/\s+/g, " ").trim().toLowerCase();
  }
  var CHOOSE_COUNT_RE = /(?:choose|select|which|what(?:\s+are)?|identify|name)\s+(two|three|four|five|six|seven|eight|all(?:\s+that\s+apply)?|one)\b/i;
  var CHOOSE_INSTRUCTION_RE = /^(?:choose|select)\s+(?:two|three|four|five|six|seven|eight|all(?:\s+that\s+apply)?|one)\b/i;
  function isChooseInstructionText(text) {
    const t = normalizeText(text || "");
    return CHOOSE_INSTRUCTION_RE.test(t) && /\bcorrect\s+answers?\b/.test(t);
  }
  function stripChooseClause(text) {
    let t = String(text ?? "");
    t = t.replace(
      /\s*\((?:choose|select)\s+(?:two|three|four|five|six|seven|eight|all\s+that\s+apply|all|one)[^)]*\)\s*\.?\s*$/gi,
      ""
    );
    t = t.replace(
      /\s*(?:choose|select)\s+(?:two|three|four|five|six|seven|eight|all\s+that\s+apply|all|one)\s+correct\s+answers?\s*\.?\s*$/gi,
      ""
    );
    return t.trim();
  }
  function stripPtActivityBoilerplate(text) {
    if (!text) return "";
    return normalizeText(text).replace(/^file_download\s*/i, "").replace(/^pt activity\s*/i, "").replace(PT_ACTIVITY_BOILERPLATE, "").trim();
  }
  function hadPtActivityBoilerplate(text) {
    const raw = normalizeText(text || "");
    const stripped = stripPtActivityBoilerplate(text);
    return stripped.length < raw.length - 15;
  }
  function isGenericPtQuestion(text) {
    const raw = normalizeText(text || "");
    if (/^(open the )?pt activity\b|perform the tasks in the activity/i.test(raw)) return true;
    const stripped = stripPtActivityBoilerplate(text);
    if (!stripped) return true;
    return hadPtActivityBoilerplate(text);
  }
  function questionLookupKey(question, answers) {
    const q = normalizeText(question || "");
    const substantive = stripPtActivityBoilerplate(q);
    if (substantive.length >= 25) return substantive;
    if (isGenericPtQuestion(q) && answers?.length) {
      return `${q}::${answers.map((a) => normalizeText(a)).sort().join("|")}`;
    }
    return q;
  }
  function normalizeCodeForKey(code) {
    if (!code) return "";
    return String(code).replace(/[\u200B-\u200D\uFEFF]/g, "").replace(/[\u2000-\u200F\u2028-\u202F]/g, "").replace(/\u00A0/g, " ").replace(/\r?\n+/g, " ").replace(/\s+/g, " ").trim();
  }
  function questionLookupKeyWithCode(question, answers, code) {
    const base = questionLookupKey(question, answers);
    const c = normalizeCodeForKey(code);
    return c ? `${base}::code::${c}` : base;
  }
  function extractNumbers(str) {
    return (str.match(/\d+/g) || []).join(",");
  }
  function textSimilarity(a, b) {
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
    const aw = a.split(" ").filter((w) => w.length > 1);
    const bw = new Set(b.split(" ").filter((w) => w.length > 1));
    if (!aw.length) return 0;
    let hit = 0;
    for (const w of aw) if (bw.has(w)) hit++;
    return hit / aw.length;
  }
  var OSI_LAYER_ALIASES = {
    "layer 1": ["physical", "physical layer"],
    "layer 2": ["data link", "data-link", "datalink"],
    "layer 3": ["network", "network layer"],
    "layer 4": ["transport", "transport layer"],
    "layer 5": ["session", "session layer"],
    "layer 6": ["presentation", "presentation layer"],
    "layer 7": ["application", "application layer"]
  };
  function expandLayerAliases(answers) {
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
  function expectedSelectionCount(questionText, correctAnswers) {
    const q = normalizeText(questionText || "");
    const chooseMatch = q.match(CHOOSE_COUNT_RE);
    if (chooseMatch) {
      const map = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, all: correctAnswers.length };
      return map[chooseMatch[1]] || correctAnswers.length;
    }
    return correctAnswers.length;
  }
  function isActivityDownloadLink(el) {
    if (!el || el.nodeType !== 1) return false;
    const tag = (el.tagName || "").toUpperCase();
    if (tag !== "A") return false;
    const href = el.getAttribute("href") || "";
    const cls = el.getAttribute("class") || "";
    if (ACTIVITY_FILE_RE.test(href)) return true;
    if (DOWNLOAD_LINK_RE.test(cls) || DOWNLOAD_LINK_RE.test(href)) return true;
    if (el.querySelector('material-icon[icon="file_download"], material-icon[iconname="file_download"], .download-icon')) {
      return true;
    }
    return false;
  }
  function isDownloadOnlyParagraph(p) {
    const text = (p.textContent || "").replace(/\s+/g, " ").trim();
    if (!text) return true;
    const links = [...p.querySelectorAll("a[href]")];
    if (!links.length || !links.every(isActivityDownloadLink)) return false;
    const linkText = links.map((a) => (a.textContent || "").trim()).join(" ");
    const extra = text.replace(linkText, "").replace(/\s+/g, " ").trim();
    return extra.length < 20;
  }
  function removeNonQuestionContent(root) {
    root.querySelectorAll(".screenReader-position-text, .accessibility-completion-indicator").forEach((n) => n.remove());
    root.querySelectorAll("a[href]").forEach((a) => {
      if (isActivityDownloadLink(a)) a.remove();
    });
    root.querySelectorAll("p").forEach((p) => {
      if (isDownloadOnlyParagraph(p)) p.remove();
    });
  }
  function extractCleanText(el) {
    if (!el) return "";
    const clone = el.cloneNode(true);
    clone.querySelectorAll("br").forEach((br) => br.replaceWith(" "));
    removeNonQuestionContent(clone);
    clone.querySelectorAll("p, strong, em, b").forEach((node) => {
      if (isChooseInstructionText(node.textContent)) node.remove();
    });
    const raw = normalizeText(clone.textContent || clone.innerText);
    const substantive = stripPtActivityBoilerplate(raw);
    const text = substantive.length >= 25 ? substantive : raw;
    return stripChooseClause(text) || text;
  }
  function normalizeMcqOptionText(str) {
    return normalizeText(str).replace(/\bsubnet\s+mask\b/g, "subnet mask");
  }
  function extractMcqOptionText(el) {
    if (!el) return "";
    const clone = el.cloneNode(true);
    clone.querySelectorAll("br").forEach((br) => br.replaceWith(" "));
    clone.querySelectorAll(".screenReader-position-text, .accessibility-completion-indicator").forEach((n) => n.remove());
    return normalizeMcqOptionText(clone.textContent || clone.innerText || "");
  }
  function splitIosCommandParts(text) {
    return normalizeText(text).split(/(?=router\([^)]+\)#)/i).map((p) => p.trim()).filter((p) => p.length > 5);
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
    const t = (text || "").replace(/\s/g, "");
    return /^[0-9a-f:]{8,}$/i.test(t) && t.includes(":");
  }
  function ipv6LiteralMatch(ansText, optText) {
    return normalizeText(ansText).replace(/\s/g, "") === normalizeText(optText).replace(/\s/g, "");
  }
  function isUriLikeText(text) {
    const t = normalizeMcqOptionText(text);
    if (!t) return false;
    if (/^https?:\/\//i.test(t)) return true;
    if (/^www\./i.test(t)) return true;
    if (/^#/.test(t)) return true;
    return /\.(html?|htm|php|asp|json)(?:#|$|\?)/i.test(t) && t.includes("/");
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
    const stripFragment = (s) => s.replace(/#.*$/, "");
    return stripFragment(a) === stripFragment(o);
  }
  function dbAnswerMatchesOption(ansNorm, optNorm) {
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
    if (parts.length > 1) return parts.every((p) => o.includes(p));
    return false;
  }
  function scoreOptionAnswer(optNorm, correctAnswers) {
    const optMcq = normalizeMcqOptionText(optNorm);
    const raw = (correctAnswers || []).map((a) => normalizeMcqOptionText(a)).filter(Boolean);
    if (raw.includes(optMcq)) return { score: 1, tier: 0 };
    if (raw.some((ans) => dbAnswerMatchesOption(ans, optMcq))) return { score: 1, tier: 0 };
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
  function isMatchingAnswers(answers) {
    return answers.some((a) => a.includes("->"));
  }
  function parseMatchingPairs(answers) {
    return answers.filter((a) => a.includes("->")).map((a) => {
      const idx = a.indexOf("->");
      return {
        left: normalizeText(a.slice(0, idx)),
        right: normalizeText(a.slice(idx + 2))
      };
    });
  }
  var SCROLL_PERCENTAGE = 0.9;
  var BOTTOM_PERCENT = 99;
  var TICK_MS_SCROLL = 50;
  var TICK_MS_ASSESSMENT = 500;
  var TICK_MS_AFTER_ACTION = 300;
  var TICK_MS_POST_ACTION_POLL = 300;
  var TICK_MS_PRACTICE_POLL = 150;
  var TICK_MS_PRACTICE_IDLE = 250;
  var TICK_MS_PRACTICE_AFTER = 200;
  var POST_ACTION_FAST_POLL_MS = 2500;
  var SHADOW_CACHE_MS = 2500;
  var QUESTION_VIEW_TAGS = "mcq-view, matching-view, object-matching-view";
  function getTopDocument() {
    try {
      return window.top.document;
    } catch {
      return document;
    }
  }
  var shadowRootsCache = { roots: null, rootRef: null, at: 0 };
  function collectShadowRoots(node, out, seen) {
    if (!node || seen.has(node)) return;
    seen.add(node);
    out.push(node);
    if (node.shadowRoot) collectShadowRoots(node.shadowRoot, out, seen);
    if (!node.querySelectorAll) return;
    node.querySelectorAll("*").forEach((child) => {
      if (child.shadowRoot) collectShadowRoots(child.shadowRoot, out, seen);
    });
  }
  function getSearchRoots(root = document) {
    const now = Date.now();
    if (shadowRootsCache.roots && shadowRootsCache.rootRef === root && now - shadowRootsCache.at < SHADOW_CACHE_MS) {
      return shadowRootsCache.roots;
    }
    const roots = [];
    collectShadowRoots(root, roots, /* @__PURE__ */ new Set());
    shadowRootsCache = { roots, rootRef: root, at: now };
    return roots;
  }
  function invalidateShadowCache() {
    shadowRootsCache.roots = null;
  }
  function deepQuerySelectorAll(selector, root = document) {
    const results = [];
    const seen = /* @__PURE__ */ new Set();
    for (const searchRoot of getSearchRoots(root)) {
      if (!searchRoot.querySelectorAll) continue;
      for (const el of searchRoot.querySelectorAll(selector)) {
        if (!seen.has(el)) {
          seen.add(el);
          results.push(el);
        }
      }
      if (searchRoot.querySelectorAll) {
        searchRoot.querySelectorAll("iframe").forEach((iframe) => {
          try {
            const innerDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (!innerDoc) return;
            for (const el of deepQuerySelectorAll(selector, innerDoc)) {
              if (!seen.has(el)) {
                seen.add(el);
                results.push(el);
              }
            }
          } catch {
          }
        });
      }
    }
    return results;
  }
  function isPracticeExamTitle(text) {
    const t = (text || "").trim();
    if (!t || /checkpoint/i.test(t) || /module\s+.*quiz/i.test(t)) return false;
    if (/packet\s+tracer/i.test(t) && !/\bexam\b/i.test(t)) return false;
    if (/certification\s+practice\s+exam/i.test(t)) return true;
    if (/practice\s+final\s+exam/i.test(t)) return true;
    if (/\bpractice\s+exam\b/i.test(t)) return true;
    if (/\bpractice\b/i.test(t) && /\bexam\b/i.test(t)) return true;
    return false;
  }
  function isCheckpointExam() {
    const spans = getTopDocument().querySelectorAll('span[class*="selectedNodeName"]');
    for (const span of spans) {
      if (/checkpoint\s+exam/i.test((span.textContent || "").trim())) return true;
    }
    return false;
  }
  function isPracticeExam() {
    const spans = getTopDocument().querySelectorAll('span[class*="selectedNodeName"]');
    for (const span of spans) {
      if (isPracticeExamTitle(span.textContent)) return true;
    }
    try {
      const iframe = getTopDocument().querySelector('iframe[title="Course content"]');
      const src = iframe?.getAttribute("src") || "";
      let href = "";
      try {
        href = iframe?.contentWindow?.location?.href || "";
      } catch {
      }
      const route = `${src} ${href}`;
      if (/certification-practice-exam|practice-final-exam/i.test(route)) return true;
    } catch {
    }
    return false;
  }
  function isFinalExamTitle(text) {
    const t = (text || "").trim();
    if (!t || /checkpoint/i.test(t) || /module\s+.*quiz/i.test(t)) return false;
    if (/\bpractice\b/i.test(t)) return false;
    if (/\bcourse\s+final\s+exam\b/i.test(t)) return true;
    if (/\bfinal\s+exam\b/i.test(t)) return true;
    if (/\bcourse\s+final\s+test\b/i.test(t)) return true;
    if (/\bfinal\s+test\b/i.test(t)) return true;
    return false;
  }
  function isFinalExam() {
    const spans = getTopDocument().querySelectorAll('span[class*="selectedNodeName"]');
    for (const span of spans) {
      if (isFinalExamTitle(span.textContent)) return true;
    }
    try {
      const iframe = getTopDocument().querySelector('iframe[title="Course content"]');
      const src = iframe?.getAttribute("src") || "";
      let href = "";
      try {
        href = iframe?.contentWindow?.location?.href || "";
      } catch {
      }
      const route = `${src} ${href}`;
      if (/practice-final-exam/i.test(route)) return false;
      if (/course-final-exam|final-exam|course-final-test|final-test/i.test(route)) return true;
    } catch {
    }
    return false;
  }
  function isSecureExam() {
    return isPracticeExam() || isFinalExam();
  }
  function isModuleQuiz(doc) {
    const spans = getTopDocument().querySelectorAll('span[class*="selectedNodeName"]');
    for (const span of spans) {
      const t = (span.textContent || "").trim();
      if (/\bpractice\s+quiz\b/i.test(t)) return true;
      if (/module\s+(practice\s+and\s+)?quiz/i.test(t)) return true;
      if (/^\d+(?:\.\d+)+\.?\s+quiz\b/i.test(t)) return true;
      if (/module\s+\d+\s+exam/i.test(t)) return true;
      if (/module\s+exam/i.test(t)) return true;
    }
    if (!doc) return false;
    const hints = deepQuerySelectorAll(".module-title, .page__title-inner, h1, h2", doc);
    return hints.some((el) => /(module\s+(quiz|exam)|practice\s+quiz|\d+(?:\.\d+)+\.?\s+quiz)/i.test((el.textContent || "").trim()));
  }
  function isProseCommaAnswer(parts) {
    if (parts.length !== 2) return false;
    return /^if (the |an |a )/.test(parts[0]) && /^the (system|switch|device|router|network|led|host)/i.test(parts[1]);
  }
  function isBracketedLiteral(text) {
    const t = String(text ?? "").trim();
    if (t.startsWith("[") && t.endsWith("]")) return true;
    if (t.startsWith("(") && t.endsWith(")")) return true;
    return false;
  }
  function expandAnswerList(answers, question) {
    const expanded = [];
    const qNorm = normalizeText(question || "");
    const isOrderQuestion = /\b(correct order|in order|proper order|sequence)\b/i.test(qNorm);
    const isMultipleChoice = expectedSelectionCount(qNorm, []) > 1 || /\b(?:choose|select)\s+all\b/i.test(qNorm);
    for (const raw of answers || []) {
      const n = normalizeText(raw);
      if (!n.includes(",") || isBracketedLiteral(raw)) {
        expanded.push(n);
        continue;
      }
      const parts = n.split(",").map((p) => p.trim()).filter(Boolean);
      const looksLikeOptionList = isMultipleChoice && parts.length >= 2 && parts.length <= 8 && parts.every((p) => p.length > 0 && p.length < 80) && !isOrderQuestion && !isProseCommaAnswer(parts);
      if (looksLikeOptionList) {
        expanded.push(...parts);
      } else {
        expanded.push(n);
      }
    }
    return expanded;
  }
  function isAssessmentQuestionItem(item) {
    return !!(item && typeof item === "object" && typeof item.question === "string");
  }
  function isAssessmentDatasetBundle(rawDb) {
    if (!Array.isArray(rawDb) || !rawDb.length) return false;
    return !isAssessmentQuestionItem(rawDb[0]);
  }
  function compileCyuDb(rawDb, targetMap) {
    for (const section in rawDb) {
      rawDb[section].forEach((item) => {
        const key = questionLookupKeyWithCode(item.question, item.answers, item.code);
        targetMap.set(key, expandAnswerList(item.answers, item.question));
      });
    }
  }
  function compileAssessmentDb(rawDb, targetMap) {
    if (isAssessmentDatasetBundle(rawDb)) {
      for (const part of rawDb) {
        compileAssessmentDb(part, targetMap);
      }
      return;
    }
    const items = [];
    if (Array.isArray(rawDb)) {
      items.push(...rawDb);
    } else if (rawDb && typeof rawDb === "object") {
      for (const section of Object.values(rawDb)) {
        if (Array.isArray(section)) items.push(...section);
      }
    }
    for (const item of items) {
      if (!isAssessmentQuestionItem(item)) continue;
      const key = questionLookupKeyWithCode(item.question, item.answers, item.code);
      targetMap.set(key, {
        answers: expandAnswerList(item.answers, item.question),
        manual: !!item.manual,
        imageUrl: item.imageUrl || null
      });
    }
  }
  function collectPracticeExamSources() {
    const sources = [];
    if (typeof PRACTICE_EXAM_DBS !== "undefined") {
      const raw = PRACTICE_EXAM_DBS;
      if (Array.isArray(raw) && isAssessmentDatasetBundle(raw)) {
        sources.push(...raw);
      } else {
        sources.push(raw);
      }
    }
    if (typeof PRACTICE_EXAM_DB !== "undefined") {
      sources.push(PRACTICE_EXAM_DB);
    }
    return sources;
  }
  function collectFinalExamSources() {
    const sources = [];
    if (typeof FINAL_EXAM_DBS !== "undefined") {
      const raw = FINAL_EXAM_DBS;
      if (Array.isArray(raw) && isAssessmentDatasetBundle(raw)) {
        sources.push(...raw);
      } else {
        sources.push(raw);
      }
    }
    if (typeof FINAL_EXAM_DB !== "undefined") {
      sources.push(FINAL_EXAM_DB);
    }
    return sources;
  }
  function findEntryByQuestionPrefix(map, qLookup, isCheckpoint) {
    const prefix = `${qLookup}::`;
    for (const [key, val] of map) {
      if (!key.startsWith(prefix)) continue;
      return {
        entry: isCheckpoint ? val : { answers: val, manual: false, imageUrl: null },
        score: 1,
        key
      };
    }
    return null;
  }
  function isAssessmentEntryMode(mode) {
    return mode === "checkpoint" || mode === "practice" || mode === "final";
  }
  function findBestQuestionMatch(map, qText, isCheckpoint) {
    const qLookupNoCode = stripPtActivityBoilerplate(qText) || qText;
    const pageHasSubstantive = !isGenericPtQuestion(qText);
    if (map.get(qText)) {
      const val = map.get(qText);
      return { entry: isCheckpoint ? val : { answers: val, manual: false, imageUrl: null }, score: 1, key: qText };
    }
    if (map.get(qLookupNoCode)) {
      const val = map.get(qLookupNoCode);
      return {
        entry: isCheckpoint ? val : { answers: val, manual: false, imageUrl: null },
        score: 1,
        key: qLookupNoCode
      };
    }
    const prefixHit = findEntryByQuestionPrefix(map, qLookupNoCode, isCheckpoint);
    if (prefixHit) return prefixHit;
    const qCore = stripChooseClause(qLookupNoCode);
    let bestKey = null;
    let bestScore = 0;
    for (const [key, val] of map) {
      if (pageHasSubstantive && isGenericPtQuestion(key)) continue;
      const keyNoCode = key.split("::code::")[0];
      const keyLookup = stripPtActivityBoilerplate(keyNoCode) || keyNoCode;
      if (stripChooseClause(keyLookup) === qCore) {
        return {
          entry: isCheckpoint ? val : { answers: val, manual: false, imageUrl: null },
          score: 0.99,
          key
        };
      }
      const score = textSimilarity(keyLookup, qLookupNoCode);
      if (score > bestScore) {
        bestScore = score;
        bestKey = key;
      }
    }
    if (bestKey && bestScore >= 0.92) {
      const val = map.get(bestKey);
      return {
        entry: isCheckpoint ? val : { answers: val, manual: false, imageUrl: null },
        score: bestScore,
        key: bestKey,
        fuzzy: true
      };
    }
    return { entry: null, score: bestScore, key: bestKey };
  }
  function lookupEntry(databases, activeDb, qText, qCode) {
    if (!activeDb.ready) return null;
    const isCheckpoint = isAssessmentEntryMode(activeDb.mode);
    const qKeyWithCode = questionLookupKeyWithCode(qText, null, qCode);
    const qKeyNoCode = questionLookupKey(qText, null);
    let result = findBestQuestionMatch(activeDb.map, qKeyWithCode, isCheckpoint);
    if (!result.entry) result = findBestQuestionMatch(activeDb.map, qKeyNoCode, isCheckpoint);
    if (!result.entry && activeDb.mode === "cyu" && typeof QUIZ_DB !== "undefined") {
      result = findBestQuestionMatch(databases.quizMap, qKeyWithCode, false);
      if (!result.entry) result = findBestQuestionMatch(databases.quizMap, qKeyNoCode, false);
    }
    if (!result.entry && activeDb.mode === "quiz") {
      result = findBestQuestionMatch(databases.cyuDb, qKeyWithCode, false);
      if (!result.entry) result = findBestQuestionMatch(databases.cyuDb, qKeyNoCode, false);
    }
    if (!result.entry && activeDb.mode === "quiz") {
      result = findBestQuestionMatch(databases.practiceMap, qKeyWithCode, true);
      if (!result.entry) result = findBestQuestionMatch(databases.practiceMap, qKeyNoCode, true);
    }
    if (!result.entry && activeDb.mode === "quiz") {
      result = findBestQuestionMatch(databases.finalExamMap, qKeyWithCode, true);
      if (!result.entry) result = findBestQuestionMatch(databases.finalExamMap, qKeyNoCode, true);
    }
    if (!result.entry && activeDb.mode === "practice") {
      result = findBestQuestionMatch(databases.quizMap, qKeyWithCode, false);
      if (!result.entry) result = findBestQuestionMatch(databases.quizMap, qKeyNoCode, false);
    }
    if (!result.entry && activeDb.mode === "cyu" && typeof CHECKPOINT_DB !== "undefined") {
      const cp = findBestQuestionMatch(databases.checkpointMap, qKeyWithCode, true);
      if (cp.entry) result = cp;
      else {
        const cp2 = findBestQuestionMatch(databases.checkpointMap, qKeyNoCode, true);
        if (cp2.entry) result = cp2;
      }
    }
    if (result.entry) {
      result.entry._matchKey = result.key;
      result.entry._fuzzy = !!result.fuzzy;
      result.entry._matchScore = result.score;
    }
    return result.entry;
  }
  var LOOKUP_MISS = /* @__PURE__ */ Symbol("lookup-miss");
  function initDatabases() {
    const cyuDb = /* @__PURE__ */ new Map();
    const quizMap = /* @__PURE__ */ new Map();
    const checkpointMap = /* @__PURE__ */ new Map();
    const practiceMap = /* @__PURE__ */ new Map();
    const finalExamMap = /* @__PURE__ */ new Map();
    compileCyuDb(RAW_DB, cyuDb);
    if (typeof QUIZ_DB !== "undefined") {
      compileCyuDb(QUIZ_DB, quizMap);
    }
    if (typeof CHECKPOINT_DB !== "undefined") {
      compileAssessmentDb(CHECKPOINT_DB, checkpointMap);
    }
    for (const src of collectPracticeExamSources()) {
      compileAssessmentDb(src, practiceMap);
    }
    for (const src of collectFinalExamSources()) {
      compileAssessmentDb(src, finalExamMap);
    }
    const entryLookupCache = /* @__PURE__ */ new Map();
    function getActiveDb(doc) {
      if (isPracticeExam()) {
        if (!practiceMap.size) {
          return { mode: "practice", ready: false, map: null };
        }
        return { mode: "practice", ready: true, map: practiceMap };
      }
      if (isFinalExam()) {
        if (!finalExamMap.size) {
          return { mode: "final", ready: false, map: null };
        }
        return { mode: "final", ready: true, map: finalExamMap };
      }
      if (isCheckpointExam()) {
        if (typeof CHECKPOINT_DB === "undefined") {
          return { mode: "checkpoint", ready: false, map: null };
        }
        return { mode: "checkpoint", ready: true, map: checkpointMap };
      }
      if (isModuleQuiz(doc)) {
        if (typeof QUIZ_DB === "undefined") {
          return { mode: "quiz", ready: false, map: null };
        }
        return { mode: "quiz", ready: true, map: quizMap };
      }
      return { mode: "cyu", ready: true, map: cyuDb };
    }
    function getDbTag(mode) {
      if (mode === "final") return "[Final]";
      if (mode === "checkpoint") return "[Checkpoint]";
      if (mode === "practice") return "[Practice]";
      if (mode === "quiz") return "[Quiz]";
      return "[CYU]";
    }
    function getDbVarName(mode) {
      if (mode === "final") return "FINAL_EXAM_DB / FINAL_EXAM_DBS";
      if (mode === "checkpoint") return "CHECKPOINT_DB";
      if (mode === "practice") return "PRACTICE_EXAM_DB / PRACTICE_EXAM_DBS";
      if (mode === "quiz") return "QUIZ_DB";
      return "RAW_DB";
    }
    function lookupEntryCached(activeDb, qText, qCode) {
      const codeKey = normalizeCodeForKey(qCode);
      const k = `${activeDb.mode}::${normalizeText(qText)}::${codeKey}`;
      if (entryLookupCache.has(k)) {
        const hit = entryLookupCache.get(k);
        return hit === LOOKUP_MISS ? null : hit;
      }
      const entry = lookupEntry(
        { cyuDb, quizMap, checkpointMap, practiceMap, finalExamMap },
        activeDb,
        qText,
        qCode
      );
      entryLookupCache.set(k, entry || LOOKUP_MISS);
      return entry;
    }
    return {
      getActiveDb,
      getDbTag,
      getDbVarName,
      lookupEntryCached,
      findBestQuestionMatch: (map, qText, isCp) => findBestQuestionMatch(map, qText, isCp),
      isAssessmentEntryMode
    };
  }
  function findCourseIframe() {
    let iframe = document.querySelector('iframe[title="Course content"]');
    if (iframe) return iframe;
    for (const topFrame of document.querySelectorAll("iframe")) {
      try {
        const innerDoc = topFrame.contentDocument || topFrame.contentWindow.document;
        const nestedFrame = innerDoc.querySelector('iframe[title="Course content"]') || innerDoc.querySelector(".fullscreen iframe");
        if (nestedFrame) return nestedFrame;
      } catch {
      }
    }
    return null;
  }
  function getCheckPhase(checkView) {
    return parseInt(checkView.dataset.netacadCheckPhase || "0", 10) || 0;
  }
  function getCheckAction(checkView) {
    const phase = getCheckPhase(checkView);
    if (phase >= 2) return null;
    if (phase === 0) return "show";
    return "verify";
  }
  function tryClickCheckViewButton(checkView, btn) {
    const action = getCheckAction(checkView);
    if (!action) return false;
    btn.click();
    checkView.dataset.netacadCheckPhase = action === "show" ? "1" : "2";
    return true;
  }
  function tryClickVisibleCheck(doc, scope = doc, opts = {}) {
    const minVis = opts.minVis ?? 0.15;
    const visFn = opts.elementVisibilityRatio;
    if (!visFn) return false;
    let bestBtn = null;
    let bestCheckView = null;
    let bestVis = 0;
    for (const btn of deepQuerySelectorAll("button.check__button", scope)) {
      if (btn.disabled || btn.classList.contains("is-disabled") || btn.hasAttribute("disabled")) {
        continue;
      }
      const checkView = btn.closest("check-view") || deepQuerySelectorAll("check-view", scope).find(
        (cv) => deepQuerySelectorAll("button.check__button", cv)[0] === btn
      );
      if (!checkView || !getCheckAction(checkView)) continue;
      const vis = visFn(btn);
      if (vis < minVis || vis <= bestVis) continue;
      bestVis = vis;
      bestBtn = btn;
      bestCheckView = checkView;
    }
    if (!bestBtn || !bestCheckView) return false;
    return tryClickCheckViewButton(bestCheckView, bestBtn);
  }
  function getQuestionBodyEl(qContainer) {
    return deepQuerySelectorAll(
      ".mcq__body-inner, .matching__body-inner, .objectMatching__body-inner, .js-question-text",
      qContainer
    )[0];
  }
  function decodeHtmlEntities(str) {
    const ta = document.createElement("textarea");
    ta.innerHTML = String(str ?? "");
    return ta.value;
  }
  function normalizeCodeDomText(str) {
    return String(str ?? "").replace(/\u00A0/g, " ").replace(/\r?\n+/g, "\n").replace(/[ \t]+\n/g, "\n").replace(/\n[ \t]+/g, "\n").trim();
  }
  function extractQuestionCodeText(qContainer) {
    if (!qContainer) return "";
    const slideRoot = qContainer.closest(".js-abs-block-container, .abs__container, .assessment-1q") || qContainer;
    const cw = deepQuerySelectorAll(
      [
        "code-window-webcomponent-mcq[precode]",
        "code-window-webcomponent-mcq",
        "code-window-webcomponent[precode]",
        "code-window-webcomponent"
      ].join(", "),
      slideRoot
    )[0] || null;
    let code = "";
    if (cw) {
      const precodeAttr = cw.getAttribute("precode");
      if (precodeAttr) {
        try {
          const decoded = decodeHtmlEntities(precodeAttr);
          const arr = JSON.parse(decoded);
          const lines = (arr || []).map((o) => o && typeof o.text === "string" ? o.text : "").map((t) => decodeHtmlEntities(t));
          code = lines.join("\n");
        } catch {
        }
      }
      if (!code) {
        const commands = deepQuerySelectorAll(".code-container .command, .command", slideRoot);
        if (commands.length) {
          code = commands.map((n) => (n.innerText || n.textContent || "").trim()).filter(Boolean).join("\n");
        }
      }
    }
    return normalizeCodeDomText(code);
  }
  function isMatchingQuestionContainer(qContainer) {
    const tag = (qContainer.tagName || "").toLowerCase();
    if (tag === "matching-view" || tag === "object-matching-view") return true;
    return deepQuerySelectorAll(
      "matching-dropdown-view, object-matching-dropdown-view, .matching__item_main, .objectMatching-category-item-container",
      qContainer
    ).length > 0;
  }
  function isMatchingDropdownComplete(qContainer) {
    const rows = deepQuerySelectorAll(
      "matching-dropdown-view, object-matching-dropdown-view, .matching__item_main, .objectMatching-category-item-container",
      qContainer
    );
    if (!rows.length) return false;
    let required = 0;
    let done = 0;
    for (const row of rows) {
      const titleEl = deepQuerySelectorAll(
        ".matching__item-title_inner, .objectMatching__item-title_inner, .matching__item-title",
        row
      )[0];
      const left = normalizeText(titleEl?.textContent || "");
      if (!left || /please select/i.test(left)) continue;
      required++;
      const selected = deepQuerySelectorAll(".dropdown__inner, .js-dropdown-inner", row)[0];
      const selText = normalizeText(selected?.textContent || "");
      if (selText && !/please select an option/i.test(selText)) done++;
    }
    return required > 0 && done === required;
  }
  function isQuestionAnswered(qContainer, correctAnswers = []) {
    if (isMatchingDropdownComplete(qContainer)) return true;
    const checkboxes = deepQuerySelectorAll('input[type="checkbox"]', qContainer);
    if (checkboxes.length) {
      const questionText = getQuestionBodyEl(qContainer)?.textContent || "";
      const required = expectedSelectionCount(questionText, correctAnswers);
      const selected = checkboxes.filter((input) => input.checked).length;
      if (!correctAnswers.length) return required > 0 ? selected === required : selected > 0;
      if (selected !== required) return false;
      const options = deepQuerySelectorAll(".mcq__item, .js-mcq-item", qContainer);
      return hasCorrectMcqSelection(options, correctAnswers, required);
    }
    if (deepQuerySelectorAll("input:checked", qContainer).length > 0) return true;
    const selects = deepQuerySelectorAll("select", qContainer);
    if (selects.length > 0) {
      return selects.every((s) => s.selectedIndex > 0 && s.value);
    }
    const textInputs = deepQuerySelectorAll(
      'input:not([type="hidden"]):not([type="radio"]):not([type="checkbox"]), textarea',
      qContainer
    );
    if (textInputs.length > 0) {
      return textInputs.every((i) => (i.value || "").trim().length > 0);
    }
    const matched = deepQuerySelectorAll('.is-matched, .is-complete, [data-matched="true"]', qContainer);
    return matched.length > 0;
  }
  function shouldTreatAsManual(entry, qContainer) {
    if (entry?.manual) return true;
    if (isMatchingQuestionContainer(qContainer) && !(entry?.answers || []).length) return true;
    return false;
  }
  function waitForManualCompletion(qContainer, doc, entry) {
    const userDone = isQuestionAnswered(qContainer, entry?.answers) || isSubmitEnabled(doc);
    if (!userDone) {
      if (!qContainer.dataset.manualWarned) {
        qContainer.dataset.manualWarned = "true";
      }
      return true;
    }
    delete qContainer.dataset.manualWarned;
    return false;
  }
  function trySetSelectForRow(row, rightNorm) {
    const select = row.querySelector("select");
    if (!select) return false;
    for (const opt of select.options) {
      const optNorm = normalizeText(opt.textContent);
      if (optNorm === rightNorm || optNorm.includes(rightNorm) || rightNorm.includes(optNorm)) {
        if (select.value !== opt.value) {
          select.value = opt.value;
          select.dispatchEvent(new Event("change", { bubbles: true }));
          select.dispatchEvent(new Event("input", { bubbles: true }));
          return true;
        }
        return false;
      }
    }
    return false;
  }
  function solveMatchingQuestion(qContainer, pairs) {
    let changed = false;
    const rows = deepQuerySelectorAll('tr, li, .matching__item, .mcq__item, [class*="matching"]', qContainer);
    for (const { left, right } of pairs) {
      let pairDone = false;
      for (const row of rows) {
        const rowText = extractCleanText(row);
        if (!rowText || !rowText.includes(left) && !left.includes(rowText)) continue;
        if (trySetSelectForRow(row, right)) {
          changed = true;
          pairDone = true;
          break;
        }
      }
      if (pairDone) continue;
      const leftEls = deepQuerySelectorAll('button, [role="button"], label, .mcq__item', qContainer).filter((el) => {
        const t = extractCleanText(el);
        return t === left || t.length > 3 && (t.includes(left) || left.includes(t));
      });
      for (const leftEl of leftEls) {
        const rightEls = deepQuerySelectorAll('button, [role="button"], label, .mcq__item, [role="option"]', qContainer).filter((el) => {
          const t = extractCleanText(el);
          return t === right || t.length > 3 && (t.includes(right) || right.includes(t));
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
      const optTextEl = deepQuerySelectorAll(".mcq__item-text-inner", opt)[0];
      if (!optTextEl) continue;
      const text = extractMcqOptionText(optTextEl);
      if (!text) continue;
      rated.push({ opt, text, ...scoreOptionAnswer(text, correctAnswers) });
    }
    return rated;
  }
  function clickMcqOption(opt, checked = true) {
    const input = deepQuerySelectorAll('input[type="radio"], input[type="checkbox"]', opt)[0] || opt.querySelector('input[type="radio"], input[type="checkbox"]');
    const label = deepQuerySelectorAll("label", opt)[0] || opt.querySelector("label");
    if (label) label.click();
    else if (input) input.click();
    else opt.click();
    if (input && input.checked !== checked) {
      input.checked = checked;
      input.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      input.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
    }
  }
  function pickOptionsToSelect(rated, maxSelect, correctAnswers) {
    if (!rated.length || maxSelect < 1) return [];
    const sorted = [...rated].sort((a, b) => a.tier - b.tier || b.score - a.score);
    const answers = (correctAnswers || []).map((a) => normalizeMcqOptionText(a)).filter(Boolean);
    const picked = [];
    const used = /* @__PURE__ */ new Set();
    for (const ans of answers) {
      if (picked.length >= maxSelect) break;
      let best = null;
      for (const row of sorted) {
        if (used.has(row.opt)) continue;
        const exact = row.text === ans;
        const match = exact || dbAnswerMatchesOption(ans, row.text);
        if (!match) continue;
        if (!best || row.tier < best.tier || row.tier === best.tier && row.score > best.score) {
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
    const fuzzy = sorted.filter((x) => x.tier === 2 && x.score >= 0.92);
    if (!fuzzy.length) return [];
    const topScore = fuzzy[0].score;
    return fuzzy.filter((x) => x.score >= topScore - 1e-3).slice(0, maxSelect);
  }
  function getOptionsToSelect(options, correctAnswers, maxSelect) {
    return pickOptionsToSelect(rateMcqOptions(options, correctAnswers), maxSelect, correctAnswers);
  }
  function countCheckedMatchingOptions(options, correctAnswers, maxSelect) {
    const targets = new Set(getOptionsToSelect(options, correctAnswers, maxSelect).map((x) => x.opt));
    let n = 0;
    for (const opt of options) {
      if (!targets.has(opt)) continue;
      const input = deepQuerySelectorAll("input", opt)[0] || opt.querySelector("input");
      if (input && input.checked) n++;
    }
    return n;
  }
  function hasCorrectMcqSelection(options, correctAnswers, maxSelect) {
    return countCheckedMatchingOptions(options, correctAnswers, maxSelect) >= maxSelect;
  }
  function selectMcqOptions(qContainer, correctAnswers, questionText, opts = {}) {
    const rawQuestion = getQuestionBodyEl(qContainer)?.textContent || questionText;
    const needCount = expectedSelectionCount(rawQuestion, correctAnswers);
    const multiClick = opts.multiClick ?? needCount > 1;
    const options = deepQuerySelectorAll(".mcq__item, .js-mcq-item", qContainer);
    const isRadioGroup = !!deepQuerySelectorAll('[role="radiogroup"]', qContainer).length || options.length > 0 && options.every((opt) => {
      const input = deepQuerySelectorAll('input[type="radio"]', opt)[0];
      return input || opt.querySelector('input[type="radio"]');
    });
    const maxSelect = isRadioGroup ? 1 : needCount;
    const toSelect = getOptionsToSelect(options, correctAnswers, maxSelect);
    if (!toSelect.length) return false;
    if (toSelect.length === maxSelect) {
      const targets = new Set(toSelect.map((row) => row.opt));
      for (const opt of options) {
        const input = deepQuerySelectorAll('input[type="checkbox"]', opt)[0];
        if (input?.checked && !targets.has(opt)) {
          clickMcqOption(opt, false);
          return true;
        }
      }
    }
    if (hasCorrectMcqSelection(options, correctAnswers, maxSelect)) return false;
    let clicked = false;
    for (const { opt } of toSelect) {
      if (opt.isConnected === false) break;
      const input = deepQuerySelectorAll("input", opt)[0] || opt.querySelector("input");
      if (input && input.checked) continue;
      clickMcqOption(opt);
      clicked = true;
      if (!multiClick) return true;
    }
    return clicked;
  }
  function isSubmitEnabled(doc) {
    const submitBtns = deepQuerySelectorAll(".submit-button", doc);
    return submitBtns.some(
      (sBtn) => !sBtn.disabled && !sBtn.classList.contains("is-disabled") && !sBtn.hasAttribute("disabled")
    );
  }
  function trySubmitAndAdvance(doc, qContainer = null, opts = {}) {
    const answered = !qContainer || isQuestionAnswered(qContainer, opts.correctAnswers);
    const scope = qContainer?.closest?.(".js-abs-block-container, .abs__container, .assessment-1q") || qContainer || doc;
    if (answered && opts.elementVisibilityRatio) {
      if (tryClickVisibleCheck(doc, scope, {
        elementVisibilityRatio: opts.elementVisibilityRatio
      })) {
        return true;
      }
    } else if (answered) {
      const checkBtn = deepQuerySelectorAll("button.check__button", scope).find(
        (b) => !b.disabled && !b.classList.contains("is-disabled") && !b.hasAttribute("disabled")
      );
      if (checkBtn) {
        checkBtn.click();
        return true;
      }
    }
    const submitBtns = deepQuerySelectorAll(".submit-button", doc);
    for (const sBtn of submitBtns) {
      if (!sBtn.disabled && !sBtn.classList.contains("is-disabled") && !sBtn.hasAttribute("disabled")) {
        if (!answered) return false;
        sBtn.click();
        return true;
      }
    }
    if (!answered) return false;
    const innerNextBtns = deepQuerySelectorAll('button[data-blockstrip-slider="right"], .is-right', doc);
    for (const nBtn of innerNextBtns) {
      if (nBtn.closest(".block-buttons-container") && !nBtn.disabled && !nBtn.classList.contains("is-disabled")) {
        nBtn.click();
        return true;
      }
    }
    return false;
  }
  function solveQuestion(qContainer, entry, qText, doc, multiClick) {
    const correctAnswers = entry.answers;
    if (isMatchingAnswers(correctAnswers)) {
      return solveMatchingQuestion(qContainer, parseMatchingPairs(correctAnswers));
    }
    return selectMcqOptions(qContainer, correctAnswers, qText, { multiClick });
  }
  function createAssessmentHelpers(doc, win) {
    function getViewportRect(elWindow = win) {
      const vh = elWindow.innerHeight || doc.documentElement.clientHeight;
      const vw = elWindow.innerWidth || doc.documentElement.clientWidth;
      return { vh, vw };
    }
    function getAdjustedRect(el, elWindow = win) {
      if (!el || !el.getBoundingClientRect) return null;
      const rect = el.getBoundingClientRect();
      let top = rect.top;
      let bottom = rect.bottom;
      let left = rect.left;
      let right = rect.right;
      let cw = elWindow;
      try {
        while (cw && cw !== win) {
          const frame = cw.frameElement;
          if (!frame) break;
          const frameRect = frame.getBoundingClientRect();
          top += frameRect.top;
          bottom += frameRect.top;
          left += frameRect.left;
          right += frameRect.left;
          cw = cw.parent;
        }
      } catch {
      }
      return { top, bottom, left, right, width: rect.width, height: rect.height };
    }
    function elementVisibilityRatio(el, elWindow = win) {
      const rect = getAdjustedRect(el, elWindow);
      if (!rect || rect.width <= 0 || rect.height <= 0) return 0;
      const { vh, vw } = getViewportRect(elWindow);
      const visibleW = Math.max(0, Math.min(rect.right, vw) - Math.max(rect.left, 0));
      const visibleH = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
      return visibleW * visibleH / (rect.width * rect.height);
    }
    function isElementSubstantiallyVisible(el, minRatio = 0.35, elWindow = win) {
      return elementVisibilityRatio(el, elWindow) >= minRatio;
    }
    function getCarouselOffsetRatio(root = doc) {
      const container = deepQuerySelectorAll(".js-abs-block-container", root)[0];
      if (!container) return null;
      const style = win.getComputedStyle(container);
      if (!style.transform || style.transform === "none") return 0;
      try {
        const matrix = new DOMMatrix(style.transform);
        const w = container.getBoundingClientRect().width;
        if (!w) return 0;
        return Math.max(0, -matrix.m41 / w);
      } catch {
        return 0;
      }
    }
    function isOnQuestionSlide(root) {
      const offset = getCarouselOffsetRatio(root);
      return offset !== null && offset >= 0.35;
    }
    function hasVisibleScorePercent(searchRoot) {
      if (deepQuerySelectorAll(".percent-text", searchRoot).some((el) => {
        const t = (el.textContent || "").trim();
        if (!/\d{1,3}\s*%/.test(t)) return false;
        return isElementSubstantiallyVisible(el, 0.08);
      })) return true;
      return deepQuerySelectorAll(".progress[aria-label]", searchRoot).some((el) => {
        const label = el.getAttribute("aria-label") || "";
        if (!/\d{1,3}\s*%/.test(label)) return false;
        return isElementSubstantiallyVisible(el, 0.08);
      });
    }
    function hasResultSummaryText(searchRoot) {
      const t = (searchRoot.textContent || "").toLowerCase();
      return /you have scored|you have passed|you did not pass|congratulations|try again|assessment results/i.test(t);
    }
    function isAssessmentResultVisible(searchRoot = doc) {
      if (deepQuerySelectorAll("assessmentresults-view", searchRoot).some(
        (el) => isElementSubstantiallyVisible(el, 0.1)
      )) return true;
      if (deepQuerySelectorAll('[class*="resultblock"]', searchRoot).some(
        (el) => el.classList.contains("is-complete") && isElementSubstantiallyVisible(el, 0.08)
      )) return true;
      if (hasVisibleScorePercent(searchRoot)) return true;
      const bodyInner = deepQuerySelectorAll(".assessmentResults__body-inner", searchRoot)[0];
      if (bodyInner && isElementSubstantiallyVisible(bodyInner, 0.08)) {
        const t = (bodyInner.textContent || "").toLowerCase();
        if (/you have scored|congratulations|you have passed|you did not pass/i.test(t)) {
          return true;
        }
      }
      if (hasResultSummaryText(searchRoot) && hasVisibleScorePercent(searchRoot)) return true;
      const retryBtn = deepQuerySelectorAll(
        ".js-assessment-retry-btn, .assessmentResults__retry-btn",
        searchRoot
      ).find((el) => isElementSubstantiallyVisible(el, 0.1));
      if (retryBtn && /reset|retry/i.test((retryBtn.textContent || "").toLowerCase())) {
        const article = retryBtn.closest('.article, .abs, [class*="article"]') || searchRoot;
        if (hasVisibleScorePercent(article) || hasResultSummaryText(article)) return true;
      }
      return false;
    }
    function isAssessmentComplete(root) {
      if (isAssessmentResultVisible(doc)) return true;
      if (!root) return false;
      for (const btn of deepQuerySelectorAll(".block-button", root)) {
        const label = (btn.textContent || "").trim();
        if (!/result\s*page/i.test(label)) continue;
        if (btn.classList.contains("active-block") || btn.classList.contains("is-active") || btn.getAttribute("aria-current") === "true") {
          return true;
        }
      }
      if (isAssessmentResultVisible(root)) return true;
      if (deepQuerySelectorAll(".final-screen-inner", root).some(
        (el) => isElementSubstantiallyVisible(el, 0.25)
      )) return true;
      if (hasVisibleScorePercent(root) && hasResultSummaryText(root)) return true;
      const summaryEls = deepQuerySelectorAll('h1, h2, h3, p, div, span, [class*="score"]', root);
      if (summaryEls.some((el) => {
        const t = (el.textContent || "").toLowerCase();
        if (!/congratulations|you have passed|you did not pass|you have scored/i.test(t)) return false;
        return isElementSubstantiallyVisible(el, 0.08);
      })) return true;
      return false;
    }
    function hasActiveQuestionToolbar(root) {
      return deepQuerySelectorAll(".question-label", root).some(
        (el) => isElementSubstantiallyVisible(el, 0.1) && /\d+\s+of\s+\d+/i.test(el.textContent || "")
      );
    }
    function isFormalExamLayout(root) {
      if (!root) return false;
      if (hasActiveQuestionToolbar(root)) return true;
      if (getInAssessmentStartButtons(root).length > 0) return true;
      if (deepQuerySelectorAll(".js-abs-block-container", root).length > 0) return true;
      if (deepQuerySelectorAll(".block-button", root).some(
        (btn) => /^Q\d+/i.test((btn.textContent || "").trim())
      )) return true;
      return false;
    }
    function isQuestionReadyToAnswer(qContainer) {
      const body = getQuestionBodyEl(qContainer);
      if (!body) return false;
      const vis = elementVisibilityRatio(body);
      if (vis < 0.35) return false;
      const rect = getAdjustedRect(body);
      if (!rect) return false;
      const { vh } = getViewportRect();
      if (rect.top > vh * 0.68) return false;
      if (rect.bottom < vh * 0.12) return false;
      return true;
    }
    function findReadyQuestionContainer(root) {
      const q = findVisibleQuestionContainer(root);
      if (!q || !isQuestionReadyToAnswer(q)) return null;
      return q;
    }
    function hasQuestionContent(root) {
      return deepQuerySelectorAll(QUESTION_VIEW_TAGS, root).some((view) => !!getQuestionBodyEl(view));
    }
    function scrollQuestionIntoView(root) {
      const { vh } = getViewportRect();
      let target = null;
      let targetTop = Infinity;
      for (const view of deepQuerySelectorAll(QUESTION_VIEW_TAGS, root)) {
        const body = getQuestionBodyEl(view);
        if (!body) continue;
        if (isQuestionReadyToAnswer(view)) return false;
        const rect = getAdjustedRect(body);
        if (!rect || rect.top >= vh) continue;
        if (rect.top < targetTop) {
          targetTop = rect.top;
          target = body;
        }
      }
      if (!target) return false;
      target.scrollIntoView({ block: "center", behavior: "auto" });
      return true;
    }
    function isActiveQuestionView(view, root) {
      if (isAssessmentComplete(root)) return false;
      const body = getQuestionBodyEl(view);
      if (!body) return false;
      const bodyVis = elementVisibilityRatio(body);
      if (bodyVis < 0.12) return false;
      const container = deepQuerySelectorAll(".js-abs-block-container", root)[0];
      if (container) {
        const offset = getCarouselOffsetRatio(root);
        if (offset !== null && offset < 0.25) return false;
      }
      if (hasActiveQuestionToolbar(root)) {
        return bodyVis >= 0.18;
      }
      const widget = deepQuerySelectorAll(
        ".mcq__widget, .matching__widget, .objectMatching__widget",
        view
      )[0];
      if (widget && elementVisibilityRatio(widget) < 0.2) return false;
      return bodyVis >= 0.35;
    }
    function getOrderedQuestionViews(root) {
      return deepQuerySelectorAll(QUESTION_VIEW_TAGS, root).filter((qContainer) => !!getQuestionBodyEl(qContainer) && isActiveQuestionView(qContainer, root));
    }
    function getCurrentQuestionNumber(root) {
      for (const el of deepQuerySelectorAll(".question-label", root)) {
        const m = (el.textContent || "").match(/(\d+)\s+of\s+(\d+)/i);
        if (m && isElementSubstantiallyVisible(el, 0.15)) {
          return { index: parseInt(m[1], 10), total: parseInt(m[2], 10) };
        }
      }
      for (const el of deepQuerySelectorAll(
        ".component__title-inner, .matching__title-inner, .objectMatching__title-inner, .mcq__title-inner",
        root
      )) {
        const m = (el.textContent || "").match(/question\s*(\d+)/i);
        if (m && isElementSubstantiallyVisible(el, 0.15)) {
          return { index: parseInt(m[1], 10), total: null };
        }
      }
      for (const btn of deepQuerySelectorAll(".block-button", root)) {
        const m = (btn.textContent || "").trim().match(/^Q(\d+)$/i);
        if (!m) continue;
        if (btn.classList.contains("active-block") || btn.classList.contains("is-active") || btn.getAttribute("aria-current") === "true") {
          return { index: parseInt(m[1], 10), total: null };
        }
      }
      const offset = getCarouselOffsetRatio(root);
      if (offset !== null && offset >= 0.35) {
        return { index: Math.round(offset) + 1, total: null };
      }
      return null;
    }
    function getQuestionContainers(root) {
      if (isAssessmentComplete(root)) return [];
      const ordered = getOrderedQuestionViews(root);
      if (!ordered.length) return [];
      const qNum = getCurrentQuestionNumber(root);
      if (qNum?.index >= 1) {
        const byLabel = ordered.filter((view) => {
          const title = deepQuerySelectorAll(
            ".component__title-inner, .mcq__title-inner, .matching__title-inner, .objectMatching__title-inner",
            view
          )[0];
          const m = (title?.textContent || "").match(/question\s*(\d+)/i);
          return m && parseInt(m[1], 10) === qNum.index;
        });
        if (byLabel.length) return [byLabel[0]];
      }
      const scored = ordered.map((qContainer) => {
        const body = getQuestionBodyEl(qContainer);
        if (!body) return null;
        return { qContainer, visibility: elementVisibilityRatio(body) };
      }).filter((item) => item && item.visibility >= (hasActiveQuestionToolbar(root) ? 0.18 : 0.35));
      if (!scored.length) return [];
      scored.sort((a, b) => b.visibility - a.visibility);
      const best = scored[0];
      const second = scored[1];
      if (best.visibility >= 0.4 && (!second || best.visibility >= second.visibility * 1.25)) {
        return [best.qContainer];
      }
      const slideIdx = Math.round(getCarouselOffsetRatio(root) || 0);
      if (slideIdx >= 0 && slideIdx < ordered.length) {
        return [ordered[slideIdx]];
      }
      return [best.qContainer];
    }
    function findVisibleQuestionContainer(root) {
      if (isAssessmentComplete(root)) return null;
      const ordered = getQuestionContainers(root);
      if (ordered.length) return ordered[0];
      const views = deepQuerySelectorAll(QUESTION_VIEW_TAGS, root);
      let best = null;
      let bestVis = 0;
      for (const view of views) {
        if (!isActiveQuestionView(view, root)) continue;
        const body = getQuestionBodyEl(view);
        if (!body) continue;
        const vis = elementVisibilityRatio(body);
        if (vis > bestVis) {
          bestVis = vis;
          best = view;
        }
      }
      const minVis = hasActiveQuestionToolbar(root) ? 0.18 : 0.35;
      return bestVis >= minVis ? best : null;
    }
    function getVisibleAssessmentRoot(minRatio = 0.2) {
      const shells = deepQuerySelectorAll(".assessment-1q, .abs__container.has-arrows", doc);
      return shells.find((shell) => isElementSubstantiallyVisible(shell, minRatio)) || null;
    }
    function getInAssessmentStartButtons(root = doc) {
      return deepQuerySelectorAll(
        [
          "adaptive-start-screen-view .start-button",
          ".assessment-start-screen .start-button",
          'adaptive-start-screen-view div.start-button[role="button"]',
          "adaptive-start-screen-view button.start-button",
          ".assessment-start-screen button.start-button",
          "button.start-button",
          '[role="button"].start-button',
          'button[aria-label*="Start" i]',
          'button[title*="Start" i]'
        ].join(", "),
        root
      );
    }
    function isOnQuizResultScreen(root) {
      if (isAssessmentResultVisible(doc)) return true;
      return !!(root && isAssessmentResultVisible(root));
    }
    function tryExitQuizResult(root) {
      if (!root) return false;
      for (const btn of deepQuerySelectorAll(".block-button", root)) {
        const label = (btn.textContent || "").trim();
        if (!/result/i.test(label)) continue;
        if (btn.classList.contains("active-block") || btn.classList.contains("is-active") || btn.getAttribute("aria-current") === "true") {
          continue;
        }
        btn.click();
        return true;
      }
      const nextBtns = deepQuerySelectorAll(
        'button[data-blockstrip-slider="right"], button.article__btn-arrow.is-right, .block-buttons-container button.is-right',
        root
      );
      for (const btn of nextBtns) {
        if (btn.disabled || btn.classList.contains("is-disabled")) continue;
        if (!isElementSubstantiallyVisible(btn, 0.12)) continue;
        btn.click();
        return true;
      }
      return false;
    }
    function isAssessmentInProgress() {
      const root = getVisibleAssessmentRoot(0.2);
      if (!root) return false;
      if (isAssessmentComplete(root)) return false;
      if (isOnQuizResultScreen(root)) return false;
      if (findReadyQuestionContainer(root)) return true;
      if (!isFormalExamLayout(root)) return false;
      const offset = getCarouselOffsetRatio(root);
      if (offset !== null && offset >= 0.35) return true;
      if (hasActiveQuestionToolbar(root)) return true;
      return deepQuerySelectorAll(".block-button.active-block", root).some(
        (btn) => /^Q\d+/i.test((btn.textContent || "").trim()) && isElementSubstantiallyVisible(btn, 0.2)
      );
    }
    function shouldBlockModuleAdvance(root, isSubmitEnabledFn, isQuestionAnsweredFn) {
      if (isOnQuizResultScreen(root)) return false;
      if (!root || !isAssessmentInProgress()) return false;
      const qContainer = findReadyQuestionContainer(root);
      if (!qContainer) return false;
      if (isSubmitEnabledFn(doc)) return false;
      return !isQuestionAnsweredFn(qContainer);
    }
    function markInAssessmentStartsHandled(root, clickedButtons) {
      getInAssessmentStartButtons(root).forEach((btn) => clickedButtons.add(btn));
    }
    function isAssessmentStarted(clickedButtons) {
      const root = getVisibleAssessmentRoot(0.15);
      if (!root) return false;
      if (isAssessmentComplete(root)) {
        markInAssessmentStartsHandled(root, clickedButtons);
        return true;
      }
      if (findReadyQuestionContainer(root)) {
        markInAssessmentStartsHandled(root, clickedButtons);
        return true;
      }
      if (isFormalExamLayout(root) && isAssessmentInProgress()) {
        markInAssessmentStartsHandled(root, clickedButtons);
        return true;
      }
      const starts = getInAssessmentStartButtons(root);
      if (starts.length === 0) return true;
      return starts.every((btn) => clickedButtons.has(btn));
    }
    function needsMoreScrollForAssessment(clickedButtons) {
      if (isAssessmentResultVisible(doc)) return false;
      const root = getVisibleAssessmentRoot(0.15);
      if (!root) return false;
      if (isAssessmentComplete(root)) return false;
      if (isAssessmentStarted(clickedButtons)) return false;
      const pendingStarts = getInAssessmentStartButtons(root).filter((btn) => !clickedButtons.has(btn));
      return pendingStarts.some((btn) => !isElementSubstantiallyVisible(btn, 0.5));
    }
    return {
      elementVisibilityRatio,
      isElementSubstantiallyVisible,
      isOnQuestionSlide,
      isAssessmentResultVisible,
      isAssessmentComplete,
      findVisibleQuestionContainer,
      findReadyQuestionContainer,
      hasQuestionContent,
      scrollQuestionIntoView,
      isQuestionReadyToAnswer,
      isOnQuizResultScreen,
      tryExitQuizResult,
      getVisibleAssessmentRoot,
      getInAssessmentStartButtons,
      isAssessmentInProgress,
      shouldBlockModuleAdvance,
      markInAssessmentStartsHandled,
      isAssessmentStarted,
      needsMoreScrollForAssessment,
      getCurrentQuestionNumber
    };
  }
  var lastText = "";
  var lastAt = 0;
  function setStatus(text) {
    const t = String(text || "").trim();
    if (!t) return;
    const now = Date.now();
    if (t === lastText && now - lastAt < 600) return;
    lastText = t;
    lastAt = now;
    if (typeof window.__netacadSetStatus === "function") {
      window.__netacadSetStatus(t);
    }
  }
  function resetStatusThrottle() {
    lastText = "";
    lastAt = 0;
  }
  var failedAttempts = /* @__PURE__ */ new WeakMap();
  function getVideoPlayer(video) {
    return video.closest(".brightcove-video-holder, .video-js, .plyr, .player-wrapper") || video.parentElement || video;
  }
  function skipVideo(video, player, runtime, processedVideos) {
    if (video.ended) {
      processedVideos.add(video);
      return false;
    }
    const failure = failedAttempts.get(video);
    if (failure && video.paused && Date.now() < failure.retryAt) {
      setStatus(failure.status);
      return true;
    }
    let active = true;
    let soughtTarget = null;
    runtime.isPaused = true;
    runtime.isVideoActive = true;
    setStatus("Video");
    const finish = (completed, status) => {
      if (!active) return;
      active = false;
      clearTimeout(timeout);
      for (const [event, handler] of listeners) video.removeEventListener(event, handler);
      runtime.cancelVideo = null;
      runtime.isPaused = false;
      runtime.isVideoActive = false;
      if (completed) {
        processedVideos.add(video);
        failedAttempts.delete(video);
      } else if (status) {
        failedAttempts.set(video, { status, retryAt: Date.now() + 5e3 });
        setStatus(status);
      }
    };
    const seek = () => {
      if (!active || video.paused || video.seeking || !Number.isFinite(video.duration) || video.duration <= 0) return;
      const target = Math.max(0, video.duration - 2.5);
      if (soughtTarget === target && video.currentTime >= target - 0.5) return;
      if (video.seekable) {
        let available = false;
        for (const ranges of [video.seekable, video.buffered]) {
          for (let i = 0; i < (ranges?.length || 0); i++) {
            if (ranges.start(i) <= target && ranges.end(i) >= target) available = true;
          }
        }
        if (!available) return;
      }
      try {
        soughtTarget = target;
        video.currentTime = target;
      } catch {
        finish(false, "Video error");
      }
    };
    const listeners = [
      ["loadedmetadata", seek],
      ["durationchange", seek],
      ["playing", seek],
      ["progress", seek],
      ["canplay", seek],
      ["seeked", seek],
      ["ended", () => finish(true)],
      ["error", () => finish(false, "Video error")]
    ];
    const timeout = setTimeout(() => finish(false, "Video waiting"), 15e3);
    for (const [event, handler] of listeners) video.addEventListener(event, handler);
    runtime.cancelVideo = () => finish(false);
    try {
      video.muted = true;
      const playButton = player?.querySelector(
        '.vjs-big-play-button, .play-button, .plyr__control--overlaid, button[aria-label="Play"], button[title="Play Video"], button[aria-label="\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438"]'
      );
      if (video.paused && playButton && !playButton.disabled && playButton.getClientRects().length) {
        playButton.click();
      }
      if (active && video.paused) {
        const playing = video.play();
        playing?.then(seek).catch((error) => {
          if (!active) return;
          if (!video.paused) seek();
          else finish(false, error?.name === "NotAllowedError" ? "Video blocked" : "Video error");
        });
      }
      seek();
    } catch {
      finish(false, "Video error");
    }
    return true;
  }
  function createContentHelpers(doc, win, assessment) {
    const { isElementSubstantiallyVisible, isAssessmentResultVisible, isOnQuestionSlide } = assessment;
    const posterAttempts = /* @__PURE__ */ new WeakMap();
    function tryOpenVideo() {
      for (const button of deepQuerySelectorAll(".media-poster .vjs-big-play-button", doc)) {
        const container = button.closest(".video-container");
        if (!container) continue;
        const video = container.querySelector("video");
        if (video && !isVideoHidden(video)) continue;
        if (!isElementSubstantiallyVisible(button, 0.35)) continue;
        const poster = button.closest(".media-poster");
        const lastClick = posterAttempts.get(button);
        setStatus("Video waiting");
        if (!button.disabled && poster.getAttribute("aria-busy") !== "true" && (lastClick === void 0 || Date.now() - lastClick >= 5e3)) {
          posterAttempts.set(button, Date.now());
          button.click();
        }
        return true;
      }
      return false;
    }
    function getVideosInOrder() {
      return deepQuerySelectorAll("video", doc);
    }
    function isVideoHidden(video) {
      const brightcove = video.closest("brightcove-view");
      if (brightcove?.classList.contains("animated-hide")) return true;
      let el = getVideoPlayer(video);
      while (el && el !== doc.body) {
        const style = win.getComputedStyle(el);
        if (style.display === "none" || style.visibility === "hidden") return true;
        if (parseFloat(style.opacity) < 0.05) return true;
        el = el.parentElement;
      }
      return false;
    }
    function getNextPendingVideo(processedVideos) {
      for (const video of getVideosInOrder()) {
        if (processedVideos.has(video)) continue;
        if (video.ended) {
          processedVideos.add(video);
          continue;
        }
        if (isVideoHidden(video)) continue;
        if (shouldInteractWithVideo(video, processedVideos)) return video;
      }
      return null;
    }
    function shouldInteractWithVideo(video, processedVideos, elWindow = win) {
      if (!video || processedVideos.has(video)) return false;
      if (isAssessmentResultVisible(doc)) return false;
      const player = getVideoPlayer(video);
      const rect = player.getBoundingClientRect();
      if (rect.width < 64 || rect.height < 48) return false;
      const vh = elWindow.innerHeight || doc.documentElement.clientHeight;
      const vw = elWindow.innerWidth || doc.documentElement.clientWidth;
      const visibleW = Math.max(0, Math.min(rect.left + rect.width, vw) - Math.max(rect.left, 0));
      const visibleH = Math.max(0, Math.min(rect.top + rect.height, vh) - Math.max(rect.top, 0));
      const availableArea = Math.min(rect.width, vw) * Math.min(rect.height, vh);
      return availableArea > 0 && visibleW * visibleH / availableArea >= 0.4;
    }
    function findScrollContainer() {
      const scrollingElement = doc.scrollingElement || doc.documentElement;
      const docScrollHeight = Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight);
      if (docScrollHeight > win.innerHeight + 1) return { useWindow: true };
      const candidates = [
        doc.querySelector(".page__inner"),
        doc.querySelector(".article__container"),
        doc.body,
        doc.documentElement
      ];
      let best = null;
      let bestArea = 0;
      for (const el of candidates) {
        if (!el) continue;
        const sh = el.scrollHeight;
        const ch = el.clientHeight;
        if (sh > ch + 50 && el.clientWidth * ch > bestArea) {
          bestArea = el.clientWidth * ch;
          best = el;
        }
      }
      if (best) return { useWindow: false, element: best };
      if (scrollingElement.scrollHeight > scrollingElement.clientHeight + 1) {
        return { useWindow: false, element: scrollingElement };
      }
      return { useWindow: true };
    }
    function createScrollState() {
      let scrollContainer = findScrollContainer();
      function getScrollElement() {
        if (!scrollContainer.useWindow && scrollContainer.element) {
          return scrollContainer.element;
        }
        return doc.scrollingElement || doc.documentElement;
      }
      function getScrollTop() {
        if (scrollContainer.useWindow) return win.scrollY;
        return scrollContainer.element.scrollTop;
      }
      function getMaxScrollPx() {
        const clientHeight = scrollContainer.useWindow ? win.innerHeight : scrollContainer.element.clientHeight;
        const scrollHeight = scrollContainer.useWindow ? Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight) : scrollContainer.element.scrollHeight;
        return Math.max(0, scrollHeight - clientHeight);
      }
      function getScrollPercent() {
        const maxScroll = getMaxScrollPx();
        if (maxScroll <= 5) return 100;
        const scrollTop = scrollContainer.useWindow ? win.scrollY : scrollContainer.element.scrollTop;
        return scrollTop / maxScroll * 100;
      }
      function scrollByStep(amount) {
        if (scrollContainer.useWindow) win.scrollBy({ top: amount, behavior: "instant" });
        else scrollContainer.element.scrollBy({ top: amount, behavior: "instant" });
      }
      function isAtScrollBottom() {
        if (getScrollPercent() < BOTTOM_PERCENT && getMaxScrollPx() > 5) return false;
        const docMax = Math.max(
          doc.documentElement.scrollHeight,
          doc.body.scrollHeight
        ) - win.innerHeight;
        return docMax <= 5 || win.scrollY >= docMax - 8;
      }
      function scrollToBottom() {
        const max = getMaxScrollPx();
        if (scrollContainer.useWindow) {
          win.scrollTo({ top: max, behavior: "instant" });
        } else {
          scrollContainer.element.scrollTo({ top: max, behavior: "instant" });
        }
        const docMax = Math.max(
          doc.documentElement.scrollHeight,
          doc.body.scrollHeight
        ) - win.innerHeight;
        if (docMax > 5 && win.scrollY < docMax - 8) {
          win.scrollTo({ top: docMax, behavior: "instant" });
        }
      }
      function refreshScrollContainer() {
        scrollContainer = findScrollContainer();
      }
      return {
        getScrollElement,
        getScrollTop,
        getScrollPercent,
        getMaxScrollPx,
        scrollByStep,
        isAtScrollBottom,
        scrollToBottom,
        refreshScrollContainer,
        get scrollContainer() {
          return scrollContainer;
        }
      };
    }
    function isModuleNavButton(btn) {
      if (!btn) return false;
      const cls = typeof btn.className === "string" ? btn.className : "";
      return /moduleNavBtn|moduleNavIcon/i.test(cls);
    }
    function findInContentNextButton(getVisibleAssessmentRoot, isAssessmentInProgress, root = doc, opts = {}) {
      const allowOnResult = opts.allowOnResult ?? false;
      if (!allowOnResult && getVisibleAssessmentRoot(0.15) && isAssessmentInProgress()) return null;
      const candidates = deepQuerySelectorAll(
        'button.article__btn-arrow.is-right, button[data-blockstrip-slider="right"]',
        root
      );
      for (const btn of candidates) {
        if (isModuleNavButton(btn)) continue;
        if (btn.closest(".assessment-1q, .abs__toolbar, .secure-toolbar-container")) continue;
        if (btn.closest(".block-buttons-container") && btn.closest(".assessment-1q, .abs__container.has-arrows")) {
          continue;
        }
        if (btn.disabled || btn.classList.contains("is-disabled") || btn.getAttribute("aria-disabled") === "true") continue;
        if (!isElementSubstantiallyVisible(btn, 0.12)) continue;
        return btn;
      }
      return null;
    }
    function findModuleNavNextButton() {
      const topDoc = getTopDocument();
      const btns = topDoc.querySelectorAll(
        'button.moduleNavBtn--sFwjV.next--3dfUb, button[class*="moduleNavBtn"][class*="next--"]'
      );
      for (const btn of btns) {
        if (btn.disabled || btn.classList.contains("disabled")) continue;
        return btn;
      }
      return null;
    }
    function handleVideoTick(video, processedVideos, runtime) {
      if (processedVideos.has(video)) return false;
      if (!shouldInteractWithVideo(video, processedVideos, win)) return false;
      return skipVideo(video, getVideoPlayer(video), runtime, processedVideos);
    }
    return {
      tryOpenVideo,
      getNextPendingVideo,
      shouldInteractWithVideo,
      createScrollState,
      findInContentNextButton,
      findModuleNavNextButton,
      handleVideoTick,
      isElementSubstantiallyVisible
    };
  }
  function findCodewindowBefore(checkView, doc) {
    let last = null;
    for (const cw of deepQuerySelectorAll("codewindow-view", doc)) {
      if (checkView.compareDocumentPosition(cw) & Node.DOCUMENT_POSITION_PRECEDING) {
        last = cw;
      }
    }
    return last;
  }
  function extractPythonQuestionText(codewindowRoot) {
    const el = deepQuerySelectorAll(".before-body-text", codewindowRoot)[0];
    if (!el) return "";
    const raw = (el.innerText || el.textContent || "").replace(/\u00A0/g, " ");
    return normalizeText(raw.replace(/^question\s*\d+\s*:\s*/i, ""));
  }
  function findVisiblePythonCheckExercise(doc, elementVisibilityRatio, minVis = 0.15) {
    let best = null;
    let bestVis = 0;
    for (const checkView of deepQuerySelectorAll("check-view", doc)) {
      const btn = deepQuerySelectorAll("button.check__button", checkView)[0];
      if (!btn || btn.disabled || btn.classList.contains("is-disabled") || btn.hasAttribute("disabled")) {
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
        code: extractQuestionCodeText(codewindow)
      };
    }
    return best;
  }
  function tryHandlePythonExercise(doc, databases, assessment) {
    const ctx = findVisiblePythonCheckExercise(doc, assessment.elementVisibilityRatio);
    if (!ctx) return false;
    const unansweredMcq = deepQuerySelectorAll("mcq-view", doc).some((v) => {
      const body = getQuestionBodyEl(v);
      return body && assessment.elementVisibilityRatio(body) >= 0.15 && !isQuestionAnswered(v);
    });
    if (unansweredMcq) return false;
    const activeDb = databases.getActiveDb(doc);
    const mcqViews = deepQuerySelectorAll("mcq-view", doc).filter((v) => {
      const body = getQuestionBodyEl(v);
      return body && assessment.elementVisibilityRatio(body) >= 0.15;
    });
    if (mcqViews.length && activeDb.ready) {
      const mcq = mcqViews.sort(
        (a, b) => assessment.elementVisibilityRatio(getQuestionBodyEl(b)) - assessment.elementVisibilityRatio(getQuestionBodyEl(a))
      )[0];
      const entry = databases.lookupEntryCached(activeDb, ctx.questionText, ctx.code);
      if (entry && !shouldTreatAsManual(entry, mcq)) {
        solveQuestion(mcq, entry, ctx.questionText, doc, false);
        if (!isQuestionAnswered(mcq, entry.answers)) return true;
      }
    }
    return tryClickCheckViewButton(ctx.checkView, ctx.button);
  }
  function findBlockRoot(checkView) {
    return checkView.closest("block-view, article-view, .component__widget, .abs__block") || checkView.parentElement;
  }
  function blockMcqsReady(block, doc, databases, assessment) {
    const activeDb = databases.getActiveDb(doc);
    for (const mcq of deepQuerySelectorAll("mcq-view", block)) {
      const body = getQuestionBodyEl(mcq);
      if (!body || assessment.elementVisibilityRatio(body) < 0.15) continue;
      const entry = activeDb.ready ? databases.lookupEntryCached(activeDb, extractCleanText(body), extractQuestionCodeText(mcq)) : null;
      if (!isQuestionAnswered(mcq, entry?.answers)) return false;
    }
    return true;
  }
  function answerBlockMcqs(block, doc, databases, assessment) {
    const activeDb = databases.getActiveDb(doc);
    if (!activeDb.ready) return false;
    let acted = false;
    for (const mcq of deepQuerySelectorAll("mcq-view", block)) {
      const body = getQuestionBodyEl(mcq);
      if (!body || assessment.elementVisibilityRatio(body) < 0.15) continue;
      const qText = extractCleanText(body);
      const qCode = extractQuestionCodeText(mcq);
      const entry = databases.lookupEntryCached(activeDb, qText, qCode);
      if (isQuestionAnswered(mcq, entry?.answers)) continue;
      if (entry && !shouldTreatAsManual(entry, mcq) && solveQuestion(mcq, entry, qText, doc, false)) {
        acted = true;
      }
    }
    return acted;
  }
  function tryHandleCheckExercise(doc, databases, assessment) {
    const visFn = assessment.elementVisibilityRatio;
    for (const checkView of deepQuerySelectorAll("check-view", doc)) {
      if (!getCheckAction(checkView)) continue;
      const btn = deepQuerySelectorAll("button.check__button", checkView)[0];
      if (!btn || btn.disabled || btn.classList.contains("is-disabled") || btn.hasAttribute("disabled")) {
        continue;
      }
      if (visFn(btn) < 0.15) continue;
      const block = findBlockRoot(checkView);
      if (answerBlockMcqs(block, doc, databases, assessment)) {
        return true;
      }
      if (!blockMcqsReady(block, doc, databases, assessment)) continue;
      return tryClickCheckViewButton(checkView, btn);
    }
    return false;
  }
  function findVisibleHotgridPopup(doc, content) {
    return deepQuerySelectorAll('[role="dialog"].hotgrid, .notify__popup.hotgrid', doc).find((el) => content.isElementSubstantiallyVisible(el, 0.05));
  }
  function tryAdvanceHotgridPopup(doc, content) {
    if (!findVisibleHotgridPopup(doc, content)) return false;
    const nextBtn = deepQuerySelectorAll("button.js-hotgrid-control-click.next", doc).find((btn) => !btn.disabled && !btn.classList.contains("hidden") && !btn.classList.contains("disabled") && content.isElementSubstantiallyVisible(btn, 0.05));
    if (nextBtn) {
      nextBtn.click();
      return true;
    }
    const closeBtn = deepQuerySelectorAll(
      "button.js-hotgrid-popup-close, button.js-notify-close-btn",
      doc
    ).find((btn) => !btn.disabled && content.isElementSubstantiallyVisible(btn, 0.05));
    if (closeBtn) {
      closeBtn.click();
      return true;
    }
    return false;
  }
  function tryClickHotgridItem(doc, content) {
    const items = deepQuerySelectorAll("button.js-hotgrid-item-click", doc).filter((btn) => !btn.classList.contains("is-visited") && !btn.disabled && !btn.classList.contains("disabled") && content.isElementSubstantiallyVisible(btn, 0.35)).sort((a, b) => (parseInt(a.dataset.index, 10) || 0) - (parseInt(b.dataset.index, 10) || 0));
    if (!items.length) return false;
    items[0].click();
    return true;
  }
  function tryHandleHotgrid(doc, content, opts = {}) {
    if (tryAdvanceHotgridPopup(doc, content)) return true;
    if (opts.allowInlineButtons === false) return false;
    return tryClickHotgridItem(doc, content);
  }
  function findVisibleHotgraphicPopup(doc, content) {
    return deepQuerySelectorAll(
      '[role="dialog"].hotgraphic-popup, .hotgraphic-popup[role="dialog"]',
      doc
    ).find((el) => content.isElementSubstantiallyVisible(el, 0.05));
  }
  function tryAdvanceHotgraphicPopup(doc, content) {
    if (!findVisibleHotgraphicPopup(doc, content)) return false;
    const nextBtn = deepQuerySelectorAll("button.js-hotgraphic-controls-click.next", doc).find((btn) => !btn.disabled && !btn.classList.contains("hidden") && !btn.classList.contains("disabled") && content.isElementSubstantiallyVisible(btn, 0.05));
    if (nextBtn) {
      nextBtn.click();
      return true;
    }
    const closeBtn = deepQuerySelectorAll("button.js-hotgraphic-popup-close", doc).find((btn) => !btn.disabled && content.isElementSubstantiallyVisible(btn, 0.05));
    if (closeBtn) {
      closeBtn.click();
      return true;
    }
    return false;
  }
  function tryClickHotgraphicItem(doc, content) {
    const items = deepQuerySelectorAll("button.js-hotgraphic-item-click", doc).filter((btn) => !btn.classList.contains("is-visited") && !btn.disabled && !btn.classList.contains("disabled") && content.isElementSubstantiallyVisible(btn, 0.35)).sort((a, b) => (parseInt(a.dataset.index, 10) || 0) - (parseInt(b.dataset.index, 10) || 0));
    if (!items.length) return false;
    items[0].click();
    return true;
  }
  function tryHandleHotgraphic(doc, content, opts = {}) {
    if (tryAdvanceHotgraphicPopup(doc, content)) return true;
    if (opts.allowInlineButtons === false) return false;
    return tryClickHotgraphicItem(doc, content);
  }
  function findVisiblePageTracerPopup(doc, content) {
    return deepQuerySelectorAll(
      '[role="dialog"].pageTracer, .notify__popup.pageTracer, [role="dialog"].pagetracer',
      doc
    ).find((el) => content.isElementSubstantiallyVisible(el, 0.05));
  }
  function tryAdvancePageTracerPopup(doc, content) {
    if (!findVisiblePageTracerPopup(doc, content)) return false;
    const closeBtn = deepQuerySelectorAll(
      "button.close-button, button#close-btn, button.close-btn",
      doc
    ).find((btn) => !btn.disabled && !btn.classList.contains("disabled") && content.isElementSubstantiallyVisible(btn, 0.05));
    if (closeBtn) {
      closeBtn.click();
      return true;
    }
    return false;
  }
  function tryHandleAccordion(doc, content, clickedButtons, opts) {
    if (opts.allowInlineButtons === false) return false;
    const items = deepQuerySelectorAll("button.accordion__item-btn", doc).filter((btn) => btn.getAttribute("aria-expanded") === "false" && !btn.disabled && !btn.classList.contains("disabled") && !clickedButtons.has(btn) && content.isElementSubstantiallyVisible(btn, 0.35)).sort((a, b) => (parseInt(a.dataset.index, 10) || 0) - (parseInt(b.dataset.index, 10) || 0));
    if (!items.length) return false;
    items[0].click();
    clickedButtons.add(items[0]);
    return true;
  }
  function tryHandlePageTracer(doc, content, win, clickedButtons, opts) {
    if (opts.allowInlineButtons === false) return false;
    const items = deepQuerySelectorAll("button.pageTracer-button", doc).filter((btn2) => !btn2.disabled && !btn2.classList.contains("disabled") && !clickedButtons.has(btn2) && content.isElementSubstantiallyVisible(btn2, 0.35)).sort((a, b) => (parseInt(a.dataset.pageTracerButtonId, 10) || 0) - (parseInt(b.dataset.pageTracerButtonId, 10) || 0));
    if (!items.length) return false;
    const btn = items[0];
    btn.click();
    clickedButtons.add(btn);
    return true;
  }
  function tryHandleFlipcards(doc, content, clickedButtons) {
    const items = deepQuerySelectorAll("button.flipcard__item", doc).filter((btn) => !btn.disabled && !btn.classList.contains("disabled") && !clickedButtons.has(btn) && content.isElementSubstantiallyVisible(btn, 0.35) && btn.querySelector('.flipcard__item-back[aria-hidden="true"]')).sort((a, b) => (parseInt(a.dataset.index, 10) || 0) - (parseInt(b.dataset.index, 10) || 0));
    if (!items.length) return false;
    clickedButtons.add(items[0]);
    items[0].click();
    return true;
  }
  function tryHandleInteractiveWidgets(doc, content, win, clickedButtons, opts = {}) {
    installPageDownloadGuard(win);
    if (tryAdvancePageTracerPopup(doc, content)) return true;
    if (tryHandleFlipcards(doc, content, clickedButtons)) return true;
    if (tryHandleAccordion(doc, content, clickedButtons, opts)) return true;
    if (tryHandlePageTracer(doc, content, win, clickedButtons, opts)) return true;
    return false;
  }
  function isFullscreenBrightcovePlayer(player, win) {
    if (!player) return false;
    const vh = win.innerHeight || 800;
    const rect = player.getBoundingClientRect();
    if (rect.height >= vh * 0.45) return true;
    const style = player.getAttribute("style") || "";
    return /100vh/i.test(style);
  }
  function findModuleIntroVideo(doc, content, win) {
    for (const holder of deepQuerySelectorAll(".brightcove-video-holder", doc)) {
      if (!content.isElementSubstantiallyVisible(holder, 0.15)) continue;
      const player = holder.querySelector(".video-js");
      const video = holder.querySelector("video");
      if (!video) continue;
      const dialog = holder.closest('[role="dialog"], .notify__popup, .modal, .overlay');
      if (dialog || isFullscreenBrightcovePlayer(player, win)) {
        return { holder, player, video, dialog };
      }
    }
    return null;
  }
  function tryDismissIntro(doc, content, intro) {
    const roots = [intro.dialog, intro.holder?.parentElement, intro.holder].filter(Boolean);
    const inScope = (el) => roots.some((root) => root.contains(el));
    const dismissSelectors = [
      "button.js-notify-close-btn",
      "button.close-button",
      "button.close-btn",
      'button[aria-label*="Close"]',
      "button.vjs-close-button"
    ];
    for (const sel of dismissSelectors) {
      const btn = deepQuerySelectorAll(sel, doc).find((b) => !b.disabled && !b.classList.contains("disabled") && inScope(b) && content.isElementSubstantiallyVisible(b, 0.05));
      if (btn) {
        btn.click();
        return true;
      }
    }
    const textBtn = deepQuerySelectorAll("button", doc).find((b) => !b.disabled && !b.classList.contains("disabled") && inScope(b) && content.isElementSubstantiallyVisible(b, 0.05) && /^(continue|next|close|skip|got it|start)$/i.test((b.textContent || "").trim()));
    if (textBtn) {
      textBtn.click();
      return true;
    }
    return false;
  }
  function tryHandleModuleIntroVideo(doc, content, win, runtime, processedVideos) {
    const intro = findModuleIntroVideo(doc, content, win);
    if (!intro) return false;
    if (intro.video.ended) {
      processedVideos.add(intro.video);
      return tryDismissIntro(doc, content, intro);
    }
    if (processedVideos.has(intro.video)) return false;
    return skipVideo(intro.video, intro.player, runtime, processedVideos);
  }
  function createMainLoop(doc, win, databases) {
    const assessment = createAssessmentHelpers(doc, win);
    const content = createContentHelpers(doc, win, assessment);
    const scroll = content.createScrollState();
    const clickedButtons = /* @__PURE__ */ new Set();
    const processedVideos = /* @__PURE__ */ new Set();
    const runtime = { isAdvancing: false, isPaused: false, isVideoActive: false, stopped: false };
    let lastAssessmentQContainer = null;
    let lastAssessmentQContainerTick = 0;
    let tickTimer = null;
    let restartTimer = null;
    let cooldownUntil = 0;
    let lastActionAt = 0;
    let loopTicks = 0;
    function defaultActionCooldownMs() {
      return isSecureExam() ? TICK_MS_PRACTICE_AFTER : TICK_MS_AFTER_ACTION;
    }
    function bumpCooldown(ms) {
      const delay = ms ?? defaultActionCooldownMs();
      cooldownUntil = Date.now() + delay;
      lastActionAt = Date.now();
    }
    function getAssessmentPollMs() {
      if (isSecureExam()) return TICK_MS_PRACTICE_POLL;
      if (Date.now() - lastActionAt < POST_ACTION_FAST_POLL_MS) return TICK_MS_POST_ACTION_POLL;
      return TICK_MS_ASSESSMENT;
    }
    function getAssessmentIdleMs() {
      return isSecureExam() ? TICK_MS_PRACTICE_IDLE : TICK_MS_ASSESSMENT;
    }
    function getTickDelay() {
      if (runtime.isPaused || runtime.isAdvancing) return 300;
      const wait = cooldownUntil - Date.now();
      if (wait > 0) return wait;
      if (assessment.isAssessmentInProgress() && assessment.isAssessmentStarted(clickedButtons)) {
        return getAssessmentPollMs();
      }
      return TICK_MS_SCROLL;
    }
    function scheduleNextTick(delay) {
      if (runtime.stopped) return;
      clearTimeout(tickTimer);
      tickTimer = setTimeout(runMainTick, delay);
    }
    function scheduleAssessmentPoll() {
      const afterAction = Date.now() - lastActionAt < POST_ACTION_FAST_POLL_MS;
      const delay = isSecureExam() ? TICK_MS_PRACTICE_POLL : afterAction ? TICK_MS_POST_ACTION_POLL : getAssessmentIdleMs();
      scheduleNextTick(delay);
    }
    function tryClickWidget(handler) {
      if (!handler()) return false;
      runtime.isPaused = true;
      setStatus("Click");
      bumpCooldown(400);
      invalidateShadowCache();
      setTimeout(() => {
        runtime.isPaused = false;
      }, 400);
      scheduleNextTick(getTickDelay());
      return true;
    }
    function runMainTick() {
      if (runtime.stopped) return;
      try {
        runMainTickBody();
      } catch (e) {
        console.error("[AutoRunner] tick:", e);
        scheduleNextTick(TICK_MS_SCROLL);
      }
    }
    function runMainTickBody() {
      if (runtime.isAdvancing) {
        scheduleNextTick(300);
        return;
      }
      if (runtime.isPaused) {
        scheduleNextTick(300);
        return;
      }
      if (Date.now() < cooldownUntil) {
        scheduleNextTick(getTickDelay());
        return;
      }
      loopTicks++;
      if (tryHandleModuleIntroVideo(doc, content, win, runtime, processedVideos)) {
        bumpCooldown(400);
        invalidateShadowCache();
        scheduleNextTick(getTickDelay());
        return;
      }
      if (tryClickWidget(() => tryHandleHotgrid(doc, content, { allowInlineButtons: false }))) return;
      if (tryClickWidget(() => tryHandleHotgraphic(doc, content, { allowInlineButtons: false }))) return;
      if (tryClickWidget(() => tryHandleFlipcards(doc, content, clickedButtons))) return;
      const assessmentRoot = assessment.getVisibleAssessmentRoot(0.15);
      const assessmentDone = assessment.isAssessmentResultVisible(doc) || assessmentRoot && assessment.isAssessmentComplete(assessmentRoot);
      const submitOpts = { elementVisibilityRatio: assessment.elementVisibilityRatio };
      if (!assessmentDone && tryHandlePythonExercise(doc, databases, assessment)) {
        setStatus("Check");
        bumpCooldown(400);
        invalidateShadowCache();
        scheduleNextTick(getTickDelay());
        return;
      }
      if (!assessmentDone && tryHandleCheckExercise(doc, databases, assessment)) {
        setStatus("Check");
        bumpCooldown(400);
        invalidateShadowCache();
        scheduleNextTick(getTickDelay());
        return;
      }
      if (assessmentDone) {
        setStatus("Done");
        if (assessmentRoot) {
          delete assessmentRoot.dataset.quizInProgress;
          delete assessmentRoot.dataset.blockedNavWarned;
          delete assessmentRoot.dataset.waitingStart;
          assessment.markInAssessmentStartsHandled(assessmentRoot, clickedButtons);
        }
      } else if (assessmentRoot) {
        if (assessment.isAssessmentInProgress()) {
          delete assessmentRoot.dataset.waitingStart;
          assessmentRoot.dataset.quizInProgress = "true";
          assessment.markInAssessmentStartsHandled(assessmentRoot, clickedButtons);
        } else {
          delete assessmentRoot.dataset.quizInProgress;
          delete assessmentRoot.dataset.waitingStart;
          for (const btn of assessment.getInAssessmentStartButtons(assessmentRoot)) {
            if (clickedButtons.has(btn)) continue;
            if (!assessment.isElementSubstantiallyVisible(btn, 0.4)) continue;
            btn.click();
            clickedButtons.add(btn);
            setStatus("Start");
            bumpCooldown(isSecureExam() ? 300 : 600);
            invalidateShadowCache();
            scheduleNextTick(getTickDelay());
            return;
          }
        }
      }
      const finalScreens = deepQuerySelectorAll(".final-screen-inner", doc);
      for (const screen of finalScreens) {
        if (!assessment.isElementSubstantiallyVisible(screen, 0.35)) continue;
        const confirmCheckbox = deepQuerySelectorAll('#confirm-exam, input[name="confirm"]', screen)[0];
        if (confirmCheckbox && !confirmCheckbox.checked) {
          confirmCheckbox.click();
          bumpCooldown(500);
          scheduleNextTick(getTickDelay());
          return;
        }
        const submitCandidates = [
          ...deepQuerySelectorAll(".adaptive-assessment-submit", screen),
          ...deepQuerySelectorAll(".submit-button", screen),
          ...deepQuerySelectorAll('button[type="submit"]', screen),
          ...deepQuerySelectorAll("button", screen).filter(
            (b) => /\b(final\s+submit|submit\s+exam|submit)\b/i.test((b.textContent || "").trim())
          )
        ];
        const finalSubmitBtn = submitCandidates.find(
          (btn) => btn && !btn.disabled && !btn.classList.contains("is-disabled") && !btn.hasAttribute("disabled")
        );
        if (finalSubmitBtn) {
          finalSubmitBtn.click();
          setStatus("Submit");
          bumpCooldown(800);
          invalidateShadowCache();
          scheduleNextTick(getTickDelay());
          return;
        }
      }
      if (!assessmentDone && assessmentRoot && assessment.isAssessmentStarted(clickedButtons)) {
        const activeDb = databases.getActiveDb(doc);
        let qContainer = assessment.findReadyQuestionContainer(assessmentRoot);
        if (!qContainer && assessment.hasQuestionContent(assessmentRoot)) {
          if (assessment.scrollQuestionIntoView(assessmentRoot)) {
            setStatus("Scroll");
            scheduleNextTick(TICK_MS_SCROLL);
            return;
          }
        }
        if (qContainer) {
          setStatus("Quiz");
          lastAssessmentQContainer = qContainer;
          lastAssessmentQContainerTick = loopTicks;
        } else if (lastAssessmentQContainer && loopTicks - lastAssessmentQContainerTick <= 20 && assessment.isQuestionReadyToAnswer(lastAssessmentQContainer)) {
          qContainer = lastAssessmentQContainer;
          setStatus("Quiz");
        }
        if (assessment.isAssessmentInProgress() && !qContainer && !assessmentRoot.dataset.noMcqWarned) {
          assessmentRoot.dataset.noMcqWarned = "true";
          scheduleAssessmentPoll();
          return;
        }
        if (qContainer) delete assessmentRoot.dataset.noMcqWarned;
        if (qContainer) {
          const qTextEl = getQuestionBodyEl(qContainer);
          if (!qTextEl) {
            scheduleAssessmentPoll();
            return;
          }
          const qText = extractCleanText(qTextEl);
          const qCode = extractQuestionCodeText(qContainer);
          const tag = databases.getDbTag(activeDb.mode);
          if (!activeDb.ready) {
            if (!qContainer.dataset.warned) {
              const dbName = databases.getDbVarName(activeDb.mode);
              console.error(`[AutoRunner] ${tag} ${dbName} is not defined. Paste the JSON database before running.`);
              qContainer.dataset.warned = "true";
            }
            scheduleAssessmentPoll();
            return;
          }
          const entry = databases.lookupEntryCached(activeDb, qText, qCode);
          submitOpts.correctAnswers = entry?.answers;
          if (!entry) {
            if (!qContainer.dataset.warned) {
              qContainer.dataset.warned = "true";
            }
            const userDone = isQuestionAnswered(qContainer) || isSubmitEnabled(doc);
            if (!userDone) {
              scheduleAssessmentPoll();
              return;
            }
            delete qContainer.dataset.warned;
            if (trySubmitAndAdvance(doc, qContainer, submitOpts)) {
              setStatus("Submit");
              bumpCooldown();
              invalidateShadowCache();
            }
            scheduleAssessmentPoll();
            return;
          }
          if (shouldTreatAsManual(entry, qContainer)) {
            if (waitForManualCompletion(qContainer, doc, entry)) {
              setStatus("Manual");
              scheduleAssessmentPoll();
              return;
            }
            if (trySubmitAndAdvance(doc, qContainer, submitOpts)) bumpCooldown();
            scheduleAssessmentPoll();
            return;
          }
          runtime.isPaused = false;
          const acted = solveQuestion(
            qContainer,
            entry,
            qText,
            doc,
            isSecureExam()
          );
          if (acted) {
            setStatus("Answer");
            bumpCooldown();
          }
          if (acted) {
            if (isQuestionAnswered(qContainer, entry.answers) && trySubmitAndAdvance(doc, qContainer, submitOpts)) {
              setStatus("Check");
              bumpCooldown();
              invalidateShadowCache();
            }
            scheduleAssessmentPoll();
            return;
          }
          if (!isQuestionAnswered(qContainer, entry.answers)) {
            scheduleAssessmentPoll();
            return;
          }
          if (trySubmitAndAdvance(doc, qContainer, submitOpts)) {
            bumpCooldown();
            invalidateShadowCache();
            scheduleAssessmentPoll();
            return;
          }
          scheduleAssessmentPoll();
          return;
        }
      } else if (assessmentRoot && !assessment.isAssessmentResultVisible(doc) && !assessment.isAssessmentComplete(assessmentRoot) && !assessment.isAssessmentInProgress() && !assessment.isAssessmentStarted(clickedButtons)) {
        assessmentRoot.dataset.waitingStart = "true";
      }
      if (!assessmentDone && assessmentRoot && assessment.hasQuestionContent(assessmentRoot)) {
        if (assessment.scrollQuestionIntoView(assessmentRoot)) {
          setStatus("Scroll");
          scheduleNextTick(TICK_MS_SCROLL);
          return;
        }
      }
      if (!assessmentDone && assessmentRoot && assessment.isAssessmentInProgress()) {
        const pending = assessment.findReadyQuestionContainer(assessmentRoot);
        if (!pending) {
          if (assessment.scrollQuestionIntoView(assessmentRoot)) {
            setStatus("Scroll");
            scheduleNextTick(TICK_MS_SCROLL);
            return;
          }
        }
        scheduleAssessmentPoll();
        return;
      }
      const allowInlineButtons = scroll.getScrollPercent() > 10 || scroll.getScrollTop() > 100;
      if (tryClickWidget(() => tryHandleHotgrid(doc, content, { allowInlineButtons }))) return;
      if (tryClickWidget(() => tryHandleHotgraphic(doc, content, { allowInlineButtons }))) return;
      if (tryClickWidget(() => tryHandleInteractiveWidgets(doc, content, win, clickedButtons, { allowInlineButtons }))) return;
      const buttons = deepQuerySelectorAll(
        "button.open-dialog, button.btn__action:not(.reset-answer):not(.change-question):not(.adaptive-assessment-submit):not(.submit-button):not(.pageTracer-button):not(.check__button), button.tabs__nav-item-btn",
        doc
      );
      for (const btn of buttons) {
        if (btn.disabled || btn.classList.contains("disabled")) continue;
        if (!allowInlineButtons) continue;
        if (!clickedButtons.has(btn) && content.isElementSubstantiallyVisible(btn, 0.35, win)) {
          runtime.isPaused = true;
          setStatus("Click");
          btn.click();
          clickedButtons.add(btn);
          bumpCooldown(400);
          setTimeout(() => {
            runtime.isPaused = false;
          }, 400);
          scheduleNextTick(getTickDelay());
          return;
        }
      }
      if (!runtime.isVideoActive) {
        if (content.tryOpenVideo()) {
          scheduleNextTick(TICK_MS_ASSESSMENT);
          return;
        }
        const pendingVideo = content.getNextPendingVideo(processedVideos);
        if (pendingVideo && content.handleVideoTick(pendingVideo, processedVideos, runtime)) {
          scheduleNextTick(getTickDelay());
          return;
        }
      }
      const percentDown = scroll.getScrollPercent();
      const keepScrollingForAssessment = assessment.needsMoreScrollForAssessment(clickedButtons);
      const navRoot = assessmentRoot || assessment.getVisibleAssessmentRoot(0.15);
      const onQuizResult = assessmentDone || assessment.isOnQuizResultScreen(navRoot);
      if (!onQuizResult && assessment.shouldBlockModuleAdvance(navRoot, isSubmitEnabled, isQuestionAnswered)) {
        if (navRoot) navRoot.dataset.blockedNavWarned = "true";
        scheduleAssessmentPoll();
        return;
      }
      if (navRoot) delete navRoot.dataset.blockedNavWarned;
      if (onQuizResult) {
        const moduleNext2 = content.findModuleNavNextButton();
        if (moduleNext2) {
          runtime.isAdvancing = true;
          clearTimeout(tickTimer);
          setStatus("Next");
          moduleNext2.click();
          clearTimeout(restartTimer);
          restartTimer = setTimeout(() => window.autoRunnerRestart?.(), 4e3);
          return;
        }
        if (navRoot && assessment.tryExitQuizResult(navRoot)) {
          setStatus("Next");
          bumpCooldown(500);
          scheduleNextTick(getTickDelay());
          return;
        }
        if (!scroll.isAtScrollBottom()) {
          scroll.scrollToBottom();
          setStatus("Scroll");
          scheduleNextTick(TICK_MS_SCROLL);
          return;
        }
      }
      const contentNext = content.findInContentNextButton(
        assessment.getVisibleAssessmentRoot,
        assessment.isAssessmentInProgress,
        doc,
        { allowOnResult: onQuizResult }
      );
      const atScrollBottom = scroll.isAtScrollBottom();
      if (contentNext && atScrollBottom && !keepScrollingForAssessment) {
        setStatus("Next");
        contentNext.click();
        scroll.refreshScrollContainer();
        invalidateShadowCache();
        bumpCooldown(500);
        scheduleNextTick(getTickDelay());
        return;
      }
      if (onQuizResult && !scroll.isAtScrollBottom()) {
        scroll.scrollToBottom();
        setStatus("Scroll");
        scheduleNextTick(TICK_MS_SCROLL);
        return;
      }
      if (percentDown < BOTTOM_PERCENT || keepScrollingForAssessment) {
        const viewport = scroll.scrollContainer.useWindow ? win.innerHeight : scroll.scrollContainer.element.clientHeight;
        scroll.scrollByStep(Math.round(viewport * SCROLL_PERCENTAGE));
        setStatus("Scroll");
        scheduleNextTick(TICK_MS_SCROLL);
        return;
      }
      const moduleNext = content.findModuleNavNextButton();
      if (moduleNext) {
        runtime.isAdvancing = true;
        clearTimeout(tickTimer);
        setStatus("Next");
        moduleNext.click();
        clearTimeout(restartTimer);
        restartTimer = setTimeout(() => window.autoRunnerRestart?.(), 4e3);
        return;
      }
      scheduleNextTick(getTickDelay());
    }
    function stop() {
      runtime.stopped = true;
      runtime.cancelVideo?.();
      clearTimeout(tickTimer);
      clearTimeout(restartTimer);
      tickTimer = null;
      restartTimer = null;
    }
    return {
      start() {
        runtime.stopped = false;
        runMainTick();
      },
      stop
    };
  }
  var activeLoop = null;
  var iframeRetryTimer = null;
  var running = false;
  function clearIframeRetry() {
    if (iframeRetryTimer) {
      clearTimeout(iframeRetryTimer);
      iframeRetryTimer = null;
    }
  }
  function attachLoop(doc, win) {
    const databases = initDatabases();
    activeLoop = createMainLoop(doc, win, databases);
  }
  function startRunner() {
    if (activeLoop) return;
    running = true;
    resetStatusThrottle();
    setStatus("Running");
    try {
      if (typeof RAW_DB === "undefined") {
        console.error("[AutoRunner] RAW_DB is not defined.");
        setStatus("No data");
        running = false;
        return;
      }
      const iframe = findCourseIframe();
      if (!iframe) {
        setStatus("Find frame");
        clearIframeRetry();
        iframeRetryTimer = setTimeout(() => {
          iframeRetryTimer = null;
          startRunner();
        }, 2e3);
        return;
      }
      clearIframeRetry();
      const win = iframe.contentWindow;
      const doc = iframe.contentDocument || win.document;
      installPageDownloadGuard(win);
      attachLoop(doc, win);
      activeLoop.start();
    } catch (e) {
      console.error("[AutoRunner] FATAL:", e);
      try {
        window.top.console.error("[AutoRunner] FATAL:", e);
      } catch {
      }
      setStatus("Error");
      running = false;
    }
  }
  function stopRunner() {
    running = false;
    clearIframeRetry();
    if (activeLoop) {
      activeLoop.stop();
      activeLoop = null;
    }
    setStatus("Stopped");
  }
  function isRunnerActive() {
    return running;
  }
  function restartRunner() {
    stopRunner();
    startRunner();
  }
  window.__netacadRunner = {
    version,
    start: startRunner,
    stop: stopRunner,
    isRunning: isRunnerActive,
    restart: restartRunner
  };
  window.autoRunnerRestart = () => {
    if (isRunnerActive()) restartRunner();
  };
  if (!window.__NETACAD_EXTENSION) {
    startRunner();
  }
})();
