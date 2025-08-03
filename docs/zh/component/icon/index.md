# Icon 图标

## 导入图标

### 导入为雪碧图

1. 安装插件

```sh [npm]
npm i -D vite-plugin-svg-icons
```

2. 配置插件

```js [vite.config.js]
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

3. 注册插件，自动将所有 `.svg` 文件导入为 `SVG` 雪碧图

```js [main.js]
import 'virtual:svg-icons-register';
```

4. 使用图标名称

```vue [*.vue]
<template>
  <VIcon name="close" />
</template>
```

### 导入为组件

1. 安装插件

```sh [npm]
npm i -D vite-svg-loader
```

2. 配置插件

```js [vite.config.js]
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [svgLoader()]
});
```

3. 使用 `.svg?component` 后缀将 `.svg` 文件导入为 `Vue` 组件，然后使用图标组件

```vue [*.vue]
<template>
  <VIcon :component="IconClose" />
</template>

<script setup>
import IconClose from './close.svg?component';
</script>
```

## 示例

### 基础用法

使用 `name` 属性、`component` 属性或 `default` 插槽插入图标

<preview path="./demos/basic.vue"></preview>

### 可点击状态

<preview path="./demos/clickable.vue"></preview>

### 禁用状态

<preview path="./demos/disabled.vue"></preview>

### 旋转状态

<preview path="./demos/spin.vue"></preview>

### 控制样式

<!--@include: @/component/@parts/api-style.md-->

<preview path="./demos/style.vue"></preview>

## API

### 基础属性

| 名称        | 说明                             | 类型        | 默认值  |
| ----------- | -------------------------------- | ----------- | ------- |
| `name`      | 图标名称                         | `string`    |         |
| `component` | 图标组件，优先级高于 `name` 属性 | `component` |         |
| `clickable` | 是否为可点击状态                 | `boolean`   | `false` |
| `disabled`  | 是否为禁用状态                   | `boolean`   | `false` |
| `spin`      | 是否为旋转状态                   | `boolean`   | `false` |

### 样式属性

<!--@include: @/component/@parts/api-style.md-->

| 名称          | 说明                                                                                       | 类型（默认单位）       | 默认值               |
| ------------- | ------------------------------------------------------------------------------------------ | ---------------------- | -------------------- |
| `color`       | 主要颜色，需要将 `svg` 中对应的颜色改为 `currentColor`                                     | `string`               | 继承 CSS `color`     |
| `twoOneColor` | 次要颜色（仅双色图标有效），需要将 `svg` 中对应的颜色改为 `var(--vui-icon-two-tone-color)` | `string`               |                      |
| `size`        | 图标尺寸                                                                                   | `string\|number(?px)`  | 继承 CSS `font-size` |
| `rotate`      | 旋转角度                                                                                   | `string\|number(?deg)` |                      |

### 插槽

| 名称      | 说明                         |
| --------- | ---------------------------- |
| `default` | 自定义图标，优先级高于属性值 |
