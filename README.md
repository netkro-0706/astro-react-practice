# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# setup

# 새 프로젝트 만들기

npm create astro@latest my-project
yarn add @astrojs/react react react-dom
yarn add @vanilla-extract/css @vanilla-extract/vite-plugin
yarn add @nanostores/react
yarn add axios
yarn add swr
yarn add -D @biomejs/biome
yarn biome init

# folder structuer

src/
components/
hooks/
styles/
stores/
pages/
layouts/
lib/

# api

| 기능               | URL                                                       |
| ------------------ | --------------------------------------------------------- |
| 모든 상품          | `https://api.escuelajs.co/api/v1/products`                |
| 카테고리 목록      | `https://api.escuelajs.co/api/v1/categories`              |
| 특정 카테고리 상품 | `https://api.escuelajs.co/api/v1/categories/:id/products` |
| 상품 상세          | `https://api.escuelajs.co/api/v1/products/:id`            |
