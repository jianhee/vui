# Slider 滑块

## 示例

### 基础用法

使用 `v-model:value` 属性绑定当前值

<preview path="./demos/basic.vue"></preview>

### 原生属性

<preview path="./demos/state.vue"></preview>

### 限制范围

使用 `min` 和 `max` 属性限制范围

<preview path="./demos/limit.vue"></preview>

### 文字提示框

使用 `tooltip` 属性定义文字提示框内容

<preview path="./demos/tooltip.vue"></preview>

### 右侧内容

使用 `suffix` 属性/插槽定义轨道右侧内容

<preview path="./demos/suffix.vue"></preview>

## API

### 基础属性

| 名称            | 说明               | 类型                                                                                    | 默认值          |
| --------------- | ------------------ | --------------------------------------------------------------------------------------- | --------------- |
| `v-model:value` | 当前值，即滑块的值 | `number`                                                                                |                 |
| `max`           | 最大值             | `number`                                                                                | `100`           |
| `min`           | 最小值             | `number`                                                                                | `0`             |
| `tooltip`       | 提示框内容         | - `null` 不显示提示框 <br> - `function` : `value => {}` 的返回值 <br> - `any`：直接显示 | `v-model:value` |
| `suffix`        | 轨道右侧内容       | 同 `tooltip`                                                                            | `null`          |

### 原生属性

<!--@include: @/component/@parts/api-native.md-->

| 名称       | 说明           | 类型      | 默认值  |
| ---------- | -------------- | --------- | ------- |
| `disabled` | 是否为禁用状态 | `boolean` | `false` |
| `readonly` | 是否为只读状态 | `boolean` | `false` |

### 插槽

| 名称     | 说明         | 参数                                         |
| -------- | ------------ | -------------------------------------------- |
| `suffix` | 轨道右侧内容 | `{ value: '当前值', tooltip: '提示框内容' }` |
