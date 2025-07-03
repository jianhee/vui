# Switch 开关

## 基础用法

1. 使用 `v-model:checked` 属性绑定当前值
2. 切换选中状态时触发 `change` 事件

<preview path="./demos/basic.vue"></preview>

## 文字描述

使用 `activeText` 和 `inactiveText` 属性定义文字描述

<preview path="./demos/text.vue"></preview>

## 阻止切换

使用 `beforeChange` 属性定义切换前执行的方法

<preview path="./demos/before-change.vue"></preview>

## API

### 属性

| 名称              | 说明                                                        | 类型                                      | 默认值  |
| ----------------- | ----------------------------------------------------------- | ----------------------------------------- | ------- |
| `v-model:checked` | 当前值，即是否选中                                          | `boolean`                                 | `false` |
| `activeText`      | 选中状态的文字描述                                          | `string`                                  |         |
| `inactiveText`    | 未选中状态的文字描述                                        | `string`                                  |         |
| `beforeChange`    | 切换前执行的方法 <br> 参数为当前值，返回 `true`表示可以切换 | `function`: `checked => Promise<boolean>` |         |

### 事件

| 名称     | 说明               | 参数                      |
| -------- | ------------------ | ------------------------- |
| `change` | 切换选中状态时触发 | `{ checked：'是否选中' }` |
