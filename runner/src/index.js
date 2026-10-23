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

import { isRunnerActive, restartRunner, startRunner, stopRunner } from './runner-api.js';

window.__netacadRunner = {
    start: startRunner,
    stop: stopRunner,
    isRunning: isRunnerActive,
    restart: restartRunner,
};

window.autoRunnerRestart = () => {
    if (isRunnerActive()) restartRunner();
};

if (!window.__NETACAD_EXTENSION) {
    startRunner();
}
