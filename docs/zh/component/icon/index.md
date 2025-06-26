# Icon 图标

## 使用图标

支持以下两种使用方式，两者的 API 和 UI 完全一致，二选一即可。

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

使用 `name` 或 `component` 属性定义图标

<preview path="./demos/basic.vue"></preview>

## 可点击状态

使用 `clickable` 属性添加可点击状态

<preview path="./demos/clickable.vue"></preview>

## 禁用状态

使用 `disabled` 属性添加禁用状态

<preview path="./demos/disabled.vue"></preview>

## 旋转状态

使用 `spin` 属性添加旋转状态

<preview path="./demos/spin.vue"></preview>

<!--@include: @/component/@parts/props-style.md-->

### 图标颜色

使用 `color` 和 `twoOneColor` 属性定义图标颜色

<preview path="./demos/color.vue"></preview>

### 图标尺寸

使用 `size` 属性定义图标尺寸

<preview path="./demos/size.vue"></preview>

### 旋转角度

使用 `rotate` 属性定义旋转角度

<preview path="./demos/rotate.vue"></preview>

## API

### 属性

| 名称          | 说明                                                                                             | 类型                          | 默认值           |
| ------------- | ------------------------------------------------------------------------------------------------ | ----------------------------- | ---------------- |
| `name`        | 图标名称                                                                                         | `string`                      |                  |
| `component`   | 图标组件                                                                                         | `component`                   |                  |
| `clickable`   | 是否为可点击状态                                                                                 | `boolean`                     | `false`          |
| `disabled`    | 是否为禁用状态                                                                                   | `boolean`                     | `false`          |
| `spin`        | 是否为旋转状态                                                                                   | `boolean`                     | `false`          |
| `color`       | 主要颜色 <br> 需要将 `svg` 中对应的颜色改为 `currentColor`                                       | `string`                      | 继承 CSS `color` |
| `twoOneColor` | 次要颜色 <br> 需要将 `svg` 中对应的颜色改为 `var(--vui-icon-two-tone-color)` <br> 仅双色图标有效 | `string`                      |                  |
| `size`        | 图标尺寸                                                                                         | `string(带单位)\|number(px)`  | `1em`            |
| `rotate`      | 旋转角度                                                                                         | `string(带单位)\|number(deg)` |                  |
