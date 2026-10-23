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

/**
 * NetAcad browser probe: comprehensive fingerprinting + full action logging.
 * Priority: JS chunk/script load & execution timeline via CDP + Performance API.
 *
 * Usage: npm run probe
 * Outputs: logs/netacad-*.jsonl, logs/netacad-fingerprint.json, logs/netacad-scripts.json
 */

import puppeteer from "puppeteer-core";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOG_DIR = path.join(__dirname, "..", "logs");
const TARGET_URL = "https://www.netacad.com/";
const SESSION_ID = new Date().toISOString().replace(/[:.]/g, "-");

const t0 = performance.now();
const rel = () => `${(performance.now() - t0).toFixed(2)}ms`;

// --- Logger (console + JSONL) ---
let logStream = null;

async function initLogs() {
    await fs.mkdir(LOG_DIR, { recursive: true });
    const logPath = path.join(LOG_DIR, `netacad-${SESSION_ID}.jsonl`);
    logStream = logPath;
    await fs.writeFile(logPath, "");
    return logPath;
}

async function log(category, data = {}) {
    const entry = { t: rel(), ts: Date.now(), category, ...data };
    const line = JSON.stringify(entry);
    console.log(`[${entry.t}] ${category}`, data.msg ?? data.url ?? data.name ?? "");
    if (logStream) {
        await fs.appendFile(logStream, line + "\n");
    }
    return entry;
}

function shortUrl(url) {
    try {
        const u = new URL(url);
        const p = u.pathname;
        return p.length > 80 ? "…" + p.slice(-77) : p || u.hostname;
    } catch {
        return String(url).slice(0, 80);
    }
}

function isJsUrl(url) {
    if (!url) return false;
    const lower = url.toLowerCase();
    return (
        lower.endsWith(".js") ||
        lower.includes(".js?") ||
        lower.includes("/chunk") ||
        lower.includes("webpack") ||
        lower.includes("_next/static") ||
        lower.includes("bundle")
    );
}

function chunkLabel(url) {
    if (!url) return "inline";
    const m = url.match(/([^/]+\.js(?:\?[^/]*)?)$/i);
    return m ? m[1] : shortUrl(url);
}

// --- In-page hooks (runs before any page script) ---
const INJECT_HOOKS = () => {
    const win = window;
    const push = (type, detail) => {
        win.__probeEvents = win.__probeEvents || [];
        win.__probeEvents.push({
            t: performance.now(),
            type,
            ...detail,
        });
        if (win.__probeEvents.length > 5000) win.__probeEvents.shift();
    };

    // PerformanceObserver: script/resource timing
    try {
        const po = new PerformanceObserver((list) => {
            for (const e of list.getEntries()) {
                if (e.entryType === "resource" && e.initiatorType === "script") {
                    push("perf_script", {
                        name: e.name,
                        start: e.startTime,
                        duration: e.duration,
                        transferSize: e.transferSize,
                        encodedBodySize: e.encodedBodySize,
                    });
                }
                if (e.entryType === "longtask") {
                    push("longtask", { duration: e.duration, start: e.startTime });
                }
            }
        });
        po.observe({ entryTypes: ["resource", "longtask"], buffered: true });
    } catch (_) {}

    // Hook script element creation / src assignment
    const desc = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, "src");
    if (desc?.set) {
        Object.defineProperty(HTMLScriptElement.prototype, "src", {
            get: desc.get,
            set(v) {
                push("script_src_set", { src: String(v) });
                return desc.set.call(this, v);
            },
            configurable: true,
        });
    }
    const origAppend = Element.prototype.appendChild;
    Element.prototype.appendChild = function (child, ...rest) {
        if (child?.tagName === "SCRIPT") {
            push("script_append", { src: child.src || "(inline)" });
        }
        return origAppend.call(this, child, ...rest);
    };

    // fetch / XHR
    const origFetch = win.fetch;
    win.fetch = (...args) => {
        push("fetch", { url: String(args[0]) });
        return origFetch.apply(win, args);
    };
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url, ...rest) {
        push("xhr", { method, url: String(url) });
        return origOpen.call(this, method, url, ...rest);
    };

    // console (mirrored to probe events)
    ["log", "warn", "error", "info", "debug"].forEach((level) => {
        const orig = console[level].bind(console);
        console[level] = (...args) => {
            push("console", {
                level,
                msg: args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" "),
            });
            return orig(...args);
        };
    });
};

// --- Fingerprint collector (runs in page after load) ---
const COLLECT_FINGERPRINT = async () => {
    const hash = (s) => {
        let h = 0;
        for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
        return (h >>> 0).toString(16);
    };

    const fp = { collectedAt: new Date().toISOString() };

    // Navigator
    const nav = navigator;
    fp.navigator = {
        userAgent: nav.userAgent,
        platform: nav.platform,
        vendor: nav.vendor,
        language: nav.language,
        languages: [...nav.languages],
        hardwareConcurrency: nav.hardwareConcurrency,
        deviceMemory: nav.deviceMemory,
        maxTouchPoints: nav.maxTouchPoints,
        cookieEnabled: nav.cookieEnabled,
        doNotTrack: nav.doNotTrack,
        pdfViewerEnabled: nav.pdfViewerEnabled,
        webdriver: nav.webdriver,
        globalPrivacyControl: nav.globalPrivacyControl,
        productSub: nav.productSub,
        vendorSub: nav.vendorSub,
        appVersion: nav.appVersion,
        appName: nav.appName,
        appCodeName: nav.appCodeName,
        oscpu: nav.oscpu,
        buildID: nav.buildID,
    };

    if (nav.userAgentData) {
        try {
            fp.userAgentData = await nav.userAgentData.getHighEntropyValues([
                "architecture",
                "bitness",
                "model",
                "platformVersion",
                "fullVersionList",
                "wow64",
                "formFactors",
            ]);
            fp.userAgentDataBrands = nav.userAgentData.brands;
            fp.userAgentDataMobile = nav.userAgentData.mobile;
            fp.userAgentDataPlatform = nav.userAgentData.platform;
        } catch (e) {
            fp.userAgentDataError = String(e);
        }
    }

    fp.plugins = [...nav.plugins].map((p) => ({
        name: p.name,
        description: p.description,
        filename: p.filename,
        length: p.length,
    }));
    fp.mimeTypes = [...nav.mimeTypes].map((m) => ({
        type: m.type,
        description: m.description,
        suffixes: m.suffixes,
    }));

    // Screen / window
    fp.screen = {
        width: screen.width,
        height: screen.height,
        availWidth: screen.availWidth,
        availHeight: screen.availHeight,
        colorDepth: screen.colorDepth,
        pixelDepth: screen.pixelDepth,
        orientation: screen.orientation?.type,
        devicePixelRatio: window.devicePixelRatio,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
        screenX: window.screenX,
        screenY: window.screenY,
    };

    // Timezone / Intl
    fp.intl = {
        timezone: Intl.DateTimeFormat().resolvedOptions(),
        numberFormat: Intl.NumberFormat().resolvedOptions(),
        collator: Intl.Collator().resolvedOptions(),
        supportedValuesOf: typeof Intl.supportedValuesOf === "function"
            ? { timeZone: Intl.supportedValuesOf("timeZone").slice(0, 20) }
            : null,
    };

    // Connection
    if (nav.connection) {
        fp.connection = {
            effectiveType: nav.connection.effectiveType,
            downlink: nav.connection.downlink,
            rtt: nav.connection.rtt,
            saveData: nav.connection.saveData,
            type: nav.connection.type,
        };
    }

    // Battery
    if (nav.getBattery) {
        try {
            const b = await nav.getBattery();
            fp.battery = {
                charging: b.charging,
                level: b.level,
                chargingTime: b.chargingTime,
                dischargingTime: b.dischargingTime,
            };
        } catch (e) {
            fp.batteryError = String(e);
        }
    }

    // Media devices
    try {
        fp.mediaDevices = (await nav.mediaDevices.enumerateDevices()).map((d) => ({
            kind: d.kind,
            label: d.label,
            deviceId: d.deviceId ? hash(d.deviceId) : "",
            groupId: d.groupId ? hash(d.groupId) : "",
        }));
    } catch (e) {
        fp.mediaDevicesError = String(e);
    }

    // Permissions (best-effort)
    const permNames = [
        "geolocation",
        "notifications",
        "camera",
        "microphone",
        "persistent-storage",
        "clipboard-read",
    ];
    fp.permissions = {};
    if (nav.permissions?.query) {
        for (const name of permNames) {
            try {
                const s = await nav.permissions.query({ name });
                fp.permissions[name] = s.state;
            } catch {
                fp.permissions[name] = "unsupported";
            }
        }
    }

    // Storage
    try {
        fp.storage = await nav.storage?.estimate?.();
        fp.storageQuota = await nav.storage?.persisted?.();
    } catch (e) {
        fp.storageError = String(e);
    }

    // Speech
    fp.speechVoices = speechSynthesis.getVoices().map((v) => ({
        name: v.name,
        lang: v.lang,
        localService: v.localService,
        default: v.default,
    }));

    // WebGL
    try {
        const c = document.createElement("canvas");
        const gl =
            c.getContext("webgl") || c.getContext("experimental-webgl");
        if (gl) {
            const dbg = gl.getExtension("WEBGL_debug_renderer_info");
            fp.webgl = {
                vendor: dbg
                    ? gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL)
                    : gl.getParameter(gl.VENDOR),
                renderer: dbg
                    ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)
                    : gl.getParameter(gl.RENDERER),
                version: gl.getParameter(gl.VERSION),
                shadingLanguageVersion: gl.getParameter(
                    gl.SHADING_LANGUAGE_VERSION
                ),
                maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
                extensions: gl.getSupportedExtensions(),
            };
        }
    } catch (e) {
        fp.webglError = String(e);
    }

    // WebGL2
    try {
        const c2 = document.createElement("canvas");
        const gl2 = c2.getContext("webgl2");
        if (gl2) fp.webgl2 = { supported: true };
    } catch {
        fp.webgl2 = { supported: false };
    }

    // Canvas fingerprint
    try {
        const cv = document.createElement("canvas");
        cv.width = 280;
        cv.height = 60;
        const ctx = cv.getContext("2d");
        ctx.textBaseline = "alphabetic";
        ctx.fillStyle = "#f60";
        ctx.fillRect(100, 1, 62, 20);
        ctx.fillStyle = "#069";
        ctx.font = "14px Arial";
        ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15);
        ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
        ctx.font = "18px Times New Roman";
        ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45);
        fp.canvas = { hash: hash(cv.toDataURL()) };
    } catch (e) {
        fp.canvasError = String(e);
    }

    // Audio fingerprint (offline context)
    try {
        const AC =
            window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if (AC) {
            const ctx = new AC(1, 44100, 44100);
            const osc = ctx.createOscillator();
            osc.type = "triangle";
            const comp = ctx.createDynamicsCompressor();
            osc.connect(comp);
            comp.connect(ctx.destination);
            osc.start(0);
            const buf = await new Promise((res, rej) => {
                ctx.oncomplete = (e) => res(e.renderedBuffer);
                ctx.startRendering();
                setTimeout(() => rej(new Error("audio timeout")), 3000);
            });
            const ch = buf.getChannelData(0);
            let sum = 0;
            for (let i = 4500; i < 5000; i++) sum += Math.abs(ch[i]);
            fp.audio = { hash: hash(String(sum)) };
        }
    } catch (e) {
        fp.audioError = String(e);
    }

    // Fonts (document.fonts API sample)
    const testFonts = [
        "Arial",
        "Helvetica",
        "Times New Roman",
        "Courier New",
        "Verdana",
        "Georgia",
        "Comic Sans MS",
        "Impact",
        "Monaco",
        "Menlo",
        "Consolas",
    ];
    fp.fonts = {};
    if (document.fonts?.check) {
        for (const f of testFonts) {
            fp.fonts[f] = document.fonts.check(`12px "${f}"`);
        }
    }

    // CSS / media
    fp.mediaQueries = {
        prefersColorScheme: matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
        prefersReducedMotion: matchMedia("(prefers-reduced-motion: reduce)")
            .matches,
        hover: matchMedia("(hover: hover)").matches,
        pointer: matchMedia("(pointer: fine)").matches ? "fine" : "coarse",
    };

    // Math / engine quirks
    fp.math = {
        tan: Math.tan(-1e300),
        acos: Math.acos(0.123),
        sin: Math.sin(1),
        cos: Math.cos(1),
    };

    // Automation / bot signals
    fp.automation = {
        webdriver: nav.webdriver,
        chromeRuntime: !!window.chrome?.runtime,
        chromeApp: !!window.chrome?.app,
        phantom: !!window._phantom || !!window.callPhantom,
        nightmare: !!window.__nightmare,
        selenium: !!document.__selenium_unwrapped || !!window.document.$cdc_asdjflasutopfhvcZLmcfl_,
        domAutomation: !!window.domAutomation || !!window.domAutomationController,
        puppeteerProbe: !!window.__probeEvents,
    };

    // WebRTC (local IP leak attempt)
    try {
        const rtc = await new Promise((resolve) => {
            const ips = new Set();
            const pc = new RTCPeerConnection({ iceServers: [] });
            pc.createDataChannel("");
            pc.createOffer().then((o) => pc.setLocalDescription(o));
            pc.onicecandidate = (e) => {
                if (!e.candidate) {
                    pc.close();
                    resolve([...ips]);
                    return;
                }
                const m = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9:]+)/gi.exec(
                    e.candidate.candidate
                );
                if (m) ips.add(m[1]);
            };
            setTimeout(() => {
                pc.close();
                resolve([...ips]);
            }, 2000);
        });
        fp.webrtcLocalCandidates = rtc;
    } catch (e) {
        fp.webrtcError = String(e);
    }

    const jsResource = (name) =>
        /\.js(\?|$)/i.test(name) || /chunk/i.test(name);

    // Performance resource entries (scripts loaded so far)
    fp.scriptResources = performance
        .getEntriesByType("resource")
        .filter(
            (e) => e.initiatorType === "script" || jsResource(e.name)
        )
        .map((e) => ({
            name: e.name,
            startTime: e.startTime,
            duration: e.duration,
            transferSize: e.transferSize,
        }));

    // Probe events captured in-page
    fp.probeEvents = (window.__probeEvents || []).slice(-500);

    return fp;
};

// --- Main ---
const logPath = await initLogs();
await log("session", { msg: "Starting NetAcad probe", logPath, target: TARGET_URL });

const browser = await puppeteer.launch({
    executablePath:
        "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
    headless: false,
    defaultViewport: null,
    args: [
        "--start-maximized",
        "--disable-blink-features=AutomationControlled",
    ],
});

const page = await browser.newPage();
const client = await page.createCDPSession();

// Script timeline (primary output)
const scriptTimeline = [];
const scriptById = new Map();
const networkScripts = new Map();

function addScriptEvent(phase, data) {
    const ev = { t: rel(), phase, ...data };
    scriptTimeline.push(ev);
    return ev;
}

// CDP domains
await client.send("Debugger.enable");
await client.send("Network.enable", {
    maxResourceBufferSize: 1024 * 1024,
    maxTotalBufferSize: 5 * 1024 * 1024,
});
await client.send("Performance.enable");
await client.send("Runtime.enable");
await client.send("Log.enable");
await client.send("DOM.enable");

// --- CDP: script parse / execution context (JS chunks) ---
client.on("Debugger.scriptParsed", (p) => {
    const label = chunkLabel(p.url);
    scriptById.set(p.scriptId, {
        url: p.url,
        label,
        hash: p.hash,
        length: p.length,
        parsedAt: rel(),
    });
    const ev = addScriptEvent("parsed", {
        scriptId: p.scriptId,
        url: p.url,
        label,
        hash: p.hash,
        length: p.length,
        startLine: p.startLine,
        startColumn: p.startColumn,
        isModule: p.isModule,
        hasSourceURL: p.hasSourceURL,
    });
    log("js_parsed", {
        label,
        url: p.url,
        length: p.length,
        scriptId: p.scriptId,
    });
});

client.on("Debugger.scriptFailedToLoad", (p) => {
    addScriptEvent("failed", { scriptId: p.scriptId, url: p.url });
    log("js_failed", { url: p.url, scriptId: p.scriptId });
});

client.on("Runtime.executionContextCreated", (p) => {
    log("exec_context", {
        id: p.context.id,
        name: p.context.name,
        origin: p.context.origin,
        aux: p.context.auxData,
    });
});

client.on("Runtime.consoleAPICalled", (p) => {
    const args = p.args?.map((a) => a.value ?? a.description ?? a.type) ?? [];
    log("cdp_console", { type: p.type, args: args.join(" ") });
});

// Network: JS download timing
client.on("Network.requestWillBeSent", (p) => {
    const url = p.request?.url;
    if (!isJsUrl(url)) return;
    const id = p.requestId;
    networkScripts.set(id, {
        url,
        label: chunkLabel(url),
        requestedAt: rel(),
        ts: Date.now(),
    });
    log("js_request", { label: chunkLabel(url), url, requestId: id });
});

client.on("Network.responseReceived", (p) => {
    const url = p.response?.url;
    if (!isJsUrl(url) && p.type !== "Script") return;
    const rec = networkScripts.get(p.requestId) || { url, label: chunkLabel(url) };
    rec.responseAt = rel();
    rec.status = p.response.status;
    rec.mimeType = p.response.mimeType;
    rec.fromDiskCache = p.response.fromDiskCache;
    rec.fromServiceWorker = p.response.fromServiceWorker;
    networkScripts.set(p.requestId, rec);
    addScriptEvent("response", {
        requestId: p.requestId,
        url,
        label: chunkLabel(url),
        status: p.response.status,
        mimeType: p.response.mimeType,
    });
    log("js_response", {
        label: chunkLabel(url),
        status: p.response.status,
        fromCache: p.response.fromDiskCache,
    });
});

client.on("Network.loadingFinished", (p) => {
    const rec = networkScripts.get(p.requestId);
    if (!rec) return;
    rec.loadedAt = rel();
    rec.encodedDataLength = p.encodedDataLength;
    addScriptEvent("loaded", {
        requestId: p.requestId,
        url: rec.url,
        label: rec.label,
        encodedDataLength: p.encodedDataLength,
        requestedAt: rec.requestedAt,
        responseAt: rec.responseAt,
        loadedAt: rec.loadedAt,
    });
    log("js_loaded", {
        label: rec.label,
        bytes: p.encodedDataLength,
        totalMs: rec.requestedAt && rec.loadedAt
            ? `${rec.requestedAt} → ${rec.loadedAt}`
            : rec.loadedAt,
    });
});

client.on("Network.loadingFailed", (p) => {
    const rec = networkScripts.get(p.requestId);
    if (rec) {
        addScriptEvent("load_failed", {
            requestId: p.requestId,
            url: rec.url,
            errorText: p.errorText,
        });
        log("js_load_failed", { label: rec.label, error: p.errorText });
    }
});

client.on("Log.entryAdded", (p) => {
    log("browser_log", {
        source: p.entry.source,
        level: p.entry.level,
        text: p.entry.text,
        url: p.entry.url,
    });
});

// --- Puppeteer page events ---
page.on("console", (msg) => {
    log("page_console", {
        type: msg.type(),
        text: msg.text(),
        location: msg.location(),
    });
});

page.on("request", (req) => {
    log("request", {
        method: req.method(),
        url: req.url(),
        resourceType: req.resourceType(),
    });
});

page.on("response", (res) => {
    const req = res.request();
    log("response", {
        url: req.url(),
        status: res.status(),
        resourceType: req.resourceType(),
    });
});

page.on("requestfinished", (req) => {
    if (req.resourceType() === "script" || isJsUrl(req.url())) {
        log("request_finished", { url: req.url(), resourceType: "script" });
    }
});

page.on("requestfailed", (req) => {
    log("request_failed", {
        url: req.url(),
        failure: req.failure()?.errorText,
    });
});

page.on("framenavigated", (frame) => {
    log("navigate", { url: frame.url(), main: frame === page.mainFrame() });
});

page.on("domcontentloaded", () => log("dom", { msg: "DOMContentLoaded" }));
page.on("load", () => log("load", { msg: "load event" }));

page.on("dialog", async (dialog) => {
    log("dialog", { type: dialog.type(), message: dialog.message() });
    await dialog.dismiss();
});

page.on("popup", (p) => log("popup", { url: p.url() }));

page.on("workercreated", (w) => log("worker", { url: w.url(), action: "created" }));
page.on("workerdestroyed", (w) => log("worker", { url: w.url(), action: "destroyed" }));

// Inject hooks before navigation
await page.evaluateOnNewDocument(INJECT_HOOKS);

// JS coverage (which scripts actually executed)
await page.coverage.startJSCoverage({
    resetOnNavigation: false,
    includeRawScriptCoverage: false,
});

await log("goto", { msg: `Navigating to ${TARGET_URL}` });
await page.goto(TARGET_URL, { waitUntil: "networkidle2", timeout: 120000 });
await log("goto_done", { msg: "networkidle2 reached" });

// Poll in-page probe events while page settles
for (let i = 0; i < 6; i++) {
    await new Promise((r) => setTimeout(r, 2000));
    const events = await page.evaluate(() => window.__probeEvents || []).catch(() => []);
    for (const e of events.slice(-30)) {
        if (e.type === "perf_script" || e.type === "dynamic_import" || e.type === "script_src_set") {
            addScriptEvent("probe_" + e.type, {
                pageT: `${e.t?.toFixed(2)}ms`,
                ...e,
            });
            log("probe", { type: e.type, name: e.name || e.src || e.specifier });
        }
    }
}

// Stop coverage — shows executed ranges per URL
const coverage = await page.coverage.stopJSCoverage();
const coverageSummary = coverage
    .filter((e) => e.url && (isJsUrl(e.url) || e.text?.length))
    .map((e) => ({
        url: e.url,
        label: chunkLabel(e.url),
        ranges: e.ranges?.length ?? 0,
        usedBytes: e.ranges?.reduce((s, r) => s + (r.end - r.start), 0) ?? 0,
    }))
    .sort((a, b) => b.usedBytes - a.usedBytes);

for (const c of coverageSummary.slice(0, 40)) {
    addScriptEvent("executed", c);
    log("js_executed", { label: c.label, usedBytes: c.usedBytes, ranges: c.ranges });
}

// Fingerprint
await log("fingerprint", { msg: "Collecting fingerprint…" });
const fingerprint = await page.evaluate(COLLECT_FINGERPRINT);

// Hash full fingerprint for quick compare
const fpHash = createHash("sha256")
    .update(JSON.stringify(fingerprint.navigator))
    .digest("hex")
    .slice(0, 16);
fingerprint.summaryHash = fpHash;

// Write structured outputs
const scriptsPath = path.join(LOG_DIR, `netacad-scripts-${SESSION_ID}.json`);
const fpPath = path.join(LOG_DIR, `netacad-fingerprint-${SESSION_ID}.json`);

await fs.writeFile(
    scriptsPath,
    JSON.stringify(
        {
            sessionId: SESSION_ID,
            target: TARGET_URL,
            timeline: scriptTimeline,
            parsedScripts: [...scriptById.values()],
            networkScripts: [...networkScripts.values()],
            coverage: coverageSummary,
        },
        null,
        2
    )
);

await fs.writeFile(fpPath, JSON.stringify(fingerprint, null, 2));

await log("done", {
    msg: "Probe complete",
    scriptsPath,
    fpPath,
    fingerprintHash: fpHash,
    scriptEvents: scriptTimeline.length,
});

console.log("\n=== SUMMARY ===");
console.log("Log:", logPath);
console.log("Scripts timeline:", scriptsPath);
console.log("Fingerprint:", fpPath);
console.log("Fingerprint hash:", fpHash);
console.log("JS events logged:", scriptTimeline.length);
console.log("\nTop executed chunks:");
console.table(coverageSummary.slice(0, 15));

// Keep browser open for manual inspection
console.log("\nBrowser left open. Close manually or Ctrl+C to exit.");
