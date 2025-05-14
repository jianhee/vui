# Checkbox 多选框

## 单独用法

1. `v-model:checked` 选中状态
2. `props.label` 文本，`slot.default` 文本后的自定义内容（括号内）
3. `props.display` 显示类型，`inline` 行内（默认），`block` 独占一行
4. `@change` 切换选中状态时触发，返回选中状态

## 分组用法

1. `v-model:value` 选中项的 `value`
2. `props.items` 选项
   1. `item.value` 每项的值
   1. `item.label` 每项的文本，`slot.default` 文本后的自定义内容（括号内）
3. `props.direction` 排列方向
   1. `vertical` 纵向（每项独占一行，默认）
   2. `horizontal` 横向（所有项共用一行）
4. `@change` 切换选项时触发，返回选中项的 `value`
