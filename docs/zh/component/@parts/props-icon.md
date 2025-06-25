::: tip
使用 `icon` 属性添加图标，可选的值有 `<VIcon>` 组件的 `name` 属性值、`component` 属性值、完整的 `props` 对象，示例如下：

- 图标名称 `:icon="name"` 渲染成 `<VIcon :name="xxx" />`
- 图标组件 `:icon="component"` 渲染成 `<VIcon :component="xxx" />`
- 图标属性 `:icon="{ name|component: "xxx", size: "xxx", ... }"` 渲染成 `<VIcon :name|component="xxx" :size="xxx" />`

:::
