::: tip
多选框和单选框的 API 几乎完全一致，UI 略有差异，各自提供两个独立的组件：

- `<VCheckbox>` 和 `<VRadio>` 用于单个选项
- `<VCheckboxGroup>` 和 `<VRadioGroup>` 用于选项组

:::

## 单个选项

1. `v-model:checked` 选中状态，默认 `false`
2. `props.label` 选项文本
3. `slots.default` 选项文本后的自定义内容
4. `emits.change` 切换选中状态时触发，参数为 `v-model:checked` 的值

<preview path="@docs/component/checkbox/demos/option.vue"></preview>

## 选项组

1. `v-model:value` 选中项的 `value`，多选框为 `Array` 类型，单选框为 `Number|String` 类型
2. `props.options` 选项组，兼容 `Number|String` 类型，格式化为 `Object.label` 和 `Object.value`
   1. `Object.label` 选项文本，为空时使用 `value` 的值
   2. `Object.value` 选项值
3. `slots.default` 选项文本后的自定义内容，参数为 `{ option }`
4. `emits.change` 切换选项时触发，参数为 `{ option: '当前项', value: '当前项的 value' }`

<preview path="@docs/component/checkbox/demos/group.vue"></preview>

## 按钮类型的选项

### 单个选项

`props.type` 设为 `button`

<preview path="@docs/component/checkbox/demos/option-type.vue"></preview>

### 选项组

`props.optionType` 设为 `button`

<preview path="@docs/component/checkbox/demos/group-type.vue"></preview>

## 选项的显示模式

### 单个选项

1. 行内模式（默认）
2. 块级模式 `props.inline` 设为 `false` 或 `props.block` 设为 `true`

<preview path="@docs/component/checkbox/demos/option-display.vue"></preview>

### 选项组

1. 行内模式 `props.optionInline` 设为 `true` 或 `props.optionBlock` 设为 `false`
2. 块级模式（默认）

<preview path="@docs/component/checkbox/demos/group-display.vue"></preview>
