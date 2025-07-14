# DropdownMenu 下拉菜单

`<DropdownMenu>` 组件在 `<Dropdown>` 组件的基础上开发而成，继承 `<Dropdown>` 组件的所有 API，参考 [Dropdown](/component/dropdown)

## 基础用法

1. 使用 `items` 属性定义菜单项数组
2. 点击菜单项时触发 `click` 事件

<preview path="./demos/basic.vue"></preview>

## 选中菜单

1. 使用 `selectable` 属性开启选中功能，使用 `v-model:selectedKey` 属性绑定选中值
2. 选中菜单项时触发 `select` 事件

<preview path="./demos/select.vue"></preview>

## 继承用法

<preview path="./demos/dropdown.vue"></preview>

## API

### 属性

| 名称                  | 说明                                                        | 类型                            | 默认值  |
| --------------------- | ----------------------------------------------------------- | ------------------------------- | ------- |
| `items`               | 菜单项                                                      | `Array[object\|string\|number]` |         |
| `selectable`          | 是否可选中 <br> 可选时会记录选中值，所以菜单项的 `key` 必填 | `boolean`                       | `false` |
| `v-model:selectedKey` | 选中值，即选中项的 `key`                                    | `string\|number`                |         |

#### items

`string|number` 类型的菜单项会格式化为 `{ label }`

| 名称           | 说明                                                                   | 类型                        | 默认值  |
| -------------- | ---------------------------------------------------------------------- | --------------------------- | ------- |
| `key`          | 唯一标识                                                               | `string\|number`            |         |
| `label\|title` | 文本                                                                   | `string\|number`            |         |
| `icon`         | 前置图标，参考 [Button](/component/button#前置图标) 组件的 `icon` 属性 | `string\|component\|object` |         |
| `divider`      | 是否添加分隔符                                                         | `boolean`                   | `false` |

### 事件

| 名称     | 说明                                     | 参数                                                                   |
| -------- | ---------------------------------------- | ---------------------------------------------------------------------- |
| `click`  | 点击菜单项时触发                         | `{ item: '当前项', key: '当前项的 key' }`                              |
| `select` | 选中菜单项时触发，已选中的项不会重复触发 | `{ item: '当前项', key: '当前项的 key', selectedKey: '选中项的 key' }` |
