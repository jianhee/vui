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

## API

### 属性

| 名称          | 说明                               | 类型                        | 默认值    |
| ------------- | ---------------------------------- | --------------------------- | --------- |
| `icon`        | 自定义图标                         | `string\|component\|object` |           |
| `image`       | 自定义图片，会替换掉图标           | `string`                    |           |
| `description` | 自定义描述文本，空值表示不使用文本 | `string\null`               | `No Data` |
