# Image 图片

## 基础用法

使用 `src`、`loadingImg`、`errorImg` 属性定义不同状态的图片地址

<preview path="./demos/basic.vue"></preview>

<!--@include: @/component/@parts/props-style.md-->

使用 `width`、`aspectRatio`、`radius` 等属性设置样式

<preview path="./demos/style.vue"></preview>

## API

### 属性

| 名称          | 说明                            | 类型             | 默认值   |
| ------------- | ------------------------------- | ---------------- | -------- |
| `src`         | 图片地址                        | `string`         | 必填     |
| `loadingImg`  | 加载中的图片                    | `string`         | 骨架屏   |
| `errorImg`    | 加载失败的图片                  | `string`         | 内置图片 |
| `width`       | 宽度，数字自动补全单位 `px`     | `string\|number` |          |
| `aspectRatio` | 宽高比，设置后可能显示不全      | `string`         |          |
| `radius`      | 圆角尺寸，数字自动补全单位 `px` | `string\|number` |          |
