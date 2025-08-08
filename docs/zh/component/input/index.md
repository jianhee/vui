# Input 输入框

## 示例

### 基础用法

- 使用 `v-model:value` 属性绑定当前值
- 支持 `input`、`change`、`enter` 等事件

<preview path="./demos/basic.vue"></preview>

### 原生属性

<!--@include: @/component/@parts/api-native.md-->

<preview path="./demos/native.vue"></preview>

### 清除按钮

- 使用 `clearable` 属性启用清除按钮
- 点击清除按钮时触发 `clear` 事件

<preview path="./demos/clearable.vue"></preview>

### 密码框

<preview path="./demos/password.vue"></preview>

### 前置图标

<!--@include: @/component/@parts/guild-icon.md-->

<preview path="./demos/icon.vue"></preview>

### 输入框尺寸

使用 `size` 属性定义输入框尺寸

<preview path="./demos/size.vue"></preview>

## API

### 基础属性

| 名称            | 说明                                   | 类型                        | 默认值   |
| --------------- | -------------------------------------- | --------------------------- | -------- |
| `v-model:value` | 当前值，即输入框的值                   | `string\|number`            |          |
| `clearable`     | 是否显示清除按钮                       | `boolean`                   | `false`  |
| `showPassword`  | 是否显示切换密码按钮（仅密码类型有效） | `boolean`                   | `false`  |
| `icon`          | 前置图标                               | `string\|component\|object` |          |
| `size`          | 输入框尺寸                             | `string`: `medium\|small`   | `medium` |

### 原生属性

<!--@include: @/component/@parts/api-native.md-->

| 名称          | 说明         | 类型      | 默认值  |
| ------------- | ------------ | --------- | ------- |
| `autofocus`   | 是否自动聚焦 | `boolean` | `false` |
| `disabled`    | 是否禁用     | `boolean` | `false` |
| `maxLength`   | 最大长度     | `number`  |         |
| `placeholder` | 占位文字     | `string`  |         |
| `type`        | 输入框类型   | `string`  | `text`  |

### 事件

| 名称     | 说明               | 参数                                     |
| -------- | ------------------ | ---------------------------------------- |
| `input`  | 输入值时触发       | `{ event: '事件对象', value: '当前值' }` |
| `change` | 修改值时触发       | `{ event: '事件对象', value: '当前值' }` |
| `enter`  | 按下回车键时触发   | `{ event: '事件对象', value: '当前值' }` |
| `clear`  | 点击清空按钮时触发 | `{ event: '事件对象', value: '当前值' }` |
