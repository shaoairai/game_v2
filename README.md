# game_vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

---

### Firebase 結構規劃

```Firebase
clientside
    - charades
    - countdown
    - ppt
        - page // 頁數
    - rank
        - teamCnt // 分隊隊伍
        - rankData // 名次列表
        - isDisplayGroup // 顯示上依照團隊區分 or 排行榜
        - isRank // 依照團隊 or 分數排行
    - wordchain
```
