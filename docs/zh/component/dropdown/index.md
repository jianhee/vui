# Dropdown 下拉菜单

## 示例

### 基础用法

- 使用 `items` 属性定义菜单项数组
- 点击菜单项时触发 `click` 事件

<preview path="./demos/basic.vue"></preview>

### 可选中菜单

- 使用 `selectable` 属性开启选中功能，使用 `v-model:selectedKey` 属性绑定选中值
- 选中菜单项时触发 `select` 事件

<preview path="./demos/selectable.vue"></preview>

### 隐藏方式

<preview path="./demos/close.vue"></preview>

### 控制样式

<preview path="./demos/style.vue"></preview>

### 继承 Popover

<preview path="./demos/popover.vue"></preview>

## API

下拉菜单依赖 `Popover` 组件，继承 `Popover` 组件的接口和用法

### 属性

| 名称                  | 说明                                                        | 类型                            | 默认值  |
| --------------------- | ----------------------------------------------------------- | ------------------------------- | ------- |
| `items\|options`      | 菜单项                                                      | `Array[object\|string\|number]` |         |
| `selectable`          | 是否可选中 <br> 可选时会记录选中值，所以菜单项的 `key` 必填 | `boolean`                       | `false` |
| `v-model:selectedKey` | 选中值，即选中项的 `key`                                    | `string\|number`                |         |
| `closeOnClickItem`    | 是否在点击菜单项时关闭下拉菜单                              | `boolean`                       | `true`  |

### 属性.items

`string|number` 类型的菜单项会格式化为 `{ label }`

| 名称           | 说明           | 类型               | 默认值  |
| -------------- | -------------- | ------------------ | ------- |
| `key`          | 唯一标识       | `string\|number`   |         |
| `label\|title` | 文本           | `string\|number`   |         |
| `icon`         | 前置图标       | `VIcon.props.icon` |         |
| `iconProps`    | 前置图标的属性 | `VIcon.props`      |         |
| `divider`      | 是否添加分隔符 | `boolean`          | `false` |

### 样式属性

<!--@include: @/component/@parts/api-style.md-->

| 名称        | 说明     | 类型（默认单位）      | 默认值 |
| ----------- | -------- | --------------------- | ------ |
| `maxWidth`  | 最大宽度 | `string\|number(?px)` |        |
| `minWidth`  | 最小宽度 | `string\|number(?px)` |        |
| `maxHeight` | 最大高度 | `string\|number(?px)` |        |

### 事件

| 名称     | 说明                                     | 参数                                                                   |
| -------- | ---------------------------------------- | ---------------------------------------------------------------------- |
| `click`  | 点击菜单项时触发                         | `{ item: '当前项', key: '当前项的 key' }`                              |
| `select` | 选中菜单项时触发，已选中的项不会重复触发 | `{ item: '当前项', key: '当前项的 key', selectedKey: '选中项的 key' }` |
