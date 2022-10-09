# HTML(Gulp) project template

[Запуск проекта в docker](#start-project-in-docker)

[CI/CD](#ci)

## :fire: Особенности

- именование классов по [БЭМ](https://ru.bem.info/)
- используется БЭМ-структура
- используются препроцессоры [Pug](https://pugjs.org/) и [SCSS](https://sass-lang.com/)
- используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
- используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
- используется жёсткий кодгайд
- используется проверка кода на ошибки перед коммитом

## :trumpet: Установка

- установите [NodeJS](https://nodejs.org/en/) (если требуется) и [Yarn](https://yarnpkg.com/en/docs/install)
- скачайте репозиторий [html-boilerplate](https://bitbucket.org/landauinc-team/html-boilerplate/src/master/)
- установите `gulp` глобально: `yarn global add gulp-cli`
- перейдите в репозиторий
- скачайте необходимые зависимости: `yarn`
- чтобы начать работу, введите команду: `yarn run dev` (режим разработки)
- чтобы собрать проект, введите команду `yarn run build` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером.
Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.

## :open_file_folder: Файловая структура

```
html-boilerplate
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```

- Корень папки:
  - `.babelrc.js` — настройки Babel
  - `.bemrc.js` — настройки БЭМ
  - `.browserslistrc` — настройки поддержки браузеров
  - `.editorconfig` — настройки редактора
  - `.eslintignore` — запрет на отслеживание файлов ESLint'ом
  - `.eslintrc` — настройки ESLint
  - `.gitignore` – запрет на отслеживание файлов Git'ом
  - `.gitlab-ci.yml` — настройки CI/CD для gitlab
  - `.prettierrc` — настройки Prettier
  - `.stylelintrc` — настройки Stylelint
  - `.stylelintignore` – запрет на отслеживание файлов Stylelint'ом
  - `commitlint.config.js` — настройки Commitlint
  - `gulpfile.babel.js` — настройки Gulp
  - `webpack.config.js` — настройки Webpack
  - `tsconfig.json` — настройки TypeScript
  - `package.json` — список зависимостей
- Папка `src` - используется во время разработки:
  - БЭМ-блоки и компоненты: `src/blocks`
  - шрифты: `src/fonts`
  - изображения: `src/img`
  - TS-файлы: `src/ts`
  - страницы сайта: `src/views/pages`
  - SCSS-файлы: `src/styles`
  - служебные Pug-файлы: `src/views`
  - конфигурационный файл веб-сервера Apache с настройками [gzip](https://habr.com/ru/post/221849/) (сжатие без потерь): `src/.htaccess`
- Папка `dist` - папка, из которой запускается локальный сервер для разработки (при запуске `yarn run dev`)
- Папка `gulp-tasks` - папка с Gulp-тасками

## :keyboard: Команды

- `yarn run lint:styles` - проверить SCSS-файлы. Для VSCode необходимо установить [плагин](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint). Для WebStorm
  или PHPStorm необходимо включить Stylelint в `Languages & Frameworks - Style Sheets - Stylelint` (ошибки будут исправлены автоматически при сохранении файла)
- `yarn run lint:styles --fix` - исправить ошибки в SCSS-файлах
- `yarn run lint:scripts` - проверить JS-файлы
- `yarn run lint:scripts --fix` - исправить ошибки в JS-файлах
- `yarn run dev` - запуск сервера для разработки проекта
- `yarn run build` - собрать проект с оптимизацией без запуска сервера
- `yarn run build:views` - скомпилировать Pug-файлы
- `yarn run build:styles` - скомпилировать SCSS-файлы
- `yarn run build:scripts` - собрать JS-файлы
- `yarn run build:images` - собрать изображения
- `yarn run build:webp` - сконвертировать изображения в формат `.webp`
- `yarn run build:sprites`- собрать спрайты
- `yarn run build:fonts` - собрать шрифты
- `yarn run build:favicons` - собрать фавиконки
- `yarn run build:gzip` - собрать конфигурацию Apache
- `yarn storybook` - запуск сторибука
- `yarn build-storybook` - собрать сторибук без запуска сервера

## :bulb: Рекомендации по использованию

### Компонентный подход к разработке сайтов

- каждый БЭМ-блок имеет свою папку внутри `src/blocks/modules`
- папка одного БЭМ-блока содержит в себе один Pug-файл, один SCSS-файл, один TS-файл (если у блока используется скрипт) и одни Story-файл (если у блока используется сторибук)
  - Pug-файл блока импортируется в файл `src/views/index.pug` (или в необходимый файл страницы, откуда будет вызываться блок)
  - SCSS-файл блока импортируется в файл `src/blocks/modules/_modules.scss`
  - TS-файл блока импортируется в `src/js/import/modules.ts`

Пример структуры папки с БЭМ-блоком:

```
blocks
├── modules
│   ├── header
│   │   ├── header.pug
│   │   ├── header.ts
│   │   ├── header.scss
│   │   ├── header.stories.ts
```

### Компоненты

- компоненты (например, иконки, кнопки) оформляются в Pug с помощью примесей
- каждый компонент имеет свою папку внутри `src/blocks/components`
- папка одного компонента содержит в себе один Pug-файл, один SCSS-файл и один TS-файл (если у компонента используется скрипт)
  - Pug-файл компонента импортируется в файл главной страницы `src/views/index.pug` (или в необходимый файл страницы, откуда будет вызываться компонент)
  - SCSS-файл компонента импортируется в файл `src/blocks/components/_components.scss`
  - TS-файл компонента импортируется в файл `src/js/import/components.ts`

### Страницы проекта

- страницы проекта находятся в папке `src/views/pages`
  - каждая страница (в том числе главная) наследует шаблон `src/views/layouts/default.pug`
  - главная страница: `src/views/index.pug`

### Шрифты

- шрифты находятся в папке `src/fonts`
  - используйте [форматы](https://caniuse.com/#search=woff) `.woff` и `.woff2`
  - шрифты подключаются в файл `src/styles/base/_fonts.scss`
  - сконвертировать локальные шрифты можно с помощью [данного сервиса](https://onlinefontconverter.com/)

### Изображения

- изображения находятся в папке `src/img`
  - изображение для генерации фавиконок должно находиться в папке `src/img/favicon` и иметь размер не менее `1024px x 1024px`

### Сторонние библиотеки

- все сторонние библиотеки устанавливаются в папку `node_modules`
  - для их загрузки воспользуйтеcь командой `yarn add package_name`
  - для подключения JS-файлов библиотек импортируйте их в самом начале JS-файла БЭМ-блока (то есть тот БЭМ-блок, который использует скрипт), например:
  ```javascript
  import $ from 'jquery';
  ```
  - для подключения стилевых файлов библиотек импортируйте их в файл `src/styles/vendor/_libs.scss`
  - JS-файлы и стилевые файлы библиотек самостоятельно изменять нельзя

:warning: Если в вашем проекте используется несколько библиотек, которые необходимо подключать на нескольких страницах, во избежании ошибок нужно:

- по пути `src/js/import` создать папку `pages`
- в папке `pages` создать TS-файл для страницы, например, `pageA.ts`, и импортировать туда библиотеку, которая будет использоваться только на этой странице
  - аналогично проделать шаг для дополнительных страниц
- в файле `webpack.config.js` в точку входа добавить TS-файлы страниц, пример:

```javascript
entry: {
    main: "./src/js/index.ts",
    pageA: "./src/js/import/pages/pageA.ts",
    pageB: "./src/js/import/pages/pageB.ts"
}
```

- подключить скомпилированные js-файлы на необходимых страницах

---

## Start project in docker

### Запуск для локальной разработки в Linux

Для запуска проекта для локальной разработки в ОС Linux выполните следующее:

1. Убедитесь что у вас установлен docker, docker compose и make (в ubuntu make установлен по умолчанию).

   ```
    ❯ docker -v
    Docker version 20.10.12, build e91ed57
    ❯ docker-compose -v
    docker-compose version 1.29.2, build 5becea4c
    ❯ make -v
    GNU Make 4.2.1 ......
   ```

   [Инструкция по установке docker.](https://docs.docker.com/engine/install/ubuntu/)

   [Инструкция по установке docker compose.](https://docs.docker.com/compose/install/)

2. Залогиньтесь в нашем docker registry выполнив команду:
   ```
   curl https://storage.yandexcloud.net/publuc-keys-bucket20220202131614371100000001/kokoc-registry-puller.json | docker login --username json_key --password-stdin cr.yandex
   ```
3. Если вы работаете над несколькими проектами с использованием docker, то рекомендуется поднять у себя локально nginx-proxy, чтобы не прописывать для каждого контейнера порты для открытия проекта в браузере. Инструкция по поднятию nginx-proxy [тут.](https://gitlab.webprofy.ru/devops/docker/docker-compose/nginx-proxy.compose) (Не клонируйте репозиторий nginx-proxy в в директорию проекта, склонируйте в какое нибудь отдельное место, запустите и пусть себе работает)
4. Установите необходимые переменные для прилежениях в .env файлах в корне проекта
5. Установите переменные для docker.
   Скопируйте файл .env.example в директории docker/local и замените переменные если это необходимо.

   ```
   cd docker/local
   cp .env.example .env
   ```

6. Выполните сборку и запуск проекта

   ```
   cd docker/local
   make build && make up
   ```

7. Для остановки контейнеров выполните `make down`

## CI

После того как из этого шаблона будет развернут новый проект, необходимо добавить в CI/CD Variables, несколько переменных, чтобы начал работать автодеплой на тестовый сервер.

Добавить эти переменные может пользователь с ролью в репозитории **Maintainer** или **Owner**

Для того чтобы добавить переменные перейдите в **Settings** => **CI/CD** => **Variables**

Переменные которые должны быть добавлены на уровень группы, так как они будут одинаковы для всех проектов:

```
DEPLOY_KEY - SSH-ключ к серверу

DEPLOY_USER - Пользователь под которым раннер будет выполрять комады на сервере

DEV_SERVER_ADDRESS - Адрес сервера

DEV_SERVER_PORTS -Порт для подключения по SSH
```

Переменные уникальные для проекта:

PROJECT - Данная переменная используется для указаннии папки на сервере в которую будет склонирован репозитории. Эта переменная будет одинаковой и для фронта и для бэка если он есть.

DEPLOY_COMMANDS - команды которые необходимо выполнить для сборки или обновления проекта. Команды сдледует указывать через **&&**

Пример - _make build && make down && make up_

---

Также в CI variables необходимо добавить переменные необходимые для работы приложения и развертывания в docker.

Переменные приложения необходимо добавлять с префиксами, для того чтобы во время прохождения пайплайна они разложились в необходимые файлы.

Для переменных которые должы быть в файле .env, необходим префикс **APPENV\_**

---

**Пример.**

Переменная **PUBLIC_API_URL** должна быть в файле .env.production.

В СI variables ее стоит занести как
**APPENV_NEXT_PUBLIC_API_URL** и указать ей какой то значение

---

### **Важно**!

Для того чтобы проект вообще стартанул в docker, необходимо прописать переменные которые ему необходимы. Они указываеются с префиксом - **DOCKERENV\_**

Ниже список переменных необходимых для старта в docker

- **COMPOSE_PROJECT_NAME** - необходима для именования контейнеров. Лучше именовать по типу <project*name>-<front/back>. Например - \_dneva-front*
- **DOMAIN** - Доменное имя тестовой площадки. Указывать в формате <любой произвольный, понятный поддомен>.cld.kokoc.tech
- **APP_PORT** - Порт на котором работает нода. По умолчанию - _3000_
- **FRONTEND_NETWORK_NAME** - название docker сети для фронта. По умолчанию - frontend-network. Не нужно указывать другое значение, без согласования с человеком ответственным за развертывание. В CI variables внесите эту переменную на уровень группы в виде **DOCKERENV_FRONTEND_NETWORK_NAME** - frontend-network
