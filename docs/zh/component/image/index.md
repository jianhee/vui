# Image 图片

## 基础用法

1. `props.src` 图片地址，必填
2. `props.loadingImg` 加载中的图片地址，默认使用骨架屏
3. `props.errorImg` 加载失败的图片地址，默认使用内置图片

<preview path="./demos/basic.vue"></preview>

<!--@include: @/component/@parts/props-style.md-->

1. 宽度 `props.width`、`style.width`、`style.--vui-image-width`
2. 宽高比 `props.aspectRatio`、`style.aspect-ratio`、`style.--vui-image-aspect-ratio` 设置后可能显示不全
3. 圆角尺寸 `props.radius`、`style.border-radius`、`style.--vui-image-radius`

<preview path="./demos/style.vue"></preview>
