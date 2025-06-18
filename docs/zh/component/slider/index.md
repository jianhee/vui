# Slider 滑块

## 基础用法

`v-model:value` 选中的值

<preview path="./demos/basic.vue"></preview>

## 限制范围

1. `props.min` 最小值，默认 `0`
2. `props.max` 最大值，默认 `100`

<preview path="./demos/limit.vue"></preview>

## 提示框

1. `props.showTip` 是否显示提示框，默认 `true`
2. `props.tipFormat` 提示框内容的格式化方法
   1. 示例 `value => value`
   2. 参数为 `v-model:value` 的值
   3. 返回一个可以作为提示框内容的值

<preview path="./demos/tip.vue"></preview>
