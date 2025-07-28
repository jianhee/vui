# Icon 图标

## 导入 SVG 图标

支持以下两种导入方式

### 使用名称

:::code-group

```sh [npm]
# 安装插件
npm i -D vite-plugin-svg-icons
```

```js [vite.config.js]
// 配置插件
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      // 图标所在目录
      iconDirs: [path.resolve(process.cwd(), './src/icons')],
      // 图标名称：icon-子目录名-文件名
      symbolId: 'icon-[dir]-[name]'
    })
  ]
});
```

```js [main.js]
// 注册插件：自动导入所有 `svg` 图标
import 'virtual:svg-icons-register';
```

```vue [*.vue]
<!-- 使用图标 -->
<template>
  <VIcon name="close" />
</template>
```

:::

### 使用组件

:::code-group

```sh [npm]
# 安装插件
npm i -D vite-svg-loader
```

```js [vite.config.js]
// 配置插件
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [svgLoader()]
});
```

```vue [*.vue]
<!-- 使用图标 -->
<template>
  <VIcon :component="IconClose" />
</template>

<script setup>
// 使用 `.svg?component` 后缀将 `.svg` 文件导入为 `Vue` 组件
import IconClose from './close.svg?component';
</script>
```

:::

## 基础用法

使用 `name` 属性、`component` 属性或 `default` 插槽插入图标

<preview path="./demos/basic.vue"></preview>

<!-- 样式属性 -->
<!--@include: @/component/@parts/props-style.md-->

<preview path="./demos/style.vue"></preview>

## 可点击状态

使用 `clickable` 属性开启可点击状态

<preview path="./demos/clickable.vue"></preview>

## 禁用状态

使用 `disabled` 属性开启禁用状态

<preview path="./demos/disabled.vue"></preview>

## 旋转状态

使用 `spin` 属性开启旋转状态

<preview path="./demos/spin.vue"></preview>

## API

### 属性

| 名称        | 说明                             | 类型        | 默认值  |
| ----------- | -------------------------------- | ----------- | ------- |
| `name`      | 图标名称                         | `string`    |         |
| `component` | 图标组件，优先级高于 `name` 属性 | `component` |         |
| `clickable` | 是否为可点击状态                 | `boolean`   | `false` |
| `disabled`  | 是否为禁用状态                   | `boolean`   | `false` |
| `spin`      | 是否为旋转状态                   | `boolean`   | `false` |

### 样式属性

| 名称          | 说明                                                                                       | 类型                          | 默认值           |
| ------------- | ------------------------------------------------------------------------------------------ | ----------------------------- | ---------------- |
| `color`       | 主要颜色，需要将 `svg` 中对应的颜色改为 `currentColor`                                     | `string`                      | 继承 CSS `color` |
| `twoOneColor` | 次要颜色（仅双色图标有效），需要将 `svg` 中对应的颜色改为 `var(--vui-icon-two-tone-color)` | `string`                      |                  |
| `size`        | 图标尺寸                                                                                   | `string(带单位)\|number(px)`  | `1em`            |
| `rotate`      | 旋转角度                                                                                   | `string(带单位)\|number(deg)` |                  |

### 插槽

| 名称      | 说明                         |
| --------- | ---------------------------- |
| `default` | 自定义图标，优先级高于属性值 |
