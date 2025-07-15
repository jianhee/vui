# Select 选择器

## 基础用法

1. 使用 `v-model:value` 属性绑定当前值，使用 `options` 属性定义选项数组
2. 切换选项时触发 `change` 事件

<preview path="./demos/basic.vue"></preview>

## 原生属性

<preview path="./demos/native.vue"></preview>

## 选择器尺寸

使用 `size` 属性定义选择器尺寸

<preview path="./demos/size.vue"></preview>

## API

### 属性

<!--@include: @/component/@parts/props-native.md-->

| 名称            | 说明                       | 类型                            | 默认值 |
| --------------- | -------------------------- | ------------------------------- | ------ |
| `v-model:value` | 当前值，即选中项的 `value` | `string\|number`                |        |
| `options`       | 选项数组                   | `Array[object\|string\|number]` |        |
| `size`          | 选择器尺寸                 | `string`: `medium\|small`       |        |

#### options

`string|number` 类型的选项会格式化为 `{ value, label }`

| 名称    | 说明                              | 类型             | 默认值 |
| ------- | --------------------------------- | ---------------- | ------ |
| `value` | 选项值                            | `string\|number` |        |
| `label` | 选项文本，为空时使用 `value` 的值 | `string\|number` |        |

### 事件

| 名称     | 说明           | 参数                                                                             |
| -------- | -------------- | -------------------------------------------------------------------------------- |
| `change` | 切换选项时触发 | `{ option: '当前项', value: '当前项的 value', selectedValue: '选中项的 value' }` |
