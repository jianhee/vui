---
title: Checkbox 多选框
customName: Checkbox
---

# {{ $frontmatter.customName }} 多选框

::: tip
多选框和单选框的 API 几乎完全一致，UI 略有差异，各自提供两个独立的组件

1. `<VCheckbox>` 和 `<VRadio>` 用于单个选项
2. `<VCheckboxGroup>` 和 `<VRadioGroup>` 用于选项组

:::

## {{ $frontmatter.customName }} 示例

<!--@include: @/component/@parts/demo-component.md-->

### 基础用法

- 使用 `v-model:checked` 属性绑定当前值
- 选项内容优先级顺序为 `default` 插槽 > `label` 属性
- 切换选中状态时触发 `change` 事件

<preview path="@docs/component/checkbox/demos/option.vue"></preview>

### 块级模式

<preview path="@docs/component/checkbox/demos/option-display.vue"></preview>

### 选项状态

<preview path="@docs/component/checkbox/demos/option-state.vue"></preview>

### 按钮类型

<preview path="@docs/component/checkbox/demos/option-type.vue"></preview>

## {{ $frontmatter.customName }}Group 示例

### 基础用法

- 使用 `v-model:value` 属性绑定当前值
- 使用 `options` 属性定义选项数组，选项内容优先级顺序为 `default` 插槽 > `option.label` 属性 > `option.value` 属性 > `option` 属性
- 切换选项时触发 `change` 事件

<preview path="@docs/component/checkbox/demos/group.vue"></preview>

### 行内模式

<preview path="@docs/component/checkbox/demos/group-display.vue"></preview>

### 选项组状态

<preview path="@docs/component/checkbox/demos/group-state.vue"></preview>

### 按钮类型

<preview path="@docs/component/checkbox/demos/group-type.vue"></preview>

## {{ $frontmatter.customName }}/Group API

### 原生属性

<!--@include: @/component/@parts/api-native.md-->

| 名称       | 说明           | 类型      | 默认值  |
| ---------- | -------------- | --------- | ------- |
| `disabled` | 是否为禁用状态 | `boolean` | `false` |
| `readonly` | 是否为只读状态 | `boolean` | `false` |

## {{ $frontmatter.customName }} API

### 属性

| 名称              | 说明                     | 类型                        | 默认值    |
| ----------------- | ------------------------ | --------------------------- | --------- |
| `v-model:checked` | 当前值，即是否选中       | `boolean`                   | `false`   |
| `label`           | 选项文本                 | `string`                    |           |
| `type`            | 选项类型                 | `string`: `default\|button` | `default` |
| `inline`          | 是否为行内模式（二选一） | `boolean`                   | `true`    |
| `block`           | 是否为块级模式（二选一） | `boolean`                   | `false`   |

### 插槽

| 名称      | 说明                       |
| --------- | -------------------------- |
| `default` | 选项内容，优先级高于属性值 |

### 事件

| 名称     | 说明               | 参数                                         |
| -------- | ------------------ | -------------------------------------------- |
| `change` | 切换选中状态时触发 | `{ event: '事件对象', checked: '是否选中' }` |

## CheckboxGroup API

### 属性

| 名称            | 说明                         | 类型                                                        | 默认值    |
| --------------- | ---------------------------- | ----------------------------------------------------------- | --------- |
| `v-model:value` | 当前值，即选中项的 `value`   | 多选框 `Array[string\|number]` <br> 单选框 `string\|number` |           |
| `options`       | 选项数组                     | `Array[object\|string\|number]`                             |           |
| `optionType`    | 选项类型                     | `string`: `default\|button`                                 | `default` |
| `optionInline`  | 选项是否为行内模式（二选一） | `boolean`                                                   | `false`   |
| `optionBlock`   | 选项是否为块级模式（二选一） | `boolean`                                                   | `true`    |

### 属性.options

`string|number` 类型的选项会格式化为 `{ value, label }`

| 名称    | 说明                              | 类型             |
| ------- | --------------------------------- | ---------------- |
| `value` | 选项值                            | `string\|number` |
| `label` | 选项文本，为空时使用 `value` 的值 | `string\|number` |

### 插槽

| 名称      | 说明                       | 参数                   |
| --------- | -------------------------- | ---------------------- |
| `default` | 选项内容，优先级高于属性值 | `{ option: '当前项' }` |

### 事件

| 名称     | 说明           | 参数                                                                            |
| -------- | -------------- | ------------------------------------------------------------------------------- |
| `change` | 切换选项时触发 | `{ option: '当前项', value: '当前项的 value', checkedValue: '选中项的 value' }` |
