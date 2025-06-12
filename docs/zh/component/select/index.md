# Select 选择器

## 基础用法

1. `v-model:value` 选中项的 `value`
1. `props.items` 选项组，支持 `[Object|Number|String]` 类型
   1. `Object.label` 选项文本，为空时使用 `value` 的值
   2. `Object.value` 选项值
   3. `Number|String` 格式化为 `Object.label` 和 `Object.value`
1. `@change` 切换选项时触发，参数为 `{ option: '当前项', value: 'v-model:value 的值' }`

<preview path="./demos/basic.vue"></preview>

<!--@include: @/component/@parts/props-native.md-->

<preview path="./demos/native.vue"></preview>

## 选择器尺寸

`props.size` 可选的值有 `medium` 中号（默认）、`small` 小号

<preview path="./demos/size.vue"></preview>
