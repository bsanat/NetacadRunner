#!/usr/bin/env node
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


import { extractExamAnswers } from "./exam-extract.js";
import {
    buildKeyedOutput,
    ensureOutputDir,
    getOutputPath,
    launchBrowser,
    parseBrowserArgs,
    parseModuleId,
    preparePageForExtract,
    runPaginatedScrape,
    sanitizeQuestion,
    saveJson,
    totalManual,
    totalQuestions,
    validatePayload,
    warnLazyParseFailures,
    warnValidation,
} from "./shared.js";

const DEFAULT_URL =
    "https://itexamanswers.net/1-6-4-module-quiz-basic-device-configuration-answers.html";

const HELP = `Usage: node scraper/quiz-scrape.js [--url URL] [--max-pages N] [--delay MS] [--executable PATH]`;

const opts = parseBrowserArgs(process.argv, { url: DEFAULT_URL });
if (!opts) {
    console.log(HELP);
    process.exit(0);
}

await ensureOutputDir();
const outputPath = getOutputPath("quiz");
const browser = await launchBrowser(opts.executablePath);
const page = await browser.newPage();
const entries = [];

try {
    const scraped = await runPaginatedScrape({
        page,
        startUrl: opts.url,
        maxPages: opts.maxPages,
        delayMs: opts.delayMs,
        extractFn: extractExamAnswers,
        waitSelector: 'p > strong, .thecontent > strong, ul[style*="content-visibility"]',
        preparePage: preparePageForExtract,
        toEntry: (extracted) => {
            warnLazyParseFailures(extracted.questions);
            const key = parseModuleId(extracted.title, extracted.url);
            if (!key) return null;
            return { key, questions: extracted.questions.map(sanitizeQuestion) };
        },
        headingForEntry: (entry) => entry.key,
    });
    entries.push(...scraped);

    const payload = buildKeyedOutput(entries);
    warnValidation(validatePayload(payload));
    await saveJson(outputPath, payload);

    console.log("\nSummary");
    console.log("Quizzes:", Object.keys(payload).join(", ") || "(none)");
    console.log("Questions:", totalQuestions(payload));
    console.log("Manual:", totalManual(payload));
    console.log("Saved:", outputPath);
    console.log("Browser open. Ctrl+C to exit.");
} catch (err) {
    console.error("Failed:", err.message);
    if (entries.length) {
        await saveJson(outputPath, buildKeyedOutput(entries));
        console.log("Partial:", outputPath);
    }
    await browser.close();
    process.exit(1);
}
