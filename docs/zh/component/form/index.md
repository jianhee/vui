# Form 表单

## 基础用法

表单由两个组件组成，必需一起使用：

1. `<VForm>` 表单容器，它的 `slots.default` 只能是 `<VFormItem>`
2. `<VFormItem>` 表单项，它的 `props.label` 是左侧文本，`slots.default` 是右侧内容

<preview path="./demos/basic.vue"></preview>

## 表单项的显示模式

1. 块级模式（默认）
2. 行内模式 `props.filedInline` 设为 `true` 或 `props.filedBlock` 设为 `false`

<preview path="./demos/filed-display.vue"></preview>

## 标签的位置和宽度

1. `props.labelPosition` 标签位置，可选的值有 `left` 左侧（默认）、`right` 右侧、`top` 顶部
2. `props.labelWidth` 标签宽度，仅块级模式的左侧/右侧标签有效，默认取最长标签的宽度，省略单位时默认 `px`

<preview path="./demos/label.vue"></preview>
