# Empty 空状态

## 基础用法

<preview path="./demos/basic.vue"></preview>

## 自定义图标

<!--@include: @/component/@parts/props-icon.md-->

<preview path="./demos/icon.vue"></preview>

## 自定义图片

使用 `image` 属性定义图片

<preview path="./demos/image.vue"></preview>

## 自定义文本

使用 `description` 属性定义描述文本

<preview path="./demos/desc.vue"></preview>

## 底部内容

使用 `default` 插槽自定义底部内容

<preview path="./demos/bottom.vue"></preview>

## API

### 属性

| 名称          | 说明                               | 类型                        | 默认值    |
| ------------- | ---------------------------------- | --------------------------- | --------- |
| `icon`        | 自定义图标                         | `string\|component\|object` |           |
| `image`       | 自定义图片，优先级高于 `icon` 属性 | `string`                    |           |
| `description` | 自定义描述文本，空值表示不使用文本 | `string\null`               | `No Data` |

### 插槽

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 自定义底部内容 |
