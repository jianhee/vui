# Table 虚拟化表格

## 基础用法

1. 使用 `rowItems` 和 `colItems` 属性定义行列数据
2. 使用 `tableHeight` 属性或者 CSS 限制表格高度

::: details 示例中的行列数据
<<< @/component/table/composables/index.js
:::

<preview path="./demos/basic.vue"></preview>

## 行的用法

1. 使用 `rowHeight` 属性定义行高
2. 使用 `currentRowId` 属性高亮当前行
3. 使用 `customRow` 属性自定义行属性
4. 右键点击行时触发 `row-contextmenu` 事件

<preview path="./demos/rows.vue"></preview>

## 列的用法

1. 使用 `colResizable` 属性控制是否可以调整列宽，使用 `colWidthsStorageKey` 属性可以记住调整后的列宽
2. 单元格默认显示 `row[col.key]` 的值，可以使用 `default` 插槽自定义内容

<preview path="./demos/cols.vue"></preview>

## 行多选

1. 使用 `selectable` 属性控制是否可以选择行，使用 `v-model:selectedRowIds` 属性绑定选中值
2. 使用 `selectAreaGap` 属性定义左侧框选区域的宽度
3. 切换选中项时触发 `selection-change` 事件

<preview path="./demos/selection.vue"></preview>

## 表格相关 API

### 属性

| 名称                  | 说明                                                                                     | 类型                                       | 默认值  |
| --------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------ | ------- |
| `tableHeight`         | 表格高度，数字自动补全单位 `px` <br> 必须使用表格属性或 CSS 限制高度，否则会渲染全部数据 | `string\|number`                           |         |
| `rowItems`            | 行数据                                                                                   | `Array[Object]`                            |         |
| `rowHeight`           | 行高，用于计算虚拟列表的显示内容                                                         | `number`                                   | `35`    |
| `currentRowId`        | 当前行 `id`，用于高亮当前行                                                              | `string\|number`                           |         |
| `customRow`           | 自定义行属性的方法 <br> 参数为当前行，返回一个对象，使用 `v-bind` 绑定到行元素           | `function`(`row => ({ key: value, ... })`) |         |
| `colItems`            | 列数据                                                                                   | `Array[Object]`                            | 必填    |
| `colResizable`        | 是否可以调整列宽                                                                         | `boolean`                                  | `false` |
| `colWidthsStorageKey` | 如果需要记住调整后的列宽，需要设置一个键名                                               | `string`                                   |         |

#### rowItems

| 名称 | 说明       | 类型             | 默认值 |
| ---- | ---------- | ---------------- | ------ |
| `id` | 行唯一标识 | `string\|number` | 必填   |

#### colItems

| 名称        | 说明                                           | 类型             | 默认值         |
| ----------- | ---------------------------------------------- | ---------------- | -------------- |
| `key`       | 列唯一标识，单元格默认显示 `row[col.key]` 的值 | `string\|number` | 必填           |
| `title`     | 列标题                                         | `string`         |                |
| `width`     | 列宽                                           | `number`         | 根据列数量平分 |
| `cellClass` | 单元格类名                                     | `string`         |                |

### 插槽

| 名称      | 说明                             | 参数                               |
| --------- | -------------------------------- | ---------------------------------- |
| `default` | 单元格内容，有值时会替换默认内容 | `{ row: '当前行', col: '当前列' }` |

### 事件

| 名称              | 说明             | 参数                                    |
| ----------------- | ---------------- | --------------------------------------- |
| `row-contextmenu` | 右键点击行时触发 | `{ event: '事件对象', row: '当前行'  }` |

## 行多选相关 API

### 属性

| 名称                     | 说明                                                                                   | 类型                    | 默认值  |
| ------------------------ | -------------------------------------------------------------------------------------- | ----------------------- | ------- |
| `selectable`             | 是否可以选择行，支持点击选择、鼠标框选、`Ctrl + A` 全选                                | `boolean`               | `false` |
| `selectAreaGap`          | 左侧鼠标框选区域的宽度 <br> 默认只能从底部空白区域开始框选，设置后也可以从左侧开始框选 | `number`                | `0`     |
| `v-model:selectedRowIds` | 选中值，即选中项的 `id`                                                                | `Array[string\|number]` |         |

### 事件

| 名称               | 说明             | 参数                                                      |
| ------------------ | ---------------- | --------------------------------------------------------- |
| `selection-change` | 切换选中项时触发 | `{ selectedItems: '选中项', selectedIds: '选中项的 id' }` |
