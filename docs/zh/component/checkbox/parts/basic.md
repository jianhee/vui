多选框/单选框的 API 几乎完全一致，UI 略有差异，都提供两个组件

1. 单个选项：`VCheckbox` 和 `VRadio`
2. 选项组：`VCheckboxGroup` 和 `VRadioGroup`

## 单个选项

1. `v-model:checked` 选中状态，默认 `false`
2. `props.label` 选项文本
3. `slots.default` 选项文本后的自定义内容
4. `@change` 切换选中状态时触发，参数为 `v-model:checked` 的值

<preview path="@docs/component/checkbox/demos/option.vue"></preview>

## 选项组

1. `v-model:value` 选中项的 `value`，多选框格式为 `Array` 单选框格式为 `Number|String`
2. `props.options` 选项组，格式为 `[{ label, value }, 1, '1']`
   1. `Object.label` 选项文本
   2. `Object.value` 选项值
   3. `Number|String` 自动格式化为 `Object.label` 和 `Object.value`
3. `slots.default` 选项文本后的自定义内容，参数为 `{ option }`
4. `@change` 切换选项时触发，参数为 `{ option: '当前项', value: 'v-model:value 的值' }`

<preview path="@docs/component/checkbox/demos/group.vue"></preview>

## 选项的按钮类型

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
