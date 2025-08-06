# Form 表单

## 示例

### 基础用法

- 表单由 `<VForm>`（表单容器）和 `<VFormItem>`（表单项）两部分组成，必须将两个组件放在一起使用
- 表单项由 `label` 属性/插槽（左侧文本）和 `default` 插槽（右侧内容）两部分组成

<preview path="./demos/basic.vue"></preview>

### 行内模式

<preview path="./demos/filed-display.vue"></preview>

### 标签用法

<preview path="./demos/label.vue"></preview>

## Form API

### 通用属性

这类属性可以同时用于 `FormItem` 和 `Form` 组件，两者的用法完全一样，但是 `FormItem` 组件的优先级高于 `Form` 组件。

| 名称            | 说明         | 类型（默认单位）                     | 默认值                                |
| --------------- | ------------ | ------------------------------------ | ------------------------------------- |
| `labelPosition` | 标签位置     | `string`: `left\|right\|top\|bottom` | `left`                                |
| `labelAlign`    | 标签对齐方式 | `string`: `left\|center\|right`      | 左侧位置 `right` <br> 其它位置 `left` |
| `labelWidth`    | 标签宽度     | `string\|number(?px)`                | 最长标签的宽度                        |

### 独有属性

| 名称          | 说明                           | 类型（默认单位） | 默认值  |
| ------------- | ------------------------------ | ---------------- | ------- |
| `filedInline` | 表单项是否为行内模式（二选一） | `boolean`        | `false` |
| `filedBlock`  | 表单项是否为块级模式（二选一） | `boolean`        | `true`  |

### 插槽

| 名称      | 说明                                |
| --------- | ----------------------------------- |
| `default` | 显示内容，只能是 `<VFormItem>` 组件 |

## FormItem API

### 属性

| 名称    | 说明     | 类型     |
| ------- | -------- | -------- |
| `label` | 左侧文本 | `string` |

### 插槽

| 名称      | 说明                       |
| --------- | -------------------------- |
| `label`   | 左侧文本，优先级高于属性值 |
| `default` | 右侧内容                   |
