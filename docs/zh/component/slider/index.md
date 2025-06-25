# Slider 滑块

## 基础用法

使用 `v-model:value` 属性绑定当前值

<preview path="./demos/basic.vue"></preview>

## 限制范围

使用 `min` 和 `max` 属性限制范围

<preview path="./demos/limit.vue"></preview>

## 提示框

使用 `showTip` 和 `tipFormatter` 属性定义提示框

<preview path="./demos/tip.vue"></preview>

## API

### 属性

| 名称            | 说明                                                                     | 类型                                  | 默认值 |
| --------------- | ------------------------------------------------------------------------ | ------------------------------------- | ------ |
| `v-model:value` | 当前值，即滑块的值                                                       | `number`                              |        |
| `min`           | 最小值                                                                   | `number`                              | `0`    |
| `max`           | 最大值                                                                   | `number`                              | `100`  |
| `showTip`       | 是否显示提示框                                                           | `boolean`                             | `true` |
| `tipFormatter`  | 提示框内容的格式化方法 <br> 参数为当前值，返回一个可以作为提示框内容的值 | `function`(`value => string\|number`) |        |
