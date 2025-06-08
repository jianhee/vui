# Icon 图标

## 使用方式

图标只能是 `svg` 格式，支持两种使用方式

### 使用 svg 名称

1. 安装 `vite-plugin-svg-icons` 插件
2. 自动导入所有 `.svg` 文件
3. 在 `VIcon` 中引入 `props.name` 图标名称

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

1. 将 `.svg` 文件改写成 `.vue` 组件，或者安装 `vite-svg-loader` 插件自动转换
2. 按需导入并注册图标组件
3. 在 `VIcon` 中引入 `props.component` 图标组件

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

两种方式的 API 和 UI 完全一致，二选一即可

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

<!--@include: ../../_parts/style.md-->

### 图标颜色

1. `props.color` 描边颜色，默认继承 `color`
2. `props.twoOneColor` 填充颜色，仅双色图标有效，默认继承 `--vui-icon-two-one-color`

<preview path="./demos/color.vue"></preview>

### 图标尺寸

`props.size` 默认值继承 `font-size`，默认单位 `px`，格式为 `Number|String`

<preview path="./demos/size.vue"></preview>

### 旋转角度

`props.rotate` 默认值 `null`，默认单位 `deg`，格式为 `Number|String`

<preview path="./demos/rotate.vue"></preview>
