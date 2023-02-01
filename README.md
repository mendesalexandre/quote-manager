# Quote Manager (quote-manager)

Project to control personal/professional quotes, sales and opportunities.

Develop with Vue and Quasar Framework.

## Project Structure (/ui)

- `build` - contains build-related configuration files. In most cases you don't need to touch them.

- `src` - contains the source code, obviously. The codebase is written in ES2015.

  - `components` - JS, Sass and JSON (API) files for Quasar Vue components

  - `composables` - Quasar's composables for Vue 3 Composition API

  - `directives` - Vue directives supplied by Quasar

  - `plugins` - Quasar plugins

  - `css` - Sass definitions and core code for Quasar themes

  - `utils` - utilities used by the framework and exported to the public API

- `lang` - Quasar language packs

- `icon-set` - Quasar icon sets

- `dist` - contains built files for distribution (only after a build). Note this directory is only updated when a release happens; they do not reflect the latest changes in development branches.

- `dev` - app with Quasar sources linked directly used for testing purposes. Each feature/component has its own `*.vue` file. Adding a new file automatically creates a route for it and adds it to the "homepage" list (based on the file name).

## About quasar


## Installing quasar
```bash
yarn global add @quasar/cli
yarn create quasar

# or:

npm i -g @quasar/cli
npm init quasar

# or:

pnpm add -g @quasar/cli # experimental support
pnpm create quasar # experimental support
```


## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).
