# Popover 弹出框

## 示例

### 基础用法

组件由触发元素和弹框元素两部分组成

<preview path="./demos/basic.vue"></preview>

### 触发元素

默认使用 `default` 插槽定义触发元素，也可以使用 `triggerElement` 属性定义组件外的触发元素

<preview path="./demos/trigger-element.vue"></preview>

### 触发方式

使用 `trigger` 属性定义触发方式

<preview path="./demos/trigger-type.vue"></preview>

### 弹框内容

使用 `content` 属性或插槽定义弹框内容

<preview path="./demos/content.vue"></preview>

### 弹框位置

使用 `placement` 属性定义弹框位置

<preview path="./demos/placement.vue"></preview>

### 禁用状态

<preview path="./demos/disabled.vue"></preview>

### 调用方法

- 使用 `open()` 方法手动打开弹框，默认对齐参考元素的位置，也可以传入鼠标事件来对齐鼠标位置
- 使用 `close()` 方法关闭弹框

<preview path="./demos/method.vue"></preview>

### 触发事件

从打开到关闭依次触发 `open`、`opened` 、`close` 、`closed` 四个事件

<preview path="./demos/event.vue"></preview>

## API

### 属性

| 名称             | 说明                                               | 类型                                                                                                                                                                      | 默认值         |
| ---------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `content`        | 弹出内容                                           | `string`                                                                                                                                                                  | `''`           |
| `placement`      | 弹出位置                                           | `string` 有以下四类 <br> - `top\|top-start\|top-end` <br> - `bottom\|bottom-start\|bottom-end` <br> - `right\|right-start\|right-end` <br> - `left\|left-start\|left-end` | `top`          |
| `trigger`        | 触发方式                                           | `string` = `hover\|click\|contextmenu`                                                                                                                                    | `hover`        |
| `triggerElement` | 触发元素，可以是 DOM 元素或包含 DOM 元素的组件对象 | `HTMLElement`<br>`Object` = `{$el:HTMLElement}`                                                                                                                           | `default 插槽` |
| `disabled`       | 是否禁用                                           | `boolean`                                                                                                                                                                 | `false`        |

### 插槽

| 名称      | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 触发元素 |      |
| `content` | 弹出内容 |      |

### 事件

| 名称     | 说明               | 参数 |
| -------- | ------------------ | ---- |
| `open`   | 打开时触发         |      |
| `opened` | 打开动画结束时触发 |      |
| `close`  | 关闭时触发         |      |
| `closed` | 关闭动画结束时触发 |      |

### 方法

| 名称      | 说明     | 参数         |
| --------- | -------- | ------------ |
| `open()`  | 打开弹框 | `MouseEvent` |
| `close()` | 关闭弹框 |              |
