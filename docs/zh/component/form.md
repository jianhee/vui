# Form 表单

## 基础用法

1. `VForm` 父组件容器
   1. `props.labelWidth` 表单项的标签宽度
2. `VFormFiled` 子组件表单项
   1. `props.label` 左侧文本
   2. `slot.default` 右侧内容

:::preview
demo-preview=@demos/form/basic.vue
:::

## 排列方向

1. `props.direction` 可选的值有以下几种
   1. `vertical` 纵向（每项独占一行，默认）
   2. `horizontal` 横向（所有项共用一行）

:::preview
demo-preview=@demos/form/direction.vue
:::

## 对齐方式

1. `props.labelPosition` 可选的值有以下几种
   1. `left` 左对齐（默认）
   2. `right` 右对齐
   3. `top` 顶部对齐

:::preview
demo-preview=@demos/form/label-position.vue
:::
