# Image 图片

## 基础用法

1. `props.src` 图片地址，必填
2. `props.loadingImg` 加载中的图片地址，默认使用骨架屏
3. `props.errorImg` 加载失败的图片地址，默认使用内置图片

<preview path="./demos/basic.vue"></preview>

<!--@include: @/component/@parts/props-style.md-->

1. `props.width` 宽度，不带单位时默认 `px`
2. `props.aspectRatio` 宽高比，设置后可能显示不全
3. `props.radius` 圆角尺寸，不带单位时默认 `px`

<preview path="./demos/style.vue"></preview>
