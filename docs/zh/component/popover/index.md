---
title: Popover 弹出框
---

<script setup>
import { useRoute } from 'vitepress';
const isShowContent = useRoute().path.includes('dropdown') === false
</script>

# {{ $frontmatter.title }}

## 示例

<!--@include: @/component/@parts/demo-component.md-->

### 基础用法

组件由触发元素和弹框元素两部分组成

<preview path="@docs/component/popover/demos/basic.vue"></preview>

<!--@include: @/component/popover/parts/demo.md-->

## API

### 属性

| 名称             | 说明                              | 类型                                                                                                                                                                      | 默认值          |
| ---------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `content`        | 弹出内容                          | `string\|number`                                                                                                                                                          |                 |
| `placement`      | 弹出位置                          | `string` 有以下四类 <br> - `top\|top-start\|top-end` <br> - `bottom\|bottom-start\|bottom-end` <br> - `right\|right-start\|right-end` <br> - `left\|left-start\|left-end` | `top`           |
| `trigger`        | 触发方式                          | `string` = `hover\|click\|contextmenu`                                                                                                                                    | `hover`         |
| `triggerElement` | 触发元素，一个 DOM 元素或组件对象 | `HTMLElement\|Object`                                                                                                                                                     | `slots.default` |
| `disabled`       | 是否禁用                          | `boolean`                                                                                                                                                                 | `false`         |

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

| 名称        | 说明                     | 参数                                                                                                                                                                       |
| ----------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open(ref)` | 打开弹框，参数表示参照物 | - `ref.el`: 等同于 `props.triggerElement` <br> - `ref.event`: 值为 `MouseEvent`，参照鼠标位置 <br> - `undefined`: 值为空时参照 `props.triggerElement` 或者 `slots.default` |
| `close()`   | 关闭弹框                 |                                                                                                                                                                            |
