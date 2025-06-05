# Dropdown 下拉框

## 基础用法

1. `props.trigger` 触发方式，可选的值有 `hover` 鼠标滑过（默认）、`click` 左键点击、`contextmenu` 右键点击
2. `slots.default` 触发元素，`slots.content` 内容元素
3. `@open` 和 `@close` 切换显示状态时触发

<preview path="./demos/basic.vue"></preview>

## 下拉方法

1. 内部打开：通过 `slots.default` 自动处理，适用于单一元素
2. 外部打开：通过 `dropdownRef.open(event)` 方法手动处理，适用于多个元素打开同一个下拉框，比如列表项的右键菜单

<preview path="./demos/method.vue"></preview>
