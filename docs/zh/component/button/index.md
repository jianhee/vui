# Button 按钮

## 基础用法

使用 `type` 属性定义按钮类型

<preview path="./demos/basic.vue"></preview>

## 原生属性

<preview path="./demos/native.vue"></preview>

<!-- 样式属性 -->
<!--@include: @/component/@parts/props-style.md-->

<preview path="./demos/style.vue"></preview>

## 加载状态

使用 `loading` 属性开启加载状态

<preview path="./demos/loading.vue"></preview>

## 前置图标

<!--@include: @/component/@parts/props-icon.md-->

<preview path="./demos/icon.vue"></preview>

## 按钮尺寸

使用 `size` 属性定义按钮尺寸

<preview path="./demos/size.vue"></preview>

## 块级模式

使用 `inline` 或 `block` 属性切换显示模式

<preview path="./demos/display.vue"></preview>

## API

### 属性

<!--@include: @/component/@parts/props-native.md-->

| 名称       | 说明                                 | 类型                               | 默认值     |
| ---------- | ------------------------------------ | ---------------------------------- | ---------- |
| `type`     | 按钮类型                             | `string`: `primary\|default\|link` | `default`  |
| `loading`  | 是否为加载状态                       | `boolean`                          | `false`    |
| `icon`     | 前置图标                             | `string\|component\|object`        |            |
| `size`     | 按钮尺寸                             | `string`: `large\|medium\|small`   | `medium`   |
| `inline`   | 是否为行内模式                       | `boolean`                          | `true`     |
| `block`    | 是否为块级模式                       | `boolean`                          | `false`    |
| ---------- | ---------- 以下是样式属性 ---------- | ----------                         | ---------- |
| `radius`   | 圆角尺寸                             | `string(带单位)\|number(px)`       | `4`        |

### 插槽

| 名称      | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 显示内容 |      |
