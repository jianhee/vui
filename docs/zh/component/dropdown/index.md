# Dropdown 下拉框

## 示例

### 基础用法

下拉框由 `default` 插槽（触发器）和 `dropdown` 插槽（下拉内容）两部分组成

<preview path="./demos/basic.vue"></preview>

### 触发事件

从打开到关闭依次触发 `open`、`opened` 、`close` 、`closed` 四个事件

<preview path="./demos/event.vue"></preview>

### 触发方式

使用 `trigger` 属性定义触发方式

<preview path="./demos/trigger.vue"></preview>

### 隐藏方式

使用 `closeOnClickDropdown` 属性定义隐藏方式

<preview path="./demos/close.vue"></preview>

### 下拉方法

- 使用 `open()` 方法手动打开下拉框，此时可以省略 `default` 插槽，通常用于多个元素打开同一个下拉框的情况，比如列表项中的右键菜单
- 使用 `close()` 方法手动关闭下拉框

<preview path="./demos/method.vue"></preview>

## API

<!--@include: ./parts/api.md -->
