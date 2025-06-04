# Dropdown 下拉框

## 基础用法

1. `props.trigger` 触发方式，可选的值有 `hover` 鼠标滑过（默认）、`click` 左键点击、`contextmenu` 右键点击
2. `slots.default` 触发元素，`slots.content` 内容元素
3. `@open` 和 `@close` 切换显示状态时触发

<preview path="./demos/basic.vue"></preview>

## 下拉方法

`dropdownRef.open(event)` 不依赖触发元素手动打开下拉框，在多个触发元素使用同一个下拉框时更好用

<preview path="./demos/method.vue"></preview>
