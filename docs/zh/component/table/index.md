# Table 虚拟化表格

## 基础用法

1. 使用 `rowItems` 和 `colItems` 属性定义行列数据，数据量大时必须使用 `tableHeight` 属性或者 CSS 限制表格高度
2. 右键点击行时触发 `row-contextmenu` 事件

::: details 示例中的行列数据
<<< @/component/table/composables/index.js
:::

<preview path="./demos/basic.vue"></preview>

<!--@include: ./parts/data-state.md-->

## 列的用法

1. 使用 `colResizable`、`colWidthsStorageKey` 等属性拖拽调整列宽并存到本地
2. 使用 `row[col.key]` 的值或 `default` 插槽定义单元格内容

<preview path="./demos/cols.vue"></preview>

## 行的用法

使用 `rowHeight`、`currentRowId`、`customRow` 等属性定义行的多种用法

<preview path="./demos/rows.vue"></preview>

## 可选择的行

1. 使用 `selectable` 属性开启行多选的功能，使用 `v-model:selectedRowIds` 属性绑定选中值
2. 默认点击选择框触发选择，可使用 `dragSelectable`、`dragSelectAreaWidth`、`ctrlASelectable` 等属性定义多种选择方式
3. 切换选中项时触发 `selection-change` 事件

<preview path="./demos/selection.vue"></preview>

<!--@include: ./parts/drag-sort-guild.md-->

### 单个列表

<preview path="./demos/drag-sort.vue"></preview>

### 树和列表

<preview path="./demos/drag-sort-multi.vue"></preview>

## 表格 API

### 属性

| 名称                  | 说明                                                                               | 类型                                             | 默认值    |
| --------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------ | --------- |
| `loading`             | 是否正在加载数据                                                                   | `boolean`                                        | `false`   |
| `emptyText`           | 空数据时显示的文本内容                                                             | `string`                                         | `No Data` |
| `rowItems`            | 行数据                                                                             | `Array[Object]`                                  |           |
| `colItems`            | 列数据                                                                             | `Array[Object]`                                  | 必填      |
| `tableHeight`         | 表格高度 <br> 必须使用此属性或 CSS 限制高度，否则会渲染全部数据                    | `string(带单位)\|number(px)`                     |           |
| `rowHeight`           | 行高，用于计算虚拟列表的显示内容                                                   | `number`                                         | `35`      |
| `currentRowId`        | 当前行 `id`，用于高亮当前行                                                        | `string\|number`                                 |           |
| `customRow`           | 自定义行属性的方法 <br> 参数为当前行，返回一个可以使用 `v-bind` 绑定到行元素的对象 | `function`: `({ row }) => ({ key: value, ... })` |           |
| `colResizable`        | 是否可以调整列宽                                                                   | `boolean`                                        | `true`    |
| `colWidthsStorageKey` | 如果需要记住调整后的列宽，需要设置一个键名                                         | `string`                                         |           |

#### rowItems

| 名称 | 说明       | 类型             | 默认值 |
| ---- | ---------- | ---------------- | ------ |
| `id` | 行唯一标识 | `string\|number` | 必填   |

#### colItems

| 名称        | 说明                                                   | 类型             | 默认值         |
| ----------- | ------------------------------------------------------ | ---------------- | -------------- |
| `key`       | 列唯一标识，默认使用 `row[col.key]` 的值渲染单元格内容 | `string\|number` | 必填           |
| `title`     | 列标题                                                 | `string`         |                |
| `width`     | 列宽                                                   | `number`         | 根据列数量平分 |
| `cellClass` | 单元格类名                                             | `string`         |                |

### 插槽

| 名称      | 说明                                         | 参数                               |
| --------- | -------------------------------------------- | ---------------------------------- |
| `default` | 单元格的自定义内容，优先级大于字段的值       | `{ row: '当前行', col: '当前列' }` |
| `empty`   | 空数据时显示的自定义内容，优先级大于字段的值 |                                    |

### 事件

| 名称              | 说明             | 参数                                    |
| ----------------- | ---------------- | --------------------------------------- |
| `row-contextmenu` | 右键点击行时触发 | `{ event: '事件对象', row: '当前行'  }` |

## 行多选 API

### 属性

| 名称                     | 说明                                                                                 | 类型                    | 默认值  |
| ------------------------ | ------------------------------------------------------------------------------------ | ----------------------- | ------- |
| `selectable`             | 是否可以选择行，这是多选的总开关                                                     | `boolean`               | `false` |
| `v-model:selectedRowIds` | 选中值，即选中项的 `id`                                                              | `Array[string\|number]` |         |
| `dragSelectable`         | 是否可以拖拽鼠标框选                                                                 | `boolean`               | `true`  |
| `dragSelectAreaWidth`    | 左侧框选触发区域宽度 <br> 默认只能从底部空白区域开始框选，设置后也可以从左侧开始框选 | `number`                | `0`     |
| `ctrlASelectable`        | 是否可以 `ctrl + a` 全选                                                             | `boolean`               | `true`  |

### 事件

| 名称               | 说明             | 参数                                                      |
| ------------------ | ---------------- | --------------------------------------------------------- |
| `selection-change` | 切换选中项时触发 | `{ selectedItems: '选中项', selectedIds: '选中项的 id' }` |

<!--@include: ./parts/drag-sort-api.md-->
