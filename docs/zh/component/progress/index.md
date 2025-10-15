# Progress 进度条

## 示例

### 基础用法

使用 `percentage` 属性定义百分比

<preview path="./demos/basic.vue"></preview>

### 自定义文本

使用 `text` 属性定义右侧内容

<preview path="./demos/text.vue"></preview>

### 控制样式

<!--@include: @/component/@parts/api-style.md-->

<preview path="./demos/style.vue"></preview>

## API

### 基础属性

| 名称         | 说明         | 类型                                                                                        | 默认值           |
| ------------ | ------------ | ------------------------------------------------------------------------------------------- | ---------------- |
| `percentage` | 百分比       | `number`                                                                                    | `0`              |
| `suffix`     | 轨道右侧内容 | - `null` 不显示内容 <br> - `function` : `percentage => {}` 的返回值 <br> - `any` : 直接显示 | `${percentage}%` |

### 样式属性

<!--@include: @/component/@parts/api-style.md-->

| 名称     | 说明     | 类型（默认单位）      | 默认值 |
| -------- | -------- | --------------------- | ------ |
| `height` | 高度     | `string\|number(?px)` | `6px`  |
| `radius` | 圆角尺寸 | `string\|number(?px)` | `4px`  |
