<!--
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
-->

# Netacad-Runner 1.0.3

<img src="extension/icons/icon-128.png" width="80" alt="Netacad-Runner">

Русскоязычная версия расширения для курсов [NetAcad](https://www.netacad.com), основанная на [netacad-automation](https://github.com/yadavsaurabh1/netacad-automation) Saurabh Kumar Yadav. Изменённую версию поддерживает [bsanat](https://github.com/bsanat). Помогает переходить по материалам курса, обрабатывать видео и отвечать на поддерживаемые задания с помощью встроенных баз ответов.

## Установка в Chrome

1. На странице [bsanat/NetacadRunner](https://github.com/bsanat/NetacadRunner) нажмите **Code → Download ZIP**.
2. Распакуйте ZIP и оставьте распакованную папку на компьютере. Готовые файлы расширения уже включены; сборка для установки не нужна.
3. Откройте `chrome://extensions` и отключите старое расширение NetAcad AutoRunner или прежнюю версию Netacad-Runner, если оно установлено.
4. Включите **Режим разработчика**.
5. Нажмите **Загрузить распакованное расширение** и выберите **только папку `extension`** внутри распакованного проекта. Сам ZIP и корень проекта выбирать не нужно.
6. Откройте курс на `www.netacad.com` и обновите вкладку, чтобы убрать ранее запущенную версию.
7. Откройте Netacad-Runner, выберите курс и нажмите **Запустить**.
8. Для остановки нажмите **Остановить** на открытой вкладке курса.

После обновления файлов нажмите кнопку обновления расширения на `chrome://extensions`, затем обновите вкладку курса.

## Курсы

- CCNA 1 — Введение в сети.
- CCNA 2 — Коммутация, маршрутизация и беспроводные сети.
- CCNA 3 — Корпоративные сети, безопасность и автоматизация.
- Основы Python 1 и 2.
- Основы анализа данных.
- Введение в кибербезопасность.

Выбирайте базу, соответствующую открытому курсу. При смене курса расширение при необходимости перезагрузит вкладку. Базы ответов могут содержать ошибки: расширение отправляет ответы от имени текущего аккаунта.

## Работа с видео

Расширение сначала нажимает Play на обложке, дожидается создания плеера, запускает видео и перематывает на последние 2,5 секунды. Переход дальше происходит после настоящего завершения ролика. Общее время зависит от скорости загрузки.

| Состояние | Что делать |
| --- | --- |
| Обработка видео | Дождитесь завершения обработки плеера. |
| Ожидание видео | Дождитесь загрузки ролика и его длительности. |
| Нажмите Play в плеере | Запустите видео вручную в плеере курса. |
| Видео не загрузилось | Проверьте, открывается ли ролик вручную; при необходимости обновите вкладку курса. |

Если видео не загрузилось или его запуск заблокирован, оно не считается пройденным. Иногда браузеру нужен ручной щелчок по **Play**. Расширение не восстанавливает недоступные ролики или соединение с видеосервисом.

Задания **Packet Tracer** расширение не выполняет. Задания со статусом **Требуется ваше действие** нужно пройти самостоятельно.

## Сборка и проверка

Из корня проекта:

```bash
npm ci
npm run build
npm test
```

`npm run build` собирает браузерный скрипт `runner/auto-runner.js` и файлы расширения. Только расширение можно пересобрать командой `npm run build:extension`. Сборка и тесты не устанавливают расширение и не запускают курс.

Исходный код плеера и навигации находится в `runner/src`, интерфейс и служебный код расширения — в `extension`. Подробности установки: [extension/README.md](extension/README.md).

## Лицензия и авторство

Исходный проект: [yadavsaurabh1/netacad-automation](https://github.com/yadavsaurabh1/netacad-automation). Copyright (C) 2026 Saurabh Kumar Yadav. Исходные уведомления об авторстве сохранены.

Поддержка изменённой версии Netacad-Runner: [bsanat](https://github.com/bsanat).

Netacad-Runner распространяется на условиях **GNU GPL v3 или более поздней версии**. Полный текст: [LICENSE](LICENSE). При распространении изменённой версии сохраняйте уведомления об авторстве и лицензию, а также предоставляйте соответствующий исходный код согласно GPL.
