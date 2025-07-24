# Progress 进度条

## 基础用法

使用 `percent` 属性定义百分比

<preview path="./demos/basic.vue"></preview>

## 文本

使用 `textFormatter` 属性定义文本

<preview path="./demos/text.vue"></preview>

<!-- 样式属性 -->
<!--@include: @/component/@parts/props-style.md-->

<preview path="./demos/style.vue"></preview>

## API

### 属性

| 名称            | 说明                                                                                             | 类型                         | 默认值                        |
| --------------- | ------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------- |
| `percent`       | 百分比                                                                                           | `number`                     | `0`                           |
| `textFormatter` | 文字的格式化方法 <br> 1.函数：参数为百分比，返回一个可以作为文本的值 <br> 2.空值：表示不显示文本 | `function\|null`             | ``percent => `${percent}%` `` |
| ----------      | ---------- 以下是样式属性 ----------                                                             | ----------                   | ----------                    |
| `height`        | 高度                                                                                             | `string(带单位)\|number(px)` | `6px`                         |
| `radius`        | 圆角尺寸                                                                                         | `string(带单位)\|number(px)` | `4px`                         |
