# Form 表单

## 基础用法

表单由两部分组成

1. `VForm` 表单容器，`slots.default` 只能是 `VFormItem` 组件
2. `VFormItem` 表单项，`props.label` 左侧文本，`slots.default` 右侧内容

<preview path="./demos/basic.vue"></preview>

## 显示模式

表单项默认块级模式，`props.filedInline` 设为 `true` 或 `props.filedBlock` 设为 `false` 变为行内模式

<preview path="./demos/filed-display.vue"></preview>

## 标签

1. `props.labelPosition` 标签位置，可选的值有 `left` 左侧（默认）、`right` 右侧、`top` 顶部
2. `props.labelWidth` 标签宽度，数字或字符串，默认取最长标签的宽度，省略单位时默认 `px`，并且行内模式和顶部标签不生效

<preview path="./demos/label.vue"></preview>
