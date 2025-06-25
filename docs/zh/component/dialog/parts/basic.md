::: tip
对话框和抽屉的 API 几乎完全一致，UI 略有差异。
:::

## 基础用法

1. 组件内容由 `title` 属性（顶栏）、`default` 插槽（中间内容）、`footer` 插槽（底栏内容）三部分组成
2. 使用 `v-model:visible` 属性绑定当前值，使用 `placement` 属性设置抽屉出现的位置
3. 打开关闭时分别触发 `open` 和 `close` 事件

<preview path="@docs/component/dialog/demos/basic.vue"></preview>

## 关闭交互

使用 `showClose` 和 `closeOnClickModal` 属性定义关闭交互

<preview path="@docs/component/dialog/demos/close.vue"></preview>

<!--@include: @/component/@parts/props-style.md-->

### 主体宽度

使用 `width` 属性定义主体宽度

<preview path="@docs/component/dialog/demos/width.vue"></preview>

## API

### 属性

| 名称                | 说明                            | 类型                    | 默认值                       |
| ------------------- | ------------------------------- | ----------------------- | ---------------------------- |
| `v-model:visible`   | 当前值，即是否显示              | `boolean`               | `false`                      |
| `placement`         | 抽屉出现的位置                  | `string`(`left\|right`) | `left`                       |
| `title`             | 标题，为空时不显示顶栏          | `string`                |                              |
| `showClose`         | 是否显示关闭按钮                | `boolean`               | `true`                       |
| `closeOnClickModal` | 是否在点击遮罩时关闭            | `boolean`               | `true`                       |
| `width`             | 主体宽度，数字自动补全单位 `px` | `string\|number`        | 对话框 `50%` <br> 抽屉 `30%` |

### 插槽

| 名称      | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 中间内容 |      |
| `footer`  | 底栏内容 |      |

### 事件

| 名称    | 说明       | 参数 |
| ------- | ---------- | ---- |
| `open`  | 打开时触发 |      |
| `close` | 关闭时触发 |      |
