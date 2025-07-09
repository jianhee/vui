# Loading 加载状态

## 动画类型

使用 `animation` 属性定义动画类型

<preview path="./demos/basic.vue"></preview>

## 自定义图标

<!--@include: @/component/@parts/props-icon.md-->

<preview path="@docs/component/empty/demos/icon.vue"></preview>

## 自定义文本

使用 `description` 属性定义描述文本

<preview path="./demos/desc.vue"></preview>

## API

### 属性

| 名称          | 说明                               | 类型                        | 默认值       |
| ------------- | ---------------------------------- | --------------------------- | ------------ |
| `animation`   | 动画类型（转圈和气泡）             | `string`: `loop\|bubble`    | `loop`       |
| `icon`        | 自定义图标，会自动添加旋转动画     | `string\|component\|object` |              |
| `description` | 自定义描述文本，空值表示不使用文本 | `string\null`               | `Loading...` |
