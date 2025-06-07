# Btn 按钮

## 基础用法

1. `props.type` 按钮类型，可选的值有 `primary` 主按钮、`default` 默认按钮、`link` 链接按钮
2. `slots.default` 显示内容

<preview path="./demos/basic.vue"></preview>

## 禁用状态

`props.disabled` 设为 `true`

<preview path="./demos/disabled.vue"></preview>

## 加载状态

`props.loading` 设为 `true`

<preview path="./demos/loading.vue"></preview>

## 图标按钮

`props.icon` 可选的值有 `VIcon` 组件的 `name/component/props`

<preview path="./demos/icon.vue"></preview>

## 按钮尺寸

`props.size` 可选的值有 `large` 大按钮、`medium` 中按钮（默认）、`small` 小按钮

<preview path="./demos/size.vue"></preview>

## 显示模式

默认行内模式，`props.block` 设为 `true` 或 `props.inline` 设为 `false` 变为块级模式

<preview path="./demos/display.vue"></preview>

## 圆角尺寸

`props.radius` 数字或字符串，默认 `4px`，省略单位时默认 `px`

<preview path="./demos/radius.vue"></preview>
