# Input 输入框

## 示例

### 基础用法

- 使用 `v-model:value` 属性绑定当前值
- 使用 `placeholder` 属性定义占位文字
- 支持 `input`、`change`、`enter` 等事件

<preview path="./demos/basic.vue"></preview>

### 输入框状态

<preview path="./demos/state.vue"></preview>

### 清除按钮

- 使用 `clearable` 属性启用清除按钮
- 点击清除按钮时触发 `clear` 事件

<preview path="./demos/clearable.vue"></preview>

### 密码框

<preview path="./demos/password.vue"></preview>

### 自定义图标

- 使用 `prefixIcon` 和 `prefixIconProps` 属性定义前置图标
- 使用 `suffixIcon` 和 `suffixIconProps` 属性定义后置图标

<preview path="./demos/icon.vue"></preview>

### 自定义内容

使用 `prefix` 和 `suffix` 属性或插槽定义前置/后置内容
<preview path="./demos/prefix-suffix.vue"></preview>

### 自定义标签

使用 `prepend` 和 `append` 属性或插槽定义前置/后置标签
<preview path="./demos/prepend-append.vue"></preview>

### 输入框尺寸

使用 `size` 属性定义输入框尺寸

<preview path="./demos/size.vue"></preview>

### 最大输入长度

<preview path="./demos/maxlength.vue"></preview>

### 其它原生属性

<!--@include: @/component/@parts/api-native.md-->

<preview path="./demos/native.vue"></preview>

## API

### 基础属性

| 名称                                | 说明                                     | 类型                             | 默认值   |
| ----------------------------------- | ---------------------------------------- | -------------------------------- | -------- |
| `v-model:value`                     | 当前值，即输入框的值                     | `string\|number`                 |          |
| `clearable`                         | 是否显示清除按钮                         | `boolean`                        | `false`  |
| `showPassword`                      | 是否显示切换密码按钮（仅密码类型有效）   | `boolean`                        | `false`  |
| `showWordLimit`                     | 是否显示统计字数（仅限制输入长度时有效） | `boolean`                        | `false`  |
| `prefixIcon`/`suffixIcon`           | 前置/后置图标                            | `VIcon.props.icon`               |          |
| `prefixIconProps`/`suffixIconProps` | 前置/后置图标的属性                      | `VIcon.props`                    |          |
| `prefix`/`suffix`                   | 前置/后置内容                            | `string\|number`                 |          |
| `prepend`/`append`                  | 前置/后置标签                            | `string\|number`                 |          |
| `size`                              | 输入框尺寸                               | `string`: `large\|medium\|small` | `medium` |

### 原生属性

<!--@include: @/component/@parts/api-native.md-->

| 名称          | 说明           | 类型             | 默认值  |
| ------------- | -------------- | ---------------- | ------- |
| `autofocus`   | 是否自动聚焦   | `boolean`        | `false` |
| `disabled`    | 是否为禁用状态 | `boolean`        | `false` |
| `readonly`    | 是否为只读状态 | `boolean`        | `false` |
| `maxLength`   | 最大长度       | `string\|number` |         |
| `placeholder` | 占位文字       | `string`         |         |
| `type`        | 输入框类型     | `string`         | `text`  |

### 插槽

| 名称               | 说明          | 参数 |
| ------------------ | ------------- | ---- |
| `prefix`/`suffix`  | 前置/后置内容 |      |
| `prepend`/`append` | 前置/后置标签 |      |

### 事件

| 名称     | 说明               | 参数                                     |
| -------- | ------------------ | ---------------------------------------- |
| `input`  | 输入值时触发       | `{ event: '事件对象', value: '当前值' }` |
| `change` | 修改值时触发       | `{ event: '事件对象', value: '当前值' }` |
| `enter`  | 按下回车键时触发   | `{ event: '事件对象', value: '当前值' }` |
| `clear`  | 点击清空按钮时触发 | `{ event: '事件对象', value: '当前值' }` |
