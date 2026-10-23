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

const GUARD_KEY = '__netacadDownloadGuardInstalled';

const DOWNLOAD_EXT_RE = /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|zip|rar|csv|txt|rtf|7z|tar|gz)(\?|#|$)/i;

export function isDownloadNavigation(href, el) {
    if (!href || href === '#' || href.startsWith('javascript:')) return false;
    if (el?.download) return true;
    if (/^blob:|^data:/i.test(href)) return true;
    return DOWNLOAD_EXT_RE.test(href);
}

function isDownloadButton(el) {
    if (!el?.closest) return false;
    const btn = el.closest('button, a[download]');
    if (!btn) return false;
    if (btn.matches?.('.download-button, #download-btn, [icon="download"]')) return true;
    if (btn.querySelector?.('.fa-download, .fa.fa-download')) return true;
    const text = (btn.textContent || '').trim();
    if (/^download\b/i.test(text)) return true;
    return false;
}

function shouldBlockEventTarget(target) {
    if (isDownloadButton(target)) return true;
    const anchor = target?.closest?.('a[href], a[download]');
    if (!anchor) return false;
    const href = anchor.getAttribute('href') || anchor.href || '';
    return isDownloadNavigation(href, anchor);
}

export function installPageDownloadGuard(win) {
    if (!win?.document || win[GUARD_KEY]) return;
    win[GUARD_KEY] = true;

    const doc = win.document;

    const blockEvent = (e) => {
        if (shouldBlockEventTarget(e.target)) {
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    };

    for (const type of ['click', 'mousedown', 'mouseup', 'pointerdown', 'pointerup', 'auxclick']) {
        doc.addEventListener(type, blockEvent, true);
    }

    const origOpen = win.open;
    win.open = function patchedOpen(url, ...rest) {
        if (typeof url === 'string' && isDownloadNavigation(url, null)) return null;
        return origOpen.call(win, url, ...rest);
    };

    const origAssign = win.location.assign?.bind(win.location);
    const origReplace = win.location.replace?.bind(win.location);
    if (origAssign) {
        win.location.assign = (url) => {
            if (typeof url === 'string' && isDownloadNavigation(url, null)) return;
            return origAssign(url);
        };
    }
    if (origReplace) {
        win.location.replace = (url) => {
            if (typeof url === 'string' && isDownloadNavigation(url, null)) return;
            return origReplace(url);
        };
    }

    const anchorClickDesc = Object.getOwnPropertyDescriptor(HTMLAnchorElement.prototype, 'click');
    const origAnchorClick = anchorClickDesc?.value;
    if (origAnchorClick) {
        HTMLAnchorElement.prototype.click = function patchedAnchorClick() {
            const href = this.getAttribute('href') || this.href || '';
            if (isDownloadNavigation(href, this)) return;
            return origAnchorClick.call(this);
        };
    }
}
