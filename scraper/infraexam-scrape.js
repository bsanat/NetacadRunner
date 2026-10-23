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

import {
    buildKeyedOutput,
    ensureOutputDir,
    getOutputPath,
    launchBrowser,
    parseBrowserArgs,
    preparePageForExtract,
    saveJson,
    totalQuestions,
} from "./shared.js";
import { extractInfraExamQuestions } from "./infraexam-extract.js";

const DEFAULT_URL =
    "https://infraexam.com/python-institute/pe2-python-essentials-2-intermediate/pe2-python-essentials-2-module-1-test/";

const HELP = `Usage: node scraper/infraexam-scrape.js --url URL [--executable PATH]`;

const opts = parseBrowserArgs(process.argv, { url: DEFAULT_URL, maxPages: 1, delayMs: 1500 });
if (!opts) {
    console.log(HELP);
    process.exit(0);
}

await ensureOutputDir();
const outputPath = getOutputPath("infraexam-modules");

const browser = await launchBrowser(opts.executablePath);
const page = await browser.newPage();

try {
    const startModule = (() => {
        const m = String(opts.url).match(/module-(\d+)-test/i);
        return m ? parseInt(m[1], 10) : 1;
    })();

    const MODULE_COUNT = 1;
    const entries = [];

    for (let moduleNum = startModule; moduleNum <= MODULE_COUNT; moduleNum++) {
        const moduleUrl = String(opts.url).replace(/module-\d+-test/i, `module-${moduleNum}-test`);
        console.log(`\n[Module ${moduleNum}] ${moduleUrl}`);

        await page.goto(moduleUrl, { waitUntil: "networkidle2", timeout: 120000 });

        await page.waitForSelector("ol > li h3, .thecontent, .entry-content", {
            timeout: 30000,
        });

        await preparePageForExtract(page);

        const extracted = await page.evaluate(extractInfraExamQuestions);
        const questions = extracted?.questions || [];
        entries.push({ key: `module-${moduleNum}`, questions });
        console.log(`Extracted questions: ${questions.length}`);
    }

    const payload = buildKeyedOutput(entries);
    await saveJson(outputPath, payload);

    console.log("\nSummary");
    console.log("Modules:", Object.keys(payload).join(", ") || "(none)");
    console.log("Questions:", totalQuestions(payload));
    console.log("Saved:", outputPath);
} catch (err) {
    console.error("Failed:", err?.message || String(err));
    process.exitCode = 1;
} finally {
    await browser.close();
}

