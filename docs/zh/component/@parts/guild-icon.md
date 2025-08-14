<!-- 图标属性 -->

::: details
`icon` 相关的属性可以添加前置或后置图标，它的值和 `<VIcon>` 组件的属性值一致，示例如下：

| 值       | 格式                | 示例                                                   | 渲染结果                                       |
| -------- | ------------------- | ------------------------------------------------------ | ---------------------------------------------- |
| 图标名称 | `name` 属性值       | `:icon="name"`                                         | `<VIcon :name="xxx" />`                        |
| 图标组件 | `component` 属性值  | `:icon="component"`                                    | `<VIcon :component="xxx" />`                   |
| 图标属性 | 完整的 `props` 对象 | `:icon="{ name\|component: "xxx", size: "xxx", ... }"` | `<VIcon :name\|component="xxx" :size="xxx" />` |

:::
