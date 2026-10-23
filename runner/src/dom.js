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

import { SHADOW_CACHE_MS } from './config.js';

export function getTopDocument() {
    try {
        return window.top.document;
    } catch {
        return document;
    }
}

let shadowRootsCache = { roots: null, rootRef: null, at: 0 };

function collectShadowRoots(node, out, seen) {
    if (!node || seen.has(node)) return;
    seen.add(node);
    out.push(node);
    if (node.shadowRoot) collectShadowRoots(node.shadowRoot, out, seen);
    if (!node.querySelectorAll) return;
    node.querySelectorAll('*').forEach(child => {
        if (child.shadowRoot) collectShadowRoots(child.shadowRoot, out, seen);
    });
}

function getSearchRoots(root = document) {
    const now = Date.now();
    if (shadowRootsCache.roots && shadowRootsCache.rootRef === root &&
        now - shadowRootsCache.at < SHADOW_CACHE_MS) {
        return shadowRootsCache.roots;
    }
    const roots = [];
    collectShadowRoots(root, roots, new Set());
    shadowRootsCache = { roots, rootRef: root, at: now };
    return roots;
}

export function invalidateShadowCache() {
    shadowRootsCache.roots = null;
}

export function deepQuerySelectorAll(selector, root = document) {
    const results = [];
    const seen = new Set();

    for (const searchRoot of getSearchRoots(root)) {
        if (!searchRoot.querySelectorAll) continue;
        for (const el of searchRoot.querySelectorAll(selector)) {
            if (!seen.has(el)) {
                seen.add(el);
                results.push(el);
            }
        }
        if (searchRoot.querySelectorAll) {
            searchRoot.querySelectorAll('iframe').forEach(iframe => {
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
        }
    }
    return results;
}
