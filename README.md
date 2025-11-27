# domain

astro-react-practice-b424.vercel.app

# setup

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
