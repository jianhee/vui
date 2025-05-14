# 安装

目前仅支持本地使用，后续会考虑发布到 npm 上。

## 使用 Vite

::: code-group

```js [vite.config.js]
export default defineConfig({
  resolve: {
    alias: {
      vui: fileURLToPath(new URL('../vui', import.meta.url))
    }
  }
});
```

:::

## 使用 yalc

::: code-group

```sh [vui 根目录]
# 发布
yalc publish

# 推送更新
yalc push
```

```sh [项目根目录]
# 添加
yalc add vui

# 删除
yalc remove vui

# 更新
yalc update vui
```

:::
