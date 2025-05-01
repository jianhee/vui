# Select 选择器

## 基础用法

1. `v-model:value` 选中项的 `value`
1. `props.items` 选项
   1. `item.value` 选项的值
   2. `item.label` 选项的文本
1. `@change` 切换选项时触发，返回选中项的 `value`

:::preview
demo-preview=@demos/select/basic.vue
:::

## 原生属性

1. `props.disabled` 是否禁用

:::preview
demo-preview=@demos/select/origin.vue
:::

## 选择器尺寸

1. `props.size` 可选的值有以下几种

:::preview
demo-preview=@demos/select/size.vue
:::

## 显示文本

1. `props.text` 有时只需要显示文本，不需要选项，此时可以使用 `props.text` 来指定文本内容

:::preview
demo-preview=@demos/select/text.vue
:::
