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

import * as esbuild from 'esbuild';
import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { LICENSE_HEADER } from './license-header.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const extDir = join(root, 'extension');
const dataDir = join(extDir, 'data');

mkdirSync(dataDir, { recursive: true });

for (const course of ['ccna1', 'ccna2', 'ccna3', 'python1', 'python2', 'data', 'cybersecurity']) {
    cpSync(
        join(root, 'data', `variables_${course}.js`),
        join(dataDir, `variables_${course}.js`),
    );
}

await esbuild.build({
    entryPoints: [join(root, 'runner', 'src', 'index.js')],
    bundle: true,
    outfile: join(extDir, 'runner.js'),
    format: 'iife',
    platform: 'browser',
    target: ['chrome100', 'firefox100', 'safari15'],
    legalComments: 'none',
    banner: {
        js: `${LICENSE_HEADER}\nwindow.__NETACAD_EXTENSION=true;`,
    },
});

const runnerOut = join(extDir, 'runner.js');
writeFileSync(
    runnerOut,
    readFileSync(runnerOut, 'utf8').replace(/^\s*\/\/ runner\/src\/.*\n/gm, ''),
);

console.log('Built extension/ (runner.js + data/)');
