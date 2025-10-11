# Select 选择器

## 示例

### 基础用法

- 使用 `v-model:value` 属性绑定当前值
- 使用 `options` 属性定义选项数组，选项内容优先级顺序为 `option.label` 属性 > `option.value` 属性 > `option` 属性
- 使用 `placeholder` 属性定义占位文字
- 切换选项时触发 `change` 事件

<preview path="./demos/basic.vue"></preview>

### 选择器状态

<preview path="./demos/state.vue"></preview>

### 选择器尺寸

使用 `size` 属性定义选择器尺寸

<preview path="./demos/size.vue"></preview>

## API

### 基础属性

| 名称            | 说明                       | 类型                             | 默认值   |
| --------------- | -------------------------- | -------------------------------- | -------- |
| `options`       | 选项数组                   | `Array[object\|string\|number]`  |          |
| `v-model:value` | 当前值，即选中项的 `value` | `string\|number`                 |          |
| `size`          | 选择器尺寸                 | `string`: `large\|medium\|small` | `medium` |

### 基础属性.options

`string|number` 类型的选项会格式化为 `{ value, label }`

| 名称    | 说明                              | 类型             | 默认值 |
| ------- | --------------------------------- | ---------------- | ------ |
| `value` | 选项值                            | `string\|number` |        |
| `label` | 选项文本，为空时使用 `value` 的值 | `string\|number` |        |

### 原生属性

<!--@include: @/component/@parts/api-native.md-->

| 名称          | 说明     | 类型      | 默认值  |
| ------------- | -------- | --------- | ------- |
| `disabled`    | 是否禁用 | `boolean` | `false` |
| `readonly`    | 是否只读 | `boolean` | `false` |
| `placeholder` | 占位符   | `string`  |         |

### 事件

| 名称     | 说明           | 参数                                                                             |
| -------- | -------------- | -------------------------------------------------------------------------------- |
| `change` | 切换选项时触发 | `{ option: '当前项', value: '当前项的 value', selectedValue: '选中项的 value' }` |
