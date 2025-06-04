## 单个选项

1. `v-model:checked` 选中状态
2. `props.label` 选项文本
3. `slot.default` 选项文本后的自定义内容
4. `@change` 切换选中状态时触发，参数为 `v-model:checked` 的值

<preview path="@src/component/checkbox/demos/option.vue"></preview>

## 选项组

1. `v-model:value` 选中项的 `value`
2. `props.options` 选项组
   1. 对象格式 `[{ label: '文本', value: '值' }]`
   2. 字符串/数字格式 `[1, 2, 3, 4]` 选项的文本和值相同
3. `slot.default` 选项文本后的自定义内容，参数为 `{ option }`
4. `@change` 切换选项时触发，参数为 `v-model:value` 的值和当前 `option` 的值

<preview path="@src/component/checkbox/demos/group.vue"></preview>

## 按钮类型

#### 单个选项

`props.type` 设为 `button`

<preview path="@src/component/checkbox/demos/option-type.vue"></preview>

#### 选项组

`props.optionType` 设为 `button`

<preview path="@src/component/checkbox/demos/group-type.vue"></preview>

## 显示模式

#### 单个选项

默认行内模式，`props.block` 设为 `true`，或者 `props.inline` 设为 `false` 变为块级模式

<preview path="@src/component/checkbox/demos/option-display.vue"></preview>

#### 选项组

和单个选项相反，子选项默认块级模式，`props.optionInline` 设为 `true`，或者 `props.optionBlock` 设为 `false` 变为行内模式

<preview path="@src/component/checkbox/demos/group-display.vue"></preview>
