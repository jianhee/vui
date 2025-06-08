# Input 输入框

## 基础用法

1. `v-model:value` 输入框的值，默认 `null`
2. `@input` 输入值时触发，参数为 `v-model:value` 的值，下同
3. `@change` 修改值时触发
4. `@enter` 按下 `Enter` 键时触发
5. `@clear` 点击清空按钮时触发

<preview path="./demos/basic.vue"></preview>

## 原生属性

支持所有原生 `input` 标签的属性

<preview path="./demos/origin.vue"></preview>

## 前置图标

<!--@include: ../../_parts/icon.md-->

<preview path="./demos/icon.vue"></preview>

## 输入框尺寸

`props.size` 可选的值有 `medium` 中号（默认）、`small` 小号

<preview path="./demos/size.vue"></preview>
