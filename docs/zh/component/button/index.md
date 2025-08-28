# Button 按钮

## 示例

### 基础用法

使用 `type` 属性定义按钮类型

<preview path="./demos/basic.vue"></preview>

### 原生属性

<!--@include: @/component/@parts/api-native.md-->

<preview path="./demos/native.vue"></preview>

### 打开链接

使用 `href` 属性定义点击跳转的地址

<preview path="./demos/href.vue"></preview>

### 加载状态

<preview path="./demos/loading.vue"></preview>

### 前置图标

<!--@include: @/component/@parts/guild-icon.md-->

<preview path="./demos/icon.vue"></preview>

### 按钮尺寸

使用 `size` 属性定义按钮尺寸

<preview path="./demos/size.vue"></preview>

### 块级模式

<preview path="./demos/display.vue"></preview>

### 控制样式

<!--@include: @/component/@parts/api-style.md-->

<preview path="./demos/style.vue"></preview>

## API

### 基础属性

| 名称      | 说明                                              | 类型                               | 默认值    |
| --------- | ------------------------------------------------- | ---------------------------------- | --------- |
| `type`    | 按钮类型                                          | `string`: `primary\|default\|link` | `default` |
| `href`    | 点击跳转的地址，有值时 `<button>` 转为 `<a>` 标签 | `string`                           |           |
| `loading` | 是否为加载状态                                    | `boolean`                          | `false`   |
| `icon`    | 前置图标                                          | `string\|component\|object`        |           |
| `size`    | 按钮尺寸                                          | `string`: `large\|medium\|small`   | `medium`  |
| `inline`  | 是否为行内模式（二选一）                          | `boolean`                          | `true`    |
| `block`   | 是否为块级模式（二选一）                          | `boolean`                          | `false`   |

### 原生属性

<!--@include: @/component/@parts/api-native.md-->

| 名称       | 说明     | 类型      | 默认值  |
| ---------- | -------- | --------- | ------- |
| `disabled` | 是否禁用 | `boolean` | `false` |

### 样式属性

<!--@include: @/component/@parts/api-style.md-->

| 名称     | 说明     | 类型（默认单位）      | 默认值 |
| -------- | -------- | --------------------- | ------ |
| `radius` | 圆角尺寸 | `string\|number(?px)` | `4`    |

### 插槽

| 名称      | 说明     |
| --------- | -------- |
| `default` | 显示内容 |
