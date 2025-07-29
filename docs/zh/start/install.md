# 安装

目前仅支持本地安装，后续会考虑发布到线上。

## Vite

通过本地路径别名直接使用

```js [vite.config.js]
export default defineConfig({
  resolve: {
    alias: {
      vui: fileURLToPath(new URL('../vui', import.meta.url))
    }
  }
});
```

## Yalc

先发布

```sh [vui 根目录下运行]
yalc publish    # 发布
yalc push       # 推送更新
```

再安装

```sh [项目根目录运行]
yalc add vui      # 添加
yalc remove vui   # 删除
yalc update vui   # 更新
```
