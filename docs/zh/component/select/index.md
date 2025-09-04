# Select 选择器

## 示例

### 基础用法

- 使用 `options` 属性定义选项数组，使用 `v-model:value` 属性绑定当前值
- 切换选项时触发 `change` 事件

<preview path="./demos/basic.vue"></preview>

### 原生属性

<!--@include: @/component/@parts/api-native.md-->

<preview path="./demos/native.vue"></preview>

### 自定义选项

使用 `options` 插槽自定义选项，使用 `label` 属性定义选中项的文本

<preview path="./demos/options.vue"></preview>

### 选择器尺寸

使用 `size` 属性定义选择器尺寸

<preview path="./demos/size.vue"></preview>

## API

### 基础属性

| 名称            | 说明                                                                                             | 类型                             | 默认值   |
| --------------- | ------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| `options`       | 选项数组                                                                                         | `Array[object\|string\|number]`  |          |
| `v-model:value` | 当前值，即选中项的 `value`                                                                       | `string\|number`                 |          |
| `label`         | 当前文本，优先级高于选中项的 `label` <br> 自定义选项时无法在组件内部获取选中项，必须指定一个文本 | `string\|number`                 |          |
| `size`          | 选择器尺寸                                                                                       | `string`: `large\|medium\|small` | `medium` |

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

### 插槽

| 名称      | 说明                         |
| --------- | ---------------------------- |
| `options` | 自定义选项，优先级高于属性值 |

### 事件

| 名称     | 说明           | 参数                                                                             |
| -------- | -------------- | -------------------------------------------------------------------------------- |
| `change` | 切换选项时触发 | `{ option: '当前项', value: '当前项的 value', selectedValue: '选中项的 value' }` |
