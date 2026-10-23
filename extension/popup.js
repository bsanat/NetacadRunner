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

const courseEl = document.getElementById('course');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const stateEl = document.getElementById('state');
const logEl = document.getElementById('log');
const hintEl = document.getElementById('hint');

const STATUS_LABELS = {
    Idle: 'Ожидание',
    Running: 'Работает',
    Stopped: 'Остановлено',
    Error: 'Ошибка',
    'Bad tab': 'Откройте вкладку NetAcad',
    'Bad course': 'Выберите курс',
    'No data': 'Нет базы ответов',
    'Find frame': 'Поиск окна курса',
    Reload: 'Перезагрузка вкладки',
    Click: 'Открытие элемента',
    Video: 'Обработка видео',
    'Video waiting': 'Ожидание видео',
    'Video error': 'Видео не загрузилось',
    'Video blocked': 'Нажмите Play в плеере',
    Check: 'Проверка',
    Done: 'Завершено',
    Start: 'Запуск задания',
    Submit: 'Отправка ответа',
    Scroll: 'Прокрутка',
    Quiz: 'Тест',
    Manual: 'Требуется ваше действие',
    Answer: 'Выбор ответа',
    Next: 'Переход далее',
};

function statusLabel(status) {
    return STATUS_LABELS[status] || 'Неизвестное состояние';
}

function showError(text) {
    hintEl.textContent = text;
    hintEl.classList.remove('hidden');
}

function renderLog(entries) {
    logEl.innerHTML = '';
    const items = entries.length ? entries : ['Idle'];
    for (const text of items) {
        const li = document.createElement('li');
        li.textContent = statusLabel(text);
        logEl.appendChild(li);
    }
}

function setUi(running, lastStatus) {
    startBtn.disabled = running;
    stopBtn.disabled = !running;
    courseEl.disabled = running;

    stateEl.classList.remove('off', 'err');
    if (['Error', 'Bad tab', 'Bad course', 'No data', 'Video error', 'Video blocked'].includes(lastStatus)) {
        stateEl.classList.add('err');
        stateEl.textContent = statusLabel(lastStatus);
    } else if (running) {
        stateEl.textContent = statusLabel(lastStatus || 'Running');
    } else {
        stateEl.classList.add('off');
        stateEl.textContent = statusLabel(lastStatus || 'Idle');
    }
}

async function loadState() {
    try {
        const data = await chrome.storage.local.get(['course', 'running', 'lastStatus', 'statusLog']);
        if (data.course) courseEl.value = data.course;
        renderLog(data.statusLog || []);
        setUi(!!data.running, data.lastStatus);
    } catch {
        setUi(false, 'Error');
        showError('Не удалось прочитать состояние расширения. Откройте его снова.');
    }
}

chrome.storage.onChanged.addListener((_changes, area) => {
    if (area !== 'local') return;
    loadState();
});

courseEl.addEventListener('change', () => {
    chrome.storage.local.set({ course: courseEl.value }).catch(() => {
        showError('Не удалось сохранить выбранный курс. Повторите попытку.');
    });
});

startBtn.addEventListener('click', async () => {
    const course = courseEl.value;
    hintEl.classList.add('hidden');
    startBtn.disabled = true;

    try {
        await chrome.storage.local.set({ course });
        const res = await chrome.runtime.sendMessage({ type: 'start', course });
        if (!res?.ok) showError(res?.error || 'Не удалось запустить. Обновите вкладку курса и повторите попытку.');
    } catch {
        showError('Не удалось запустить. Обновите вкладку курса и повторите попытку.');
    } finally {
        await loadState();
    }
});

stopBtn.addEventListener('click', async () => {
    stopBtn.disabled = true;
    try {
        const res = await chrome.runtime.sendMessage({ type: 'stop' });
        if (!res?.ok) showError(res?.error || 'Не удалось остановить. Откройте вкладку курса и повторите попытку.');
    } catch {
        showError('Не удалось остановить. Откройте вкладку курса и повторите попытку.');
    } finally {
        await loadState();
    }
});

loadState();
