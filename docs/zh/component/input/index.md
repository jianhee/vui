# Input 输入框

## 基础用法

1. `v-model:value` 输入框的值
2. `@input` 输入值时触发，参数为 `v-model:value` 的值，下同
3. `@change` 修改值时触发
4. `@enter` 按下 `Enter` 键时触发
5. `@clear` 点击清空按钮时触发

<preview path="./demos/basic.vue"></preview>

<!--@include: @/component/@parts/props-native.md-->

<preview path="./demos/native.vue"></preview>

## 前置图标

<!--@include: @/component/@parts/props-icon.md-->

<preview path="./demos/icon.vue"></preview>

## 输入框尺寸

`props.size` 可选的值有 `medium` 中号（默认）、`small` 小号

<preview path="./demos/size.vue"></preview>
