# Image 图片

## 基础用法

1. `props.src` 图片地址，必填
2. `props.loadingImg` 加载中的图片地址，默认使用骨架屏
3. `props.errorImg` 加载失败的图片地址，默认使用内置图片

<preview path="./demos/basic.vue"></preview>

<!--@include: ../../_parts/style.md-->

1. `props.width` 宽度，默认值 `null`，默认单位 `px`，格式为 `Number|String`
2. `props.aspectRatio` 宽高比，默认值 `null`，格式为 `n1/n2`，设置后可能显示不全
3. `props.radius` 圆角尺寸，默认值 `null`，默认单位 `px`，格式为 `Number|String`

<preview path="./demos/style.vue"></preview>
