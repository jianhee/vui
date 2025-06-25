# Loading 加载

## 基础用法

使用 `animate` 属性定义动画类型

<preview path="./demos/basic.vue"></preview>

## 自定义文本

使用 `showText` 和 `text` 属性定义文本

<preview path="./demos/text.vue"></preview>

## 自定义图标

<!--@include: @/component/@parts/props-icon.md-->

<preview path="./demos/icon.vue"></preview>

## API

### 属性

| 名称       | 说明                   | 类型                        | 默认值       |
| ---------- | ---------------------- | --------------------------- | ------------ |
| `animate`  | 动画类型（转圈和气泡） | `string`(`loop\|bubble`)    | `loop`       |
| `showText` | 是否显示文本           | `boolean`                   | `true`       |
| `text`     | 文本                   | `string`                    | `Loading...` |
| `icon`     | 图标                   | `string\|component\|object` |              |
