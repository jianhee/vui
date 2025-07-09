# Dropdown 下拉框

## 基础用法

1. 组件内容由 `default` 插槽（触发器）和 `dropdown` 插槽（下拉框内容）两部分组成
2. 打开关闭时分别触发 `open` 和 `close` 事件

<preview path="./demos/dropdown-basic.vue"></preview>

## 触发方式

使用 `trigger` 属性设置触发方式

<preview path="./demos/dropdown-trigger.vue"></preview>

## 下拉方法

使用 `open()` 和 `close()` 方法可以手动打开和关闭下拉框，此时可以省略 `default` 插槽，通常用于多个元素打开同一个下拉框的情况，比如列表项中的右键菜单

<preview path="./demos/dropdown-method.vue"></preview>

## 构建菜单

1. 使用 `menus` 属性可以在下拉框中自动构建菜单，此时可以省略 `dropdown` 插槽
2. 点击菜单项时触发 `select` 事件

<preview path="./demos/menu-basic.vue"></preview>

## 选择菜单

1. 使用 `selectable` 属性开启菜单的选择功能，使用 `v-model:selectedKey` 属性绑定选中值
2. 切换选中项时触发 `selection-change` 事件

<preview path="./demos/menu-selection.vue"></preview>

## 下拉框 API

### 属性

| 名称      | 说明     | 类型                                  | 默认值  |
| --------- | -------- | ------------------------------------- | ------- |
| `trigger` | 触发方式 | `string`: `hover\|click\|contextmenu` | `hover` |

### 插槽

| 名称       | 说明                               | 参数 |
| ---------- | ---------------------------------- | ---- |
| `default`  | 触发器，必须是有效的 html DOM 元素 |      |
| `dropdown` | 下拉框内容                         |      |

### 事件

| 名称    | 说明       | 参数 |
| ------- | ---------- | ---- |
| `open`  | 打开时触发 |      |
| `close` | 关闭时触发 |      |

### 方法

| 名称          | 说明       | 参数                    |
| ------------- | ---------- | ----------------------- |
| `open(event)` | 打开下拉框 | `{ event: '事件对象' }` |
| `close()`     | 关闭下拉框 |                         |

## 菜单 API

### 属性

| 名称                  | 说明                                                            | 类型                            | 默认值  |
| --------------------- | --------------------------------------------------------------- | ------------------------------- | ------- |
| `menus`               | 菜单项                                                          | `Array[object\|string\|number]` |         |
| `selectable`          | 菜单是否可选择 <br> 可选时会记录选中值，所以菜单项的 `key` 必填 | `boolean`                       | `false` |
| `v-model:selectedKey` | 菜单的选中值，即选中项的 `key`                                  | `string\|number`                |         |

#### menus

`string|number` 类型的菜单项会格式化为 `{ label }`

| 名称           | 说明                                                             | 类型                        | 默认值  |
| -------------- | ---------------------------------------------------------------- | --------------------------- | ------- |
| `key`          | 唯一标识                                                         | `string\|number`            |         |
| `label\|title` | 文本                                                             | `string\|number`            |         |
| `icon`         | 前置图标，参考 [Btn](/component/btn#前置图标) 组件的 `icon` 属性 | `string\|component\|object` |         |
| `divider`      | 是否添加分隔符                                                   | `boolean`                   | `false` |

### 事件

| 名称               | 说明                 | 参数                                                                   |
| ------------------ | -------------------- | ---------------------------------------------------------------------- |
| `select`           | 点击菜单项时触发     | `{ item: '当前项', key: '当前项的 key' }`                              |
| `selection-change` | 切换菜单选中项时触发 | `{ item: '当前项', key: '当前项的 key', selectedKey: '选中项的 key' }` |
