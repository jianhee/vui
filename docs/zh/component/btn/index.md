# Btn 按钮

## 基础用法

使用 `type` 属性定义按钮类型

<preview path="./demos/basic.vue"></preview>

## 禁用状态

使用 `disabled` 属性添加禁用状态

<preview path="./demos/disabled.vue"></preview>

## 加载状态

使用 `loading` 属性添加加载状态

<preview path="./demos/loading.vue"></preview>

## 前置图标

<!--@include: @/component/@parts/props-icon.md-->

<preview path="./demos/icon.vue"></preview>

## 按钮尺寸

使用 `size` 属性定义按钮尺寸

<preview path="./demos/size.vue"></preview>

## 块级模式

将 `inline` 属性设为 `false`，或者将 `block` 属性设为 `true`

<preview path="./demos/display.vue"></preview>

<!--@include: @/component/@parts/props-style.md-->

### 圆角尺寸

使用 `radius` 属性定义圆角尺寸

<preview path="./demos/radius.vue"></preview>

## API

### 属性

| 名称       | 说明                            | 类型                               | 默认值    |
| ---------- | ------------------------------- | ---------------------------------- | --------- |
| `type`     | 按钮类型                        | `string`(`primary\|default\|link`) | `default` |
| `disabled` | 是否为禁用状态                  | `boolean`                          | `false`   |
| `loading`  | 是否为加载状态                  | `boolean`                          | `false`   |
| `icon`     | 前置图标                        | `string\|component\|object`        |           |
| `size`     | 按钮尺寸                        | `string`(`large\|medium\|small`)   | `medium`  |
| `inline`   | 是否为行内模式                  | `boolean`                          | `true`    |
| `block`    | 是否为块级模式                  | `boolean`                          | `false`   |
| `radius`   | 圆角尺寸，数字自动补全单位 `px` | `string\|number`                   | `4`       |

### 插槽

| 名称      | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 显示内容 |      |
