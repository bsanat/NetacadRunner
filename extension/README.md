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

# Расширение Netacad-Runner

Версия 1.0.2 для Chrome, Manifest V3. Русскоязычная версия [netacad-automation](https://github.com/yadavsaurabh1/netacad-automation) для [www.netacad.com](https://www.netacad.com). Изменённую версию поддерживает [bsanat](https://github.com/bsanat).

## Установка

1. На странице [bsanat/Netacad-Runner](https://github.com/bsanat/Netacad-Runner) нажмите **Code → Download ZIP** и распакуйте архив. Готовое расширение включено в репозиторий; сборка для установки не нужна.
2. Отключите прежнее расширение NetAcad AutoRunner или старую версию Netacad-Runner на `chrome://extensions`.
3. Включите **Режим разработчика**.
4. Нажмите **Загрузить распакованное расширение** и выберите **только эту папку `extension`**. Сам ZIP и корень проекта выбирать не нужно. Не удаляйте распакованную папку после установки.
5. Откройте и обновите вкладку курса на `www.netacad.com`.
6. Откройте Netacad-Runner, выберите курс и нажмите **Запустить**.

Кнопка **Остановить** останавливает обработку курса. Для её использования активной должна быть вкладка NetAcad. После замены файлов обновите расширение и вкладку курса. При смене курса расширение может перезагрузить вкладку для загрузки другой базы ответов.

## Интерфейс

- **Курс** — база ответов для открытого курса: CCNA 1–3, основы Python 1–2, анализ данных или введение в кибербезопасность.
- **Запустить** — загружает выбранную базу и запускает обработку курса.
- **Остановить** — останавливает обработку.
- **Журнал действий** — последние восемь состояний: прокрутка, тест, проверка, отправка ответа, видео и переход далее.

При статусе **Нажмите Play в плеере** запустите ролик вручную. **Видео не загрузилось** означает, что ролик не считается пройденным. Проверьте его загрузку в самом курсе. Задания Packet Tracer нужно выполнять самостоятельно.

## Сборка

Из корня проекта:

```bash
npm ci
npm run build:extension
npm test
```

Команда сборки копирует базы из `data` в `extension/data` и собирает `extension/runner.js`. Она не устанавливает расширение в браузер.

## Разрешения

- `activeTab` и `scripting` — запуск скрипта в активной вкладке NetAcad.
- `storage` — выбранный курс и журнал действий.
- Доступ к `netacad.com` и его поддоменам — работа со страницей курса.
- `downloads` — отмена загрузок, вызываемых автоматическими переходами во время работы.

## Лицензия

Copyright (C) 2026 Saurabh Kumar Yadav. Основано на [netacad-automation](https://github.com/yadavsaurabh1/netacad-automation). Уведомления об авторстве сохранены; лицензия — [GNU GPL v3 или более поздняя версия](../LICENSE).

Поддержка изменённой версии Netacad-Runner: [bsanat](https://github.com/bsanat).
