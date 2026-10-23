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

export function findCourseIframe() {
    let iframe = document.querySelector('iframe[title="Course content"]');
    if (iframe) return iframe;

    for (const topFrame of document.querySelectorAll('iframe')) {
        try {
            const innerDoc = topFrame.contentDocument || topFrame.contentWindow.document;
            const nestedFrame = innerDoc.querySelector('iframe[title="Course content"]') ||
                innerDoc.querySelector('.fullscreen iframe');
            if (nestedFrame) return nestedFrame;
        } catch {}
    }
    return null;
}
