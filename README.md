# Astro Gulp Starter Template

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   └── styles/
├── data/
├── astro.config.mjs
├── gulpfile.js
├── README.md
├── package.json
├── tsconfig.json
├── postcss.config.cjs
├── tailwind.config.cjs
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

In `src/components/` you can place Astro/React/Vue/Svelte/Preact components.

The `src/scripts/` directory contains the scripts.

The `src/styles/` directory contains the styles. You can write as styles with SCSS and you can using Tailwind CSS in templates or scss files with @apply directive

The `data/` directory is used to store data, such as json files

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
| `gulp svg`             | Generate file with svg icons                     |

## Documentation

https://docs.astro.build
