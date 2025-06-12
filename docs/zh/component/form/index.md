# Form 表单

表单提供两个组件，必须将父子组件放在一起使用。

1. 父组件 `<VForm>` 表单容器
2. 子组件 `<VFormItem>` 表单项

## 基础用法

将容器作为根组件，它只有一个默认插槽 `slots.default` 且内容只能是 `<VFormItem>`

1. `itemProps.label` 表单项的左侧文本
2. `itemSlots.default` 表单项的右侧内容

<preview path="./demos/basic.vue"></preview>

## 表单项的显示模式

1. 块级模式（默认）
2. 行内模式 `formProps.filedInline` 设为 `true` 或 `formProps.filedBlock` 设为 `false`

<preview path="./demos/filed-display.vue"></preview>

## 标签的位置和宽度

1. `formProps.labelPosition` 标签位置，可选的值有 `left` 左侧（默认）、`right` 右侧、`top` 顶部
2. `formProps.labelWidth` 标签宽度，仅块级模式的左侧/右侧标签有效，默认取最长标签的宽度，缺省单位时默认 `px`

<preview path="./demos/label.vue"></preview>
