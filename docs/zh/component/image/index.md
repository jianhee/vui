# Image 图片

## 示例

### 基础用法

使用 `src` 属性定义图片地址

<preview path="./demos/basic.vue"></preview>

### 控制样式

<!--@include: @/component/@parts/api-style.md-->

<preview path="./demos/style.vue"></preview>

## API

### 基础属性

| 名称  | 说明                                           | 类型     | 默认值 |
| ----- | ---------------------------------------------- | -------- | ------ |
| `src` | 图片地址，加载中显示骨架屏，加载失败显示占位图 | `string` | 必填   |

### 样式属性

<!--@include: @/component/@parts/api-style.md-->

| 名称          | 说明                       | 类型（默认单位）      | 默认值            |
| ------------- | -------------------------- | --------------------- | ----------------- |
| `width`       | 宽度                       | `string\|number(?px)` |                   |
| `aspectRatio` | 宽高比，设置后可能显示不全 | `string`              | 占位图默认 `16/9` |
| `radius`      | 圆角尺寸                   | `string\|number(?px)` |                   |
