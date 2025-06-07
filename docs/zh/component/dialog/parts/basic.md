对话框和抽屉拥有几乎相同的 API，只是 UI 体验不同。

## 基础用法

1. `v-model:visible` 显示状态
2. `props.placement` 抽屉出现位置，可选的值有 `left` 左侧（默认）、`right` 右侧
3. `@open` 和 `@close` 切换显示状态时触发

对话框/抽屉由三部分组成

1.  `props.title` 标题，默认为空，不显示顶栏
2.  `slots.default` 中间内容，默认为空
3.  `slots.footer` 底栏内容，默认为空

<preview path="@doc/component/dialog/demos/basic.vue"></preview>

## 更多用法

1. `props.showClose` 是否显示关闭按钮，默认 `true`
2. `props.closeOnClickModal` 是否在点击遮罩时关闭，默认 `true`
3. `props.width` 内容宽度，数字或字符串，对话框默认 `50%`，抽屉默认 `30%`，省略单位时默认 `px`

<preview path="@doc/component/dialog/demos/more.vue"></preview>
