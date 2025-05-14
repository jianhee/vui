# Icon 图标

## 导入 SVG 图标

### 使用 name

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
      iconDirs: [path.resolve(process.cwd(), './src/icons')],
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

### 使用 component

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
import IconClose from '@icons/close.svg?component';
</script>
```

:::

## 基础用法

1. `props.name`, `props.component` 图标名称和图标组件，二选一
2. `props.color` 图标颜色，默认继承 `color`
3. `props.clickable` 是否可点击
4. `props.disabled` 是否禁用
5. `props.rotate` 旋转角度
6. `props.spin` 是否使用旋转动画

:::preview
demo-preview=./demos/basic.vue
:::

## 图标尺寸

1. `props.size` 默认继承 `font-size`

:::preview
demo-preview=./demos/size.vue
:::

## 切换图标

1. 单色图标：设置不同状态的 `color` 即可
1. 多色图标：传入 `default`, `hover`, `dark`, `darkHover` 等状态对应的图标，内部自动切换

:::preview
demo-preview=./demos/state.vue
:::
