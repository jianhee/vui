# Table 虚拟化表格

## 基础用法

1. `props.tableHeight` 表格高度，不带单位时默认 `px`，或者用 CSS 限制高度，否则会渲染全部数据
2. `props.rowItems` 行数据 `[Object]`
   1. `Object.id` 行唯一标识
   2. `Object.xxx` 行自定义字段
3. `props.colItems` 列数据 `[Object]`
   1. `Object.key` 列唯一标识，单元格默认显示 `row[col.key]` 的值
   2. `Object.title` 列标题
   3. `Object.width` 列宽，默认根据列数量平分
   4. `Object.cellClass` 单元格类名

::: details 示例中的行列数据
<<< @/component/table/composables/index.js
:::

<preview path="./demos/basic.vue"></preview>

## 行的用法

1. `props.rowHeight` 行高，用于计算虚拟列表的显示内容，默认 `35`
2. `props.currentRowId` 当前行 `id`，设置后高亮当前行
3. `props.customRow` 自定义行属性的方法
   1. 示例 `row => ({ key: value, ... })`
   2. 参数为当前行数据
   3. 返回一个可以使用 `v-bind` 绑定到行元素的值
4. `emits.row-contextmenu` 右键点击行时触发，参数为 `{ row: '当前行', event: '点击事件' }`

<preview path="./demos/rows.vue"></preview>

## 列的用法

1. `props.colResizable` 是否可以调整列宽，默认 `false`
2. `props.colWidthsStorageKey` 列宽本地存储的 `key`
3. `slots.default` 自定义单元格内容，参数为 `{ ids: '当前行', col: '当前列' }`

<preview path="./demos/cols.vue"></preview>

## 可选择

1. `props.selectable` 是否可选择，默认 `false`
2. `v-model:selectedRowKeys` 选中项的 `key` 数组
3. `emits.selection-change` 切换选中项时触发，参数为 `{ items: '选中项', key: 'v-model:selectedRowKeys 的值' }`

<preview path="./demos/selection.vue"></preview>
