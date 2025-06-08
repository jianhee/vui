# Dropdown 下拉框

## 基础用法

1. `props.trigger` 触发方式，可选的值有 `hover`（默认）、`click`、`contextmenu`
2. `slots.default` 触发元素，`slots.content` 内容元素
3. `@open` 和 `@close` 切换显示状态时触发

<preview path="./demos/basic.vue"></preview>

## 下拉方法

1. 内部打开：通过 `slots.default` 自动处理，适用于单一元素
2. 外部打开：通过 `dropdownRef.open(event)` 方法手动处理，可以脱离触发元素，适用于多个元素打开同一个下拉框，比如列表项的右键菜单

<preview path="./demos/method.vue"></preview>

## 下拉菜单

`props.menus` 默认 `null`，格式为 `[{ key, label|title, icon, divider }, 1, '1']`

1. `Object.key` 唯一标识
2. `Object.label|title` 文本
3. `Object.icon` 前置图标，参考 [Btn 图标按钮](/component/btn#图标按钮)
4. `Object.divider` 是否添加分隔符
5. `Number|String` 自动格式化为 `Object.label`

<preview path="./demos/menu.vue"></preview>

## 菜单选中

1. `props.selectable` 是否可以选中，默认 `false`，设为 `true` 时菜单项的 `key` 必传
2. `v-model:selectedKey` 选中项的 `key`，默认 `null`
3. `@menu-click` 点击菜单项时触发，参数为 `{ item: '当前项', key: '当前项的 key'}`
4. `@menu-select-change` 切换菜单项时触发，参数为 `{ item: '当前项', key: '绑定值'}`

<preview path="./demos/menu-select.vue"></preview>

## 其它

样式和类名默认绑定到触发元素上，通过 `props.contentClass` 和 `props.contentStyle` 可以绑定到内容元素上
