# Progress 进度条

## 示例

### 基础用法

使用 `percent` 属性定义百分比

<preview path="./demos/basic.vue"></preview>

### 自定义文本

使用 `textFormatter` 属性定义文本

<preview path="./demos/text.vue"></preview>

### 控制样式

<!--@include: @/component/@parts/api-style.md-->

<preview path="./demos/style.vue"></preview>

## API

### 基础属性

| 名称            | 说明                                                                                             | 类型             | 默认值                        |
| --------------- | ------------------------------------------------------------------------------------------------ | ---------------- | ----------------------------- |
| `percent`       | 百分比                                                                                           | `number`         | `0`                           |
| `textFormatter` | 文字的格式化方法 <br> 1.函数：参数为百分比，返回一个可以作为文本的值 <br> 2.空值：表示不显示文本 | `function\|null` | ``percent => `${percent}%` `` |

### 样式属性

<!--@include: @/component/@parts/api-style.md-->

| 名称     | 说明     | 类型（默认单位）      | 默认值 |
| -------- | -------- | --------------------- | ------ |
| `height` | 高度     | `string\|number(?px)` | `6px`  |
| `radius` | 圆角尺寸 | `string\|number(?px)` | `4px`  |
