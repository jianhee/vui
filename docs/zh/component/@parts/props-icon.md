::: tip
`props.icon` 可选的值有三种格式，分别是 `<VIcon>` 组件的 `name`、`component`、`props`，示例如下：

- 图标名称 `:icon="name"` 渲染成 `<VIcon :name="xxx" />`
- 图标组件 `:icon="component"` 渲染成 `<VIcon :component="xxx" />`
- 图标属性 `:icon="{ name|component: "xxx", size: "xxx", ... }"` 渲染成 `<VIcon :name|component="xxx" :size="xxx" />`

:::
