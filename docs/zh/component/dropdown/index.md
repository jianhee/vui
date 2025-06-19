# Dropdown 下拉框

## 基础用法

1. 下拉框由两个插槽组成，分别是 `slots.default` 触发器和 `slots.dropdown` 下拉框
2. `emits.open` 打开时触发
3. `emits.close` 关闭时触发

<preview path="./demos/dropdown-basic.vue"></preview>

## 触发方式

`props.trigger` 可选的值有 `hover`（默认）、`click`、`contextmenu`

<preview path="./demos/dropdown-trigger.vue"></preview>

## 下拉方法

如果不需要插槽，可以通过 `dropdown.open(event)` 方法手动打开下拉框。适用于多个元素打开同一个下拉框的情况，比如列表项的右键菜单。

<preview path="./demos/dropdown-method.vue"></preview>

## 下拉菜单

1. `props.menus` 菜单项 `[Object|Number|String]`
   1. `Object.key` 唯一标识
   2. `Object.label|title` 文本
   3. `Object.icon` 前置图标，参考 [Btn 按钮](/component/btn#前置图标) 组件的 `icon` 属性
   4. `Object.divider` 是否添加分隔符
   5. `Number|String` 类型会格式化为 `Object.label`
2. `emits.menu-click` 点击菜单项时触发，参数为 `{ item: '当前项', key: '当前项的 key'}`

<preview path="./demos/menu-basic.vue"></preview>

## 选中菜单

1. `props.selectable` 是否可以选中，默认 `false`，设为 `true` 时菜单项的 `key` 必传
2. `v-model:selectedKey` 选中项的 `key`
3. `emits.selection-change` 切换菜单项时触发，参数为 `{ item: '当前项', key: '当前项的 key'}`

<preview path="./demos/menu-selection.vue"></preview>
