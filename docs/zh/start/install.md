# 安装

## 打包工具 vite

将 VUI 克隆到本地，然后在项目中通过本地路径直接引入

```js [vite.config.js]
export default defineConfig({
  resolve: {
    alias: {
      vui: fileURLToPath(new URL('../vui', import.meta.url))
    }
  }
});
```

## 本地包管理器 yalc

将 VUI 克隆到本地，然后发布

```sh [vui 根目录]
# 发布
yalc publish

# 推送更新
yalc push
```

在项目中引入

```sh [项目根目录]
# 添加
yalc add vui

# 删除
yalc remove vui

# 更新
yalc update vui
```

## 线上包管理器 npm 等

TODU
