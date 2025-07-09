# Tree 虚拟化树

## 基础用法

1. 使用 `data` 属性定义节点数据，数据量大时必须使用 `treeHeight` 属性或者 CSS 限制树高度
2. 左右键点击节点时分别触发 `node-click` 和 `node-contextmenu` 事件

::: details 示例中的节点数据
<<< @/component/table/composables/index.js
:::

<preview path="./demos/basic.vue"></preview>

## 自定义节点

1. 使用 `treeIndent`、`nodeIndent`、`nodeHeight`、`currentNodeId`、`customNode` 等属性定义节点的多种用法
2. 使用 `title` 的值或 `default` 插槽定义节点内容

<preview path="./demos/node.vue"></preview>

<!-- 数据状态 -->
<!--@include: ../table/parts/data-state.md-->

## 懒加载

使用 `isLeaf` 和 `loadData` 属性定义懒加载节点的功能

<preview path="./demos/load.vue"></preview>

## 默认展开

使用 `expandedNodeIds` 属性定义默认展开的节点，懒加载也会自动执行

<preview path="./demos/expand.vue"></preview>

## 筛选

使用 `filterMethod` 属性定义筛选方法

<preview path="./demos/filter.vue"></preview>

<!-- 拖拽排序 -->
<!--@include: ../table/parts/drag-sort-guild.md-->

### 单个树

<preview path="./demos/drag-sort.vue"></preview>

### 树和列表

<preview path="../table/demos/drag-sort-multi.vue"></preview>

## API

### 属性

| 名称              | 说明                                                                                             | 类型                                                    | 默认值    |
| ----------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | --------- |
| `loading`         | 是否正在加载数据                                                                                 | `boolean`                                               | `false`   |
| `emptyText`       | 空数据时显示的文本内容                                                                           | `string`                                                | `No Data` |
| `data`            | 树数据                                                                                           | `Array[Object]`                                         |           |
| `treeHeight`      | 树高度 <br> 必须使用此属性或 CSS 限制高度，否则会渲染全部数据                                    | `string(带单位)\|number(px)`                            |           |
| `treeIndent`      | 树整体缩进                                                                                       | `number`                                                | `0`       |
| `nodeHeight`      | 节点高度，用于计算虚拟列表的显示内容                                                             | `number`                                                | `30`      |
| `nodeIndent`      | 节点缩进                                                                                         | `number`                                                | `15`      |
| `currentNodeId`   | 当前节点 `id`，用于高亮当前节点                                                                  | `string\|number`                                        |           |
| `customNode`      | 自定义节点属性的方法 <br> 参数为当前节点和当前项，返回一个可以使用 `v-bind` 绑定到节点元素的对象 | `function`: `({ node, item }) => ({ key: value, ... })` |           |
| `expandedNodeIds` | 默认展开的节点 `id`                                                                              | `Array[string\|number]`                                 |           |
| `isLeaf`          | 校验是否是叶子节点 <br> 参数为当前项，返回 `true` 表示是叶子节点                                 | `function`: `item => boolean`                           |           |
| `loadData`        | 加载数据的方法 <br> 参数为当前节点和当前项，返回 `true` 表示加载成功                             | `function`: `({ node, item }) => Promise<boolean>`      |           |
| `filterMethod`    | 筛选数据方法 <br> 参数为当前项，返回 `false` 表示不包含当前项                                    | `function`: `({ item }) => boolean`                     |           |

#### data

| 名称    | 说明                                        | 类型             | 默认值 |
| ------- | ------------------------------------------- | ---------------- | ------ |
| `id`    | 节点唯一标识                                | `string\|number` | 必填   |
| `title` | 节点标题，默认使用 `title` 的值渲染节点内容 | `string`         |        |

### 插槽

| 名称      | 说明                                         | 参数                                   |
| --------- | -------------------------------------------- | -------------------------------------- |
| `default` | 节点的自定义内容，优先级大于字段的值         | `{ node: '当前节点', item: '当前项' }` |
| `empty`   | 空数据时显示的自定义内容，优先级大于字段的值 |                                        |

### 事件

| 名称               | 说明               | 参数                                                       |
| ------------------ | ------------------ | ---------------------------------------------------------- |
| `node-click`       | 左键点击节点时触发 | `{ event: '事件对象', node: '当前节点', item: '当前项'  }` |
| `node-contextmenu` | 右键点击节点时触发 | `{ event: '事件对象', node: '当前节点', item: '当前项'  }` |

<!--@include: ../table/parts/drag-sort-api.md-->
