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

let lastText = '';
let lastAt = 0;

export function setStatus(text) {
    const t = String(text || '').trim();
    if (!t) return;
    const now = Date.now();
    if (t === lastText && now - lastAt < 600) return;
    lastText = t;
    lastAt = now;
    if (typeof window.__netacadSetStatus === 'function') {
        window.__netacadSetStatus(t);
    }
}

export function resetStatusThrottle() {
    lastText = '';
    lastAt = 0;
}
