# Icon 图标

## 导入图标

可使用以下两种方式导入图标，后续使用的 API 和 UI 完全一致，二选一即可。

### 使用 svg 名称

1. 安装 `vite-plugin-svg-icons` 插件
2. 自动导入所有 `.svg` 文件
3. 在 `<VIcon>` 中使用 `name` 属性引入图标名称

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
3. 在 `<VIcon>` 中使用 `component` 属性引入图标组件

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

支持单色图标和双色图标，需要将 `svg` 中对应的色值改为 `currentColor` 和 `var(--vui-icon-two-one-color)`

1. `props.color` 和 `props.twoOneColor`
2. `style.color` 双色图标不支持
3. `style.--vui-icon-color` 和 `style.--vui-icon-two-one-color`

<preview path="./demos/color.vue"></preview>

### 图标尺寸

1. `props.size`
2. `style.font-size` 默认继承父元素的字体大小
3. `style.--vui-icon-size`

<preview path="./demos/size.vue"></preview>

### 旋转角度

1. `props.rotate`
2. `style.transform(rotate(xxxdeg))`
3. `style.--vui-icon-rotate`

<preview path="./demos/rotate.vue"></preview>
