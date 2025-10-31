# buddhavacana

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Github Pages](https://github.com/ChristineTham/buddhavacana/actions/workflows/deploy.yml/badge.svg)](https://github.com/ChristineTham/buddhavacana/actions/workflows/deploy.yml)

**buddhavacana** is a website that documents my journey reading and studying Buddhist texts, primarily from the Pāli Canon (Tipiṭaka) but also supplementary books and articles. My intent is to rely as much on the original Pāli terms and text where possible, and only rely on English translations as an interim aid to understanding.

## 🚀 Project Structure

Inside the project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images are in `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, are placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
