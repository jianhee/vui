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

<!--@include: @/component/@parts/props-icon.md-->

<preview path="./demos/icon.vue"></preview>

## 按钮尺寸

`props.size` 可选的值有 `large` 大按钮、`medium` 中按钮（默认）、`small` 小按钮

<preview path="./demos/size.vue"></preview>

## 显示模式

1. 行内模式（默认）
2. 块级模式 `props.inline` 设为 `false` 或 `props.block` 设为 `true`

<preview path="./demos/display.vue"></preview>

<!--@include: @/component/@parts/props-style.md-->

### 圆角尺寸

1. `props.radius`
2. `style.border-radius` 默认 `4px`
3. `style.--vui-btn-radius`

<preview path="./demos/radius.vue"></preview>
