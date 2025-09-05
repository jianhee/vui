::: tip
对话框和抽屉的 API 几乎完全一致，UI 略有差异。
:::

## 示例

### 基础用法

- 使用 `v-model:visible` 属性绑定当前值
- 组件内容由 `title` 属性（顶栏标题）、`default` 插槽（中间内容）、`footer` 插槽（底栏内容）三部分组成

<preview path="@docs/component/dialog/demos/basic.vue"></preview>

### 抽屉出现位置

<preview path="@docs/component/dialog/demos/placement.vue"></preview>

### 触发事件

从打开到关闭依次触发 `open`、`opened` 、`close` 、`closed` 四个事件

<preview path="@docs/component/dialog/demos/event.vue"></preview>

### 关闭弹窗

<preview path="@docs/component/dialog/demos/close.vue"></preview>

### 控制样式

<!--@include: @/component/@parts/api-style.md-->

<preview path="@docs/component/dialog/demos/style.vue"></preview>

## API

### 基础属性

| 名称                | 说明                                      | 类型                    | 默认值  |
| ------------------- | ----------------------------------------- | ----------------------- | ------- |
| `v-model:visible`   | 当前值，即是否显示                        | `boolean`               | `false` |
| `placement`         | 抽屉出现的位置（仅 `<VDrawer>` 组件有效） | `string`: `left\|right` | `left`  |
| `title`             | 标题，为空时不显示顶栏                    | `string`                |         |
| `showClose`         | 是否显示关闭按钮                          | `boolean`               | `true`  |
| `closeOnClickModal` | 是否在点击遮罩时关闭                      | `boolean`               | `true`  |

### 样式属性

<!--@include: @/component/@parts/api-style.md-->

| 名称    | 说明     | 类型（默认单位）      | 默认值                       |
| ------- | -------- | --------------------- | ---------------------------- |
| `width` | 主体宽度 | `string\|number(?px)` | 对话框 `50%` <br> 抽屉 `30%` |

### 插槽

| 名称      | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 中间内容 |      |
| `footer`  | 底栏内容 |      |

### 事件

| 名称     | 说明               | 参数 |
| -------- | ------------------ | ---- |
| `open`   | 打开时触发         |      |
| `opened` | 打开动画结束时触发 |      |
| `close`  | 关闭时触发         |      |
| `closed` | 关闭动画结束时触发 |      |
