# Input 输入框

## 基础用法

1. `v-model:value` 输入框的值
1. `@input` 输入值时触发，返回输入框的值
1. `@change` 修改值时触发，返回输入框的值
1. `@enter` 按下 Enter 键时触发，返回输入框的值
1. `@clear` 点击清空按钮时触发

:::preview
demo-preview=./demos/basic.vue
:::

## 原生属性

1. `props.placeholder` 占位文本
1. `props.disabled` 是否禁用
1. `props.maxlength` 最大输入长度

:::preview
demo-preview=./demos/origin.vue
:::

## 前置图标

1. `props.icon` 可选的值有 `VIcon` 组件的 `name/component/props`

:::preview
demo-preview=./demos/icon.vue
:::

## 输入框尺寸

1. `props.size` 可选的值有以下几种

:::preview
demo-preview=./demos/size.vue
:::
