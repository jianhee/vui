# Form 表单

## 基础用法

1. 表单内容由表单容器 `<VForm>` 和表单项 `<VFormItem>` 两部分组成，必须将两个组件放在一起使用
2. 表单项内容由 `label` 属性（左侧文本）和 `default` 插槽（右侧内容）两部分组成

<preview path="./demos/basic.vue"></preview>

## 行内模式

将表单的 `filedInline` 属性设为 `true`，或者将 `filedBlock` 属性设为 `false`

<preview path="./demos/filed-display.vue"></preview>

## 定义标签

使用表单的 `labelPosition` 和 `labelWidth` 属性定义标签的位置和宽度

<preview path="./demos/label.vue"></preview>

## Form API

### 属性

| 名称            | 说明                                                          | 类型                         | 默认值         |
| --------------- | ------------------------------------------------------------- | ---------------------------- | -------------- |
| `filedInline`   | 表单项是否为行内模式                                          | `boolean`                    | `false`        |
| `filedBlock`    | 表单项是否为块级模式                                          | `boolean`                    | `true`         |
| `labelPosition` | 标签位置                                                      | `string`(`left\|right\|top`) | `left`         |
| `labelWidth`    | 标签宽度，数字自动补全单位 `px` <br> 行内模式和顶部标签不生效 | `string\|number`             | 最长标签的宽度 |

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
