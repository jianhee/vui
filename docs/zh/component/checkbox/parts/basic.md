::: tip
多选框和单选框的 API 几乎完全一致，UI 略有差异，各自提供两个独立的组件：

- `<VCheckbox>` 和 `<VRadio>` 用于单个选项
- `<VGroup>` 和 `<VRadioGroup>` 用于选项组

:::

## 单个选项

### 基础用法

1. 使用 `v-model:checked` 属性绑定当前值
2. 使用 `label` 属性和 `default` 插槽定义选项内容
3. 切换选中状态时触发 `change` 事件

<preview path="@docs/component/checkbox/demos/option.vue"></preview>

### 按钮类型

使用 `type` 属性切换显示类型

<preview path="@docs/component/checkbox/demos/option-type.vue"></preview>

### 块级模式

使用 `inline` 或 `block` 属性切换显示模式

<preview path="@docs/component/checkbox/demos/option-display.vue"></preview>

## 选项组

### 基础用法

1. 使用 `v-model:value` 属性绑定当前值
2. 使用 `options` 属性和 `default` 插槽定义选项数组和内容
3. 切换选项时触发 `change` 事件

<preview path="@docs/component/checkbox/demos/group.vue"></preview>

### 按钮类型

使用 `optionType` 属性切换选项的显示类型

<preview path="@docs/component/checkbox/demos/group-type.vue"></preview>

### 行内模式

使用 `optionInline` 或 `optionBlock` 属性切换选项的显示模式

<preview path="@docs/component/checkbox/demos/group-display.vue"></preview>

## 单个选项 API

### 属性

| 名称              | 说明               | 类型               | 默认值  |
| ----------------- | ------------------ | ------------------ | ------- |
| `v-model:checked` | 当前值，即是否选中 | `boolean`          | `false` |
| `label`           | 选项文本           | `string`           |         |
| `type`            | 选项类型           | `string`: `button` |         |
| `inline`          | 是否为行内模式     | `boolean`          | `true`  |
| `block`           | 是否为块级模式     | `boolean`          | `false` |

### 插槽

| 名称      | 说明                   |
| --------- | ---------------------- |
| `default` | 选项文本后的自定义内容 |

### 事件

| 名称     | 说明               | 参数                                         |
| -------- | ------------------ | -------------------------------------------- |
| `change` | 切换选中状态时触发 | `{ event: '事件对象', checked: '是否选中' }` |

## 选项组 API

### 属性

| 名称            | 说明                       | 类型                                                        | 默认值  |
| --------------- | -------------------------- | ----------------------------------------------------------- | ------- |
| `v-model:value` | 当前值，即选中项的 `value` | 多选框 `Array[string\|number]` <br> 单选框 `string\|number` |         |
| `options`       | 选项数组                   | `Array[object\|string\|number]`                             |         |
| `optionType`    | 选项类型                   | `string`: `button`                                          |         |
| `optionInline`  | 选项是否为行内模式         | `boolean`                                                   | `false` |
| `optionBlock`   | 选项是否为块级模式         | `boolean`                                                   | `true`  |

#### options

`string|number` 类型的选项会格式化为 `{ value, label }`

| 名称    | 说明                              | 类型             | 默认值 |
| ------- | --------------------------------- | ---------------- | ------ |
| `value` | 选项值                            | `string\|number` |        |
| `label` | 选项文本，为空时使用 `value` 的值 | `string\|number` |        |

### 插槽

| 名称      | 说明                   | 参数                   |
| --------- | ---------------------- | ---------------------- |
| `default` | 选项文本后的自定义内容 | `{ option: '当前项' }` |

### 事件

| 名称     | 说明           | 参数                                                                            |
| -------- | -------------- | ------------------------------------------------------------------------------- |
| `change` | 切换选项时触发 | `{ option: '当前项', value: '当前项的 value', checkedValue: '选中项的 value' }` |
