## 基础用法

1. `v-model:visible` 显示状态
2. `props.title` 标题
3. `props.width` 内容宽度，对话框默认 `50%`，抽屉默认 `30%`
4. `props.placement` 抽屉出现位置，可选的值有 `left` 左侧（默认）、`right` 右侧
5. `props.showClose` 是否显示关闭按钮，默认 `true`
6. `props.closeOnClickModal` 是否在点击遮罩时关闭，默认 `true`
7. `slot.default` 中间内容，`slot.footer` 底栏内容
8. `@open` 和 `@close` 切换显示状态时触发

<preview path="@src/component/dialog/demos/basic.vue"></preview>
