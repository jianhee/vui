# Row 行

## 示例

### 标签类型

使用 `tag` 属性定义标签类型

<preview path="./demos/tag.vue"></preview>

### 文本样式

使用 `center`、`ellipsis` 等属性定义文本样式

<preview path="./demos/text-style.vue"></preview>

## API

### 属性

| 名称       | 说明             | 类型      | 默认值  |
| ---------- | ---------------- | --------- | ------- |
| `tag`      | 标签类型         | `string`  | `div`   |
| `center`   | 文字是否居中     | `boolean` | `false` |
| `ellipsis` | 文字是否溢出隐藏 | `boolean` | `false` |

### 插槽

| 名称      | 说明     |
| --------- | -------- |
| `default` | 显示内容 |
