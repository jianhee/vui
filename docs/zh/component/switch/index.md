# Switch 开关

## 基础用法

1. `v-model:checked` 选中状态
2. `emits.change` 切换选中状态时触发，参数为 `v-model:checked` 的值

<preview path="./demos/basic.vue"></preview>

## 文字描述

1. `activeText` 选中状态的文字描述
2. `inactiveText` 未选中状态的文字描述

<preview path="./demos/text.vue"></preview>

## 切换前执行的方法

`props.beforeChange`

1. 示例 `async checked => true|false`
2. 参数为 `v-model:checked` 的值
3. 返回 `true`（允许切换）或 `false`（停止切换）

<preview path="./demos/before-change.vue"></preview>
