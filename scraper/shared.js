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

import fs from "fs/promises";
import path from "path";
import puppeteer from "puppeteer-core";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const OUTPUT_DIR = path.join(__dirname, "logs");

export const DEFAULT_EXECUTABLE =
    "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser";

export function parseBrowserArgs(argv, defaults) {
    const opts = {
        maxPages: Infinity,
        delayMs: 1500,
        executablePath: process.env.EXECUTABLE_PATH || DEFAULT_EXECUTABLE,
        ...defaults,
    };

    for (let i = 2; i < argv.length; i++) {
        const arg = argv[i];
        if (arg === "--url" && argv[i + 1]) {
            opts.url = argv[++i];
        } else if (arg === "--max-pages" && argv[i + 1]) {
            opts.maxPages = parseInt(argv[++i], 10);
        } else if (arg === "--delay" && argv[i + 1]) {
            opts.delayMs = parseInt(argv[++i], 10);
        } else if (arg === "--executable" && argv[i + 1]) {
            opts.executablePath = argv[++i];
        } else if (arg === "--help" || arg === "-h") {
            return null;
        }
    }

    return opts;
}

export function stripQuestionNumber(text) {
    return text.replace(/^\d+\.\s*/, "").trim();
}

export function buildKeyedOutput(entries) {
    const out = {};
    for (const { key, questions } of entries) {
        out[key] = questions;
    }
    return out;
}

export function getOutputPath(prefix) {
    const sessionId = new Date().toISOString().replace(/[:.]/g, "-");
    return path.join(OUTPUT_DIR, `${prefix}-${sessionId}.json`);
}

export function sanitizeQuestion(q) {
    const question = stripQuestionNumber(q.question);
    const answers = (q.answers ?? []).map((a) => String(a).trim()).filter(Boolean);

    if (answers.length > 0) {
        return { question, answers };
    }

    const item = { question, manual: true, answers: [] };
    if (q.imageUrl) item.imageUrl = q.imageUrl;
    if (q.missingAnswers) item.missingAnswers = true;
    return item;
}

export function validatePayload(payload) {
    const problems = [];
    const sections = Array.isArray(payload) ? [["", payload]] : Object.entries(payload);

    for (const [key, questions] of sections) {
        if (key.startsWith("_")) continue;
        questions.forEach((q, i) => {
            const hasAnswers = Array.isArray(q.answers) && q.answers.length > 0;
            if (!hasAnswers && !q.manual) {
                problems.push(`${key} #${i + 1}: ${q.question.slice(0, 60)}…`);
            }
            if (hasAnswers && q.answers.some((a) => !String(a).trim())) {
                problems.push(`${key} #${i + 1}: empty answer`);
            }
        });
    }
    return problems;
}

export async function launchBrowser(executablePath) {
    return puppeteer.launch({
        executablePath,
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized", "--disable-blink-features=AutomationControlled"],
    });
}

export async function preparePageForExtract(page) {
    await page.evaluate(() => {
        const root =
            document.querySelector(".thecontent") ||
            document.querySelector(".entry-content .thecontent") ||
            document.querySelector(".entry-content");

        document.querySelectorAll('ul[style*="content-visibility"]').forEach((ul) => {
            ul.style.contentVisibility = "visible";
            ul.style.containIntrinsicSize = "auto";
            ul.scrollIntoView({ block: "center" });
        });

        if (root) {
            root.scrollIntoView({ block: "start" });
            window.scrollTo(0, root.offsetTop);
            root.querySelectorAll("p > strong, .thecontent > strong").forEach((el) => {
                el.scrollIntoView({ block: "center" });
            });
        }

        window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise((r) => setTimeout(r, 1500));
}

export function parseModuleId(title, url) {
    const fromTitle = title?.match(/^(\d+\.\d+\.\d+)/);
    if (fromTitle) return fromTitle[1];

    const slug = url?.match(/(\d+)-(\d+)-(\d+)-/);
    if (slug) return `${slug[1]}.${slug[2]}.${slug[3]}`;

    if (/final\s+exam/i.test(title || "") || /course-final-exam/i.test(url || "")) {
        return "final-exam";
    }

    const moduleFromTitle = title?.match(/^Module\s+(\d+)\s*:/i);
    if (moduleFromTitle) return `module-${moduleFromTitle[1]}`;

    const moduleFromUrl = url?.match(/\/module-(\d+)-/i);
    if (moduleFromUrl) return `module-${moduleFromUrl[1]}`;

    return null;
}

export function parseExamKey(title, url) {
    const fromTitle = title?.match(/Modules\s+(\d+)\s*[–—-]\s*(\d+)/i);
    if (fromTitle) return `${fromTitle[1]}-${fromTitle[2]}`;

    const slug = url?.match(/modules-(\d+)-(\d+)-/i);
    if (slug) return `${slug[1]}-${slug[2]}`;

    if (/final\s+exam/i.test(title || "") || /course-final-exam/i.test(url || "")) {
        return "final-exam";
    }

    return null;
}

export function formatQuestions(questions, heading) {
    let out = `\n=== ${heading} ===\n\n`;
    for (const q of questions) {
        out += `${q.question}\n`;
        if (q.manual) {
            out += "[manual]";
            if (q.imageUrl) out += ` ${q.imageUrl}`;
            out += "\n";
        } else {
            for (const a of q.answers) out += `  ${a}\n`;
        }
        out += "\n---\n\n";
    }
    return out;
}

export function warnMissingNumbers(extracted) {
    const missing = extracted._meta?.missingNumbers;
    if (!missing?.length) return;
    console.warn(`Missing numbers: ${missing.join(", ")}`);
}

export function warnLazyParseFailures(questions) {
    const failed = questions.filter(
        (q) => q.missingAnswers && (!q.answers || q.answers.length === 0) && !q.imageUrl,
    );
    if (!failed.length) return;
    console.warn(`Parse failures (${failed.length}):`);
    for (const q of failed) console.warn(`  ${q.question.slice(0, 72)}…`);
}

export function warnValidation(problems) {
    if (!problems.length) return;
    console.warn("Validation:");
    for (const p of problems) console.warn(`  ${p}`);
}

export function countManual(questions) {
    return questions.filter((q) => q.manual).length;
}

export function totalQuestions(payload) {
    if (Array.isArray(payload)) return payload.length;
    return Object.values(payload).reduce((n, qs) => n + qs.length, 0);
}

export function totalManual(payload) {
    if (Array.isArray(payload)) return countManual(payload);
    return Object.values(payload).reduce((n, qs) => n + countManual(qs), 0);
}

export async function ensureOutputDir() {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
}

export async function saveJson(outputPath, data) {
    await fs.writeFile(outputPath, JSON.stringify(data, null, 2));
}

export async function runPaginatedScrape({
    page,
    startUrl,
    maxPages,
    delayMs,
    extractFn,
    waitSelector,
    preparePage,
    toEntry,
    headingForEntry,
}) {
    const entries = [];
    let currentUrl = startUrl;
    let pageCount = 0;

    while (pageCount < maxPages) {
        pageCount++;
        console.log(`\n[${pageCount}] ${currentUrl}`);

        await page.goto(currentUrl, { waitUntil: "networkidle2", timeout: 120000 });
        if (waitSelector) {
            await page.waitForSelector(waitSelector, { timeout: 30000 }).catch(() => {});
        }
        await preparePage(page);

        const extracted = await page.evaluate(extractFn);
        warnMissingNumbers(extracted);
        const entry = toEntry(extracted);

        if (!entry) {
            console.warn("Could not parse page key.");
        } else if (!entry.questions.length) {
            console.warn(`[${entry.key}] No questions.`);
        } else {
            const manual = countManual(entry.questions);
            console.log(
                `[${entry.key}] ${entry.questions.length} questions` +
                    (manual ? ` (${manual} manual)` : ""),
            );
            console.log(formatQuestions(entry.questions, headingForEntry(entry)));
            entries.push(entry);
        }

        if (!extracted.nextUrl) {
            console.log("\nDone.");
            break;
        }
        if (pageCount >= maxPages) {
            console.log(`\nMax pages (${maxPages}).`);
            break;
        }

        console.log(`Next: ${extracted.nextUrl}`);
        await new Promise((r) => setTimeout(r, delayMs));
        currentUrl = extracted.nextUrl;
    }

    return entries;
}
