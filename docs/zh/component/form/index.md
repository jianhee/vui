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

### 表单状态

<preview path="./demos/state.vue"></preview>

### 表单校验

- 如果需要校验表单，需要在 `<Form>` 组件中传入 `model` 和 `rules` 属性，同时在 `<FormItem>` 组件中传入 `prop` 属性
- 如果需要手动触发校验，可以使用 `<Form>` 组件的 `validate` 方法

<preview path="./demos/valid.vue"></preview>

## Form/FormItem API

两个组件都有的接口

### 属性

`FormItem` 组件的优先级高于 `Form` 组件

| 名称            | 说明         | 类型（默认单位）                     | 默认值                                |
| --------------- | ------------ | ------------------------------------ | ------------------------------------- |
| `labelPosition` | 标签位置     | `string`: `left\|right\|top\|bottom` | `left`                                |
| `labelAlign`    | 标签对齐方式 | `string`: `left\|center\|right`      | 左侧位置 `right` <br> 其它位置 `left` |
| `labelWidth`    | 标签宽度     | `string\|number(?px)`                | 最长标签的宽度                        |

## Form API

### 基础属性

| 名称          | 说明                           | 类型（默认单位） | 默认值  |
| ------------- | ------------------------------ | ---------------- | ------- |
| `filedInline` | 表单项是否为行内模式（二选一） | `boolean`        | `false` |
| `filedBlock`  | 表单项是否为块级模式（二选一） | `boolean`        | `true`  |
| `model`       | 表单的数据对象                 | `Object`         |         |
| `rules`       | 表单的校验规则                 | `Object`         |         |

### 原生属性

<!--@include: @/component/@parts/api-native.md-->

| 名称       | 说明                       | 类型      | 默认值  |
| ---------- | -------------------------- | --------- | ------- |
| `disabled` | 表单内的元素是否为禁用状态 | `boolean` | `false` |
| `readonly` | 表单内的元素是否为只读状态 | `boolean` | `false` |

### 属性.rules

| 名称        | 说明                                                                               | 类型                                               | 默认值  |
| ----------- | ---------------------------------------------------------------------------------- | -------------------------------------------------- | ------- |
| `trigger`   | 校验触发时机                                                                       | `string`: `input\|submit`                          | `input` |
| `message`   | 校验不通过时的提示信息                                                             | `string`                                           |         |
| `required`  | 是否必填，必填项会在标签前面添加 `*` 号                                            | `boolean`                                          | `false` |
| `pattern`   | 是否符合正则                                                                       | `RegExp`                                           |         |
| `validator` | 自定义校验规则 <br> 参数为当前值，返回 `true` 表示校验通过，返回其它值表示错误信息 | `async function`: `value => Promise<true\|string>` |         |

### 插槽

| 名称      | 说明                                |
| --------- | ----------------------------------- |
| `default` | 显示内容，只能是 `<VFormItem>` 组件 |

### 方法

| 名称       | 说明                                            | 类型                                                  |
| ---------- | ----------------------------------------------- | ----------------------------------------------------- |
| `validate` | 校验所有表单项，返回 `valid: true` 表示校验通过 | `async function`: `() => Promise<{ valid: boolean }>` |

## FormItem API

### 属性

| 名称    | 说明           | 类型     |
| ------- | -------------- | -------- |
| `label` | 标签文本       | `string` |
| `prop`  | 表单项的字段名 | `string` |

### 插槽

| 名称      | 说明                         |
| --------- | ---------------------------- |
| `label`   | 标签的内容，优先级高于属性值 |
| `default` | 表单项的内容                 |
