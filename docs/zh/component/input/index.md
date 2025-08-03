# Input 输入框

## 示例

### 基础用法

- 使用 `v-model:value` 属性绑定当前值
- 支持 `input`、`change`、`enter`、`clear` 等事件

<preview path="./demos/basic.vue"></preview>

### 原生属性

<!--@include: @/component/@parts/api-native.md-->

<preview path="./demos/native.vue"></preview>

### 前置图标

<!--@include: @/component/@parts/guild-icon.md-->

<preview path="./demos/icon.vue"></preview>

### 输入框尺寸

使用 `size` 属性定义输入框尺寸

<preview path="./demos/size.vue"></preview>

## API

### 基础属性

| 名称            | 说明                 | 类型                        | 默认值 |
| --------------- | -------------------- | --------------------------- | ------ |
| `v-model:value` | 当前值，即输入框的值 | `string\|number`            |        |
| `icon`          | 前置图标             | `string\|component\|object` |        |
| `size`          | 输入框尺寸           | `string`: `medium\|small`   |        |

### 原生属性

<!--@include: @/component/@parts/api-native.md-->

| 名称          | 说明     | 类型      | 默认值  |
| ------------- | -------- | --------- | ------- |
| `disabled`    | 是否禁用 | `boolean` | `false` |
| `maxlenth`    | 最大长度 | `number`  |         |
| `placeholder` | 占位符   | `string`  |         |

### 事件

| 名称     | 说明               | 参数                                     |
| -------- | ------------------ | ---------------------------------------- |
| `input`  | 输入值时触发       | `{ event: '事件对象', value: '当前值' }` |
| `change` | 修改值时触发       | `{ event: '事件对象', value: '当前值' }` |
| `enter`  | 按下回车键时触发   | `{ event: '事件对象', value: '当前值' }` |
| `clear`  | 点击清空按钮时触发 | `{ event: '事件对象', value: '当前值' }` |
