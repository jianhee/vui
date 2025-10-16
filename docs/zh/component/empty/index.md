---
title: Empty 空状态
---

# {{ $frontmatter.title }}

::: tip
空状态和加载状态的 API 完全一致，UI 略有差异。
:::

## 示例

<!--@include: @/component/@parts/demo-component.md-->

### 基础用法

<preview path="@docs/component/empty/demos/basic.vue"></preview>

### 自定义图标

使用 `icon` 和 `iconProps` 属性定义图标

<preview path="@docs/component/empty/demos/icon.vue"></preview>

### 自定义图片

使用 `image` 和 `imageStyles` 属性定义图片

<preview path="@docs/component/empty/demos/image.vue"></preview>

### 自定义文本

使用 `description` 属性定义描述文本

<preview path="@docs/component/empty/demos/desc.vue"></preview>

### 自定义底栏

使用 `default` 插槽自定义底部内容

<preview path="@docs/component/empty/demos/bottom.vue"></preview>

### 布局方向

<preview path="@docs/component/empty/demos/direction.vue"></preview>

### 控制样式

<!--@include: @/component/@parts/api-style.md-->

<preview path="@docs/component/empty/demos/style.vue"></preview>

## API

### 基础属性

| 名称          | 说明                               | 类型                                          | 默认值                                                                   |
| ------------- | ---------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------ |
| `icon`        | 自定义图标                         | - `null` 不使用图标 <br> - `VIcon.props.icon` | 内置图标                                                                 |
| `iconProps`   | 自定义图标的属性                   | `VIcon.props`                                 |                                                                          |
| `image`       | 自定义图片，优先级高于 `icon` 属性 | `string`                                      |                                                                          |
| `imageStyles` | 自定义图片的样式                   | `object`                                      |                                                                          |
| `description` | 自定义描述文本                     | - `null` 不使用图标 <br> - `string`           | `VEmpty` : `No Data\|暂无数据` <br> `VLoading` : `Loading...\|加载中...` |
| `direction`   | 布局方向                           | `string` = `vertical\|horizontal`             | `vertical`                                                               |

### 样式属性

<!--@include: @/component/@parts/api-style.md-->

| 名称      | 说明 | 类型（默认单位）      | 默认值   |
| --------- | ---- | --------------------- | -------- |
| `padding` | 间距 | `string\|number(?px)` | `30px 0` |

### 插槽

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 自定义底部内容 |
