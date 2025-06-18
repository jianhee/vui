# Icon 图标

## 使用图标

支持以下两种方式，两者的 API 和 UI 完全一致，二选一即可。

### 使用 svg 名称

1. 安装 `vite-plugin-svg-icons` 插件，配置后即可自动导入所有 `.svg` 文件
2. 使用 `<VIcon name="图标名称">` 展示图标

:::code-group

```sh [npm]
npm i -D vite-plugin-svg-icons
```

```js [vite.config.js]
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      // 图标所在目录
      iconDirs: [path.resolve(process.cwd(), './src/icons')],
      // 图标名称：子目录名-文件名
      symbolId: 'icon-[dir]-[name]'
    })
  ]
});
```

```js [main.js]
import 'virtual:svg-icons-register';
```

```vue [*.vue]
<template>
  <VIcon name="close" />
</template>
```

:::

### 使用 svg 组件

1. 安装 `vite-svg-loader` 插件，配置后即可使用 `.svg?component` 将 `.svg` 文件导入为 `Vue` 组件
2. 使用 `<VIcon :component="图标组件">` 展示图标

:::code-group

```sh [npm]
npm i -D vite-svg-loader
```

```js [vite.config.js]
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [svgLoader()]
});
```

```vue [*.vue]
<template>
  <VIcon :component="IconClose" />
</template>

<script setup>
import IconClose from './close.svg?component';
</script>
```

:::

## 基础用法

1. `props.name` 图标名称
2. `props.component` 图标组件

<preview path="./demos/basic.vue"></preview>

## 可点击状态

`props.clickable` 设为 `true`

<preview path="./demos/clickable.vue"></preview>

## 禁用状态

`props.disabled` 设为 `true`

<preview path="./demos/disabled.vue"></preview>

## 旋转动画

`props.spin` 设为 `true`

<preview path="./demos/spin.vue"></preview>

<!--@include: @/component/@parts/props-style.md-->

### 图标颜色

1. `props.color` 主要色值，默认继承父元素 `color`，需要将 `svg` 中对应的颜色改为 `currentColor`
2. `props.twoOneColor` 双色图标的次要色值，仅双色图标有效，需要将 `svg` 中对应的颜色改为 `var(--vui-icon-two-tone-color)`

<preview path="./demos/color.vue"></preview>

### 图标尺寸

`props.size` 默认 `1em`，不带单位时默认 `px`

<preview path="./demos/size.vue"></preview>

### 旋转角度

`props.rotate` 不带单位时默认 `deg`，不支持 CSS 变量，设置后容易覆盖其它 `transform` 属性

<preview path="./demos/rotate.vue"></preview>
