# Form 表单

## 基础用法

表单由两个组件组成，每个组件由以下部分组成

1. `VForm` 表单容器
   1. `slots.default` 表单内容，只能是 `VFormItem` 组件
2. `VFormItem` 表单项
   1. `props.label` 左侧文本，默认 `null`
   2. `slots.default` 右侧内容

<preview path="./demos/basic.vue"></preview>

## 显示模式

表单项默认块级模式，`props.filedInline` 设为 `true` 或 `props.filedBlock` 设为 `false` 变为行内模式

<preview path="./demos/filed-display.vue"></preview>

## 标签

1. `props.labelPosition` 标签位置，可选的值有 `left` 左侧（默认）、`right` 右侧、`top` 顶部
2. `props.labelWidth` 标签宽度，仅块级模式的左侧/右侧标签有效，默认值取最长标签的宽度，默认单位 `px`，格式为 `Number|String`

<preview path="./demos/label.vue"></preview>
