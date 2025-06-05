# Form 表单

## 基础用法

1. `VForm` 表单容器
   1. `slots.default` 只能是 `VFormItem` 组件
2. `VFormItem` 表单项
   1. `props.label` 左侧文本
   2. `slots.default` 右侧内容

<preview path="./demos/basic.vue"></preview>

## 显示模式

表单项默认块级模式，`props.filedInline` 设为 `true` 或 `props.filedBlock` 设为 `false` 变为行内模式

<preview path="./demos/filed-display.vue"></preview>

## 标签

1. `props.labelPosition` 标签位置，可选的值有 `left` 左侧（默认）、`right` 右侧、`top` 顶部
2. `props.labelWidth` 标签宽度，默认 `4em`，并且行内模式和顶部标签不生效

<preview path="./demos/label.vue"></preview>
