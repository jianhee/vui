# Form 表单

## 基础用法

1. 表单由 `<VForm>`（容器）和 `<VFormItem>`（项）两部分组成，必须将两个组件放在一起使用
2. 表单项由 `label` 属性（左侧文本）和 `default` 插槽（右侧内容）两部分组成

<preview path="./demos/basic.vue"></preview>

## 行内模式

使用表单的 `filedInline` 或 `filedBlock` 属性切换表单项的显示模式

<preview path="./demos/filed-display.vue"></preview>

## 标签的用法

使用表单的 `labelPosition` 和 `labelWidth` 属性定义标签的位置和宽度

<preview path="./demos/label.vue"></preview>

## Form API

### 属性

| 名称            | 说明                                   | 类型                         | 默认值         |
| --------------- | -------------------------------------- | ---------------------------- | -------------- |
| `filedInline`   | 表单项是否为行内模式                   | `boolean`                    | `false`        |
| `filedBlock`    | 表单项是否为块级模式                   | `boolean`                    | `true`         |
| `labelPosition` | 标签位置                               | `string`: `left\|right\|top` | `left`         |
| `labelWidth`    | 标签宽度 <br> 行内模式和顶部标签不生效 | `string(带单位)\|number(px)` | 最长标签的宽度 |

### 插槽

| 名称      | 说明                                | 参数 |
| --------- | ----------------------------------- | ---- |
| `default` | 显示内容，只能是 `<VFormItem>` 组件 |      |

## FormItem API

### 属性

| 名称    | 说明     | 类型     | 默认值 |
| ------- | -------- | -------- | ------ |
| `label` | 左侧文本 | `string` |        |

### 插槽

| 名称      | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 右侧内容 |      |
