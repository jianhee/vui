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
2. `props.tipFormat` 格式化提示框内容的方法 `value => value`

<preview path="./demos/tip.vue"></preview>
