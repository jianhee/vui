## 单个选项

1. `v-model:checked` 选中状态
2. `props.label` 选项文本
3. `slot.default` 选项文本后的自定义内容
4. `@change` 切换选中状态时触发，参数为 `v-model:checked` 的值

<preview path="@src/component/checkbox/demos/option.vue"></preview>

## 选项组

1. `v-model:value` 选中项的 `value`
2. `props.options` 选项组，选项 `option` 可选的格式有
   1. 对象 `option.label` 选项的文本，`option.value` 选项的值
   2. 字符串/数字 `option` 选项的文本和值，会自动格式化为对象格式
3. `slot.default` 选项文本后的自定义内容，参数为 `{ option }`
4. `@change` 切换选项时触发，参数为 `v-model:value` 和当前 `option` 的值

<preview path="@src/component/checkbox/demos/group.vue"></preview>

## 按钮类型

1. 单个选项：`props.type` 设置为 `button`
2. 选项组子选项：`props.optionType` 设置为 `button`

<preview path="@src/component/checkbox/demos/type.vue"></preview>

## 显示模式

1. 单个选项：`props.block` 或 `props.inline` 默认行内模式
2. 选项组：`props.optionBlock` 或 `props.optionInline` 子选项默认块级模式

<preview path="@src/component/checkbox/demos/display.vue"></preview>
