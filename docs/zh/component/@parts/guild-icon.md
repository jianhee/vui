<!-- 图标属性 -->

::: details
`icon` 相关的属性可以添加前置或后置图标，它的值和 `<VIcon>` 组件的属性值一致，示例如下：

| 名称        | 等同于             | 示例                                               | 渲染结果                             |
| ----------- | ------------------ | -------------------------------------------------- | ------------------------------------ |
| `icon`      | `VIcon.props.icon` | `:icon="name\|component"`                          | `<VIcon :icon="name\|component" />`  |
| `iconProps` | `VIcon.props`      | `:icon-props="{ size: "xxx", color: 'xxx', ... }"` | `<VIcon :size="xxx" :color="xxx" />` |

:::
