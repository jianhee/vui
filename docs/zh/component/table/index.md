# Table 虚拟化表格

## 基础用法

1. 使用 `rowItems` 和 `colItems` 属性定义行列数据
2. 使用 `tableHeight` 属性或者 CSS 限制表格高度

::: details 示例中的行列数据
<<< @/component/table/composables/index.js
:::

<preview path="./demos/basic.vue"></preview>

## 列的用法

1. 使用 `colResizable`、`colWidthsStorageKey` 等属性拖拽调整列宽并记住
2. 默认使用 `row[col.key]` 的值渲染单元格的内容，可使用 `default` 插槽替换为自定义内容

<preview path="./demos/cols.vue"></preview>

## 行的用法

1. 使用 `rowHeight`、`currentRowId`、`customRow` 等属性定义行的多种用法
2. 右键点击行时触发 `row-contextmenu` 事件

<preview path="./demos/rows.vue"></preview>

## 可选择的行

1. 使用 `selectable` 属性开启行多选的功能，使用 `v-model:selectedRowIds` 属性绑定选中值
2. 默认点击选择框触发选择，可使用 `dragSelectable`、`dragSelectAreaWidth`、`ctrlASelectable` 等属性定义多种选择方式
3. 切换选中项时触发 `selection-change` 事件

<preview path="./demos/selection.vue"></preview>

## 可拖拽的行

1. 使用 `dragSortable` 属性开启拖拽排序的功能，使用 `dragSortGroup` 属性定义两个组件之间的拖拽
2. 使用 `canDropInto` 属性可以将拖拽项移入目标项
3. 拖拽结束后触发`drag-sort-end` 事件

### 单个列表

<preview path="./demos/drag-sort.vue"></preview>

### 树和列表

<preview path="./demos/drag-sort-multi.vue"></preview>

## 表格 API

### 属性

| 名称                  | 说明                                                                           | 类型                                       | 默认值  |
| --------------------- | ------------------------------------------------------------------------------ | ------------------------------------------ | ------- |
| `tableHeight`         | 表格高度 <br> 必须使用表格属性或 CSS 限制高度，否则会渲染全部数据              | `string(带单位)\|number(px)`               |         |
| `rowItems`            | 行数据                                                                         | `Array[Object]`                            |         |
| `rowHeight`           | 行高，用于计算虚拟列表的显示内容                                               | `number`                                   | `35`    |
| `currentRowId`        | 当前行 `id`，用于高亮当前行                                                    | `string\|number`                           |         |
| `customRow`           | 自定义行属性的方法 <br> 参数为当前行，返回一个对象，使用 `v-bind` 绑定到行元素 | `function`(`row => ({ key: value, ... })`) |         |
| `colItems`            | 列数据                                                                         | `Array[Object]`                            | 必填    |
| `colResizable`        | 是否可以调整列宽                                                               | `boolean`                                  | `false` |
| `colWidthsStorageKey` | 如果需要记住调整后的列宽，需要设置一个键名                                     | `string`                                   |         |

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

| 名称      | 说明                             | 参数                               |
| --------- | -------------------------------- | ---------------------------------- |
| `default` | 单元格内容，有值时会替换默认内容 | `{ row: '当前行', col: '当前列' }` |

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

## 行拖拽 API

### 属性

| 名称            | 说明                                                                                                                                                                                     | 类型                            | 默认值  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------- |
| `dragSortable`  | 是否可以拖拽排序，支持拖拽多项                                                                                                                                                           | `boolean`                       | `false` |
| `dragSortGroup` | 多组件之间拖拽的分组标识 <br> 默认在单个树或列表内部拖拽，设置分组标识并提供一个全局状态(见示例)，就可以在树和列表之间拖拽 <br> 如果树节点包含列表，可能还需要在拖拽结束后手动更新源数据 | `string`                        |         |
| `canDropInto`   | 校验是否可以移入目标 <br> 参数为目标项，返回 `true` 表示可以移入                                                                                                                         | `function`(`target => Boolean`) |         |

### 事件

| 名称            | 说明                                         | 参数                                         |
| --------------- | -------------------------------------------- | -------------------------------------------- |
| `drag-sort-end` | 拖拽结束时触发，只有拖拽开始的那个组件会触发 | `{ newSourceItems: '更新后的来源列表数据' }` |
