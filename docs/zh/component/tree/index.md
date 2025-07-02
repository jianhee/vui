# Tree 虚拟化树

## 基础用法

1. 使用 `data` 属性定义节点数据，数据量大时必须使用 `treeHeight` 属性或者 CSS 限制树高度
2. 左右键点击节点时分别触发 `node-click` 和 `node-contextmenu` 事件

::: details 示例中的节点数据
<<< @/component/table/composables/index.js
:::

<preview path="./demos/basic.vue"></preview>

## 更多用法

1. 使用 `treeIndent` 和 `nodeIndent` 属性定义节点缩进
2. 使用 `nodeHeight`、`currentNodeId`、`expandNodeIds` 等属性定义节点的多种用法
3. 默认使用 `title` 的值渲染节点内容，可使用 `default` 插槽替换为自定义内容

<preview path="./demos/more.vue"></preview>

<!--@include: ../table/parts/drag-sort-guild.md-->

### 单个树

<preview path="./demos/drag-sort.vue"></preview>

### 树和列表

<preview path="../table/demos/drag-sort-multi.vue"></preview>

## API

### 属性

| 名称            | 说明                                                          | 类型                         | 默认值 |
| --------------- | ------------------------------------------------------------- | ---------------------------- | ------ |
| `data`          | 树数据                                                        | `Array[Object]`              |        |
| `treeHeight`    | 树高度 <br> 必须使用此属性或 CSS 限制高度，否则会渲染全部数据 | `string(带单位)\|number(px)` |        |
| `treeIndent`    | 树整体缩进                                                    | `number`                     | `0`    |
| `nodeHeight`    | 节点高度，用于计算虚拟列表的显示内容                          | `number`                     | `30`   |
| `nodeIndent`    | 节点缩进                                                      | `number`                     | `15`   |
| `currentNodeId` | 当前节点 `id`，用于高亮当前节点                               | `string\|number`             |        |
| `expandNodeIds` | 默认展开的节点 `id`                                           | `Array[string\|number]`      |        |

#### data

| 名称    | 说明                                      | 类型             | 默认值 |
| ------- | ----------------------------------------- | ---------------- | ------ |
| `id`    | 节点唯一标识                              | `string\|number` | 必填   |
| `title` | 节点标题，默认使用 `title` 的值渲染单元格 | `string`         |        |

### 插槽

| 名称      | 说明                             | 参数                               |
| --------- | -------------------------------- | ---------------------------------- |
| `default` | 节点格内容，有值时会替换默认内容 | `{ row: '当前行', col: '当前列' }` |

### 事件

| 名称               | 说明               | 参数                                       |
| ------------------ | ------------------ | ------------------------------------------ |
| `node-click`       | 左键点击节点时触发 | `{ event: '事件对象', node: '当前节点'  }` |
| `node-contextmenu` | 右键点击节点时触发 | `{ event: '事件对象', node: '当前节点'  }` |

<!--@include: ../table/parts/drag-sort-api.md-->
