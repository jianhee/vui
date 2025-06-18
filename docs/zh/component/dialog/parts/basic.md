::: tip
对话框和抽屉的 API 几乎完全一致，UI 略有差异。
:::

## 基础用法

1. `v-model:visible` 显示状态，默认 `false`
2. `props.placement` 抽屉的出现位置，仅抽屉有效，可选的值有 `left` 左侧（默认）、`right` 右侧
3. `emits.open` 打开时触发
4. `emits.close` 关闭时触发

对话框和抽屉各自由三部分组成：

1.  `props.title` 标题，为空时不显示顶栏
2.  `slots.default` 中间内容
3.  `slots.footer` 底栏内容

<preview path="@docs/component/dialog/demos/basic.vue"></preview>

## 关闭操作

1. `props.showClose` 是否显示关闭按钮，默认 `true`
2. `props.closeOnClickModal` 是否在点击遮罩时关闭，默认 `true`

<preview path="@docs/component/dialog/demos/close.vue"></preview>

<!--@include: @/component/@parts/props-style.md-->

### 内容宽度

`props.width` 对话框默认 `50%`，抽屉默认 `30%`，不带单位时默认 `px`

<preview path="@docs/component/dialog/demos/width.vue"></preview>
