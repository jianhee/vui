# Skeleton 骨架屏

## 基础用法

组件内容由骨架屏容器 `<VSkeleton>` 和骨架屏项 `<VSkeletonItem>` 两部分组成，通常将两个组件放在一起使用

<preview path="./demos/basic.vue"></preview>

## 高级用法

使用 `width`、`height`、`aspectRatio`、`center`、`devider`、`rows` 等属性构建完整的模块

<preview path="./demos/module.vue"></preview>

## Skeleton API

### 插槽

| 名称      | 说明                                    | 参数 |
| --------- | --------------------------------------- | ---- |
| `default` | 显示内容，只能是 `<VSkeletonItem>` 组件 |      |

## SkeletonItem API

### 属性

| 名称          | 说明                                       | 类型             | 默认值  |
| ------------- | ------------------------------------------ | ---------------- | ------- |
| `width`       | 宽度，数字自动补全单位 `px`                | `string\|number` |         |
| `height`      | 高度，数字自动补全单位 `px`                | `string\|number` | `20px`  |
| `aspectRatio` | 宽高比，设置后忽略高度                     | `string`         |         |
| `center`      | 是否水平居中                               | `boolean`        | `false` |
| `devider`     | 是否添加分割线                             | `boolean`        | `false` |
| `rows`        | 行数，多行时首行宽度 `40%`，尾行宽度 `60%` | `number`         | `1`     |
