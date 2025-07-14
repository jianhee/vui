# Dropdown 下拉框

## 基础用法

1. 下拉框由 `default` 插槽（触发器）和 `dropdown` 插槽（下拉内容）两部分组成
2. 打开关闭时分别触发 `open` 和 `close` 事件

<preview path="./demos/basic.vue"></preview>

## 触发方式

使用 `trigger` 属性定义触发方式

<preview path="./demos/trigger.vue"></preview>

## 下拉方法

1. 使用 `open()` 方法手动打开下拉框，此时可以省略 `default` 插槽，通常用于多个元素打开同一个下拉框的情况，比如列表项中的右键菜单
2. 使用 `close()` 方法手动关闭下拉框

<preview path="./demos/method.vue"></preview>

## API

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
