对话框/抽屉的 API 几乎完全一致，UI 略有差异

## 基础用法

1. `v-model:visible` 显示状态，默认 `false`
2. `props.placement` 出现位置，仅抽屉有效，可选的值有 `left` 左侧（默认）、`right` 右侧
3. `@open` 和 `@close` 切换显示状态时触发

对话框/抽屉由三部分组成

1.  `props.title` 标题，默认 `null`，不显示顶栏
2.  `slots.default` 中间内容
3.  `slots.footer` 底栏内容

<preview path="@doc/component/dialog/demos/basic.vue"></preview>

## 更多用法

1. `props.showClose` 是否显示关闭按钮，默认 `true`
2. `props.closeOnClickModal` 是否在点击遮罩时关闭，默认 `true`

<preview path="@doc/component/dialog/demos/more.vue"></preview>

<!--@include: ../../../_parts/style.md-->

### 内容宽度

`props.width` 默认值对话框 `50%` / 抽屉 `30%`，默认单位 `px`，格式为 `Number|String`

<preview path="@doc/component/dialog/demos/width.vue"></preview>
