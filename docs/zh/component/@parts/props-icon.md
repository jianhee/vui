::: info `icon` 属性的值有以下三种格式，内部会处理后传给 `<VIcon>` 组件

- 图标名称 `:icon="name"` 渲染成 `<VIcon :name="xxx" />`
- 图标组件 `:icon="component"` 渲染成 `<VIcon :component="xxx" />`
- 图标属性 `:icon="{ name|component: "xxx", size: "xxx", ... }"` 渲染成 `<VIcon :name|component="xxx" :size="xxx" />`

:::
