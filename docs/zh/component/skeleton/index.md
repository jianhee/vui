# Skeleton 骨架屏

骨架屏提供两个组件，可以将父子组件放在一起使用，也可以单独使用子组件。

1. 父组件 `VSkeleton` 骨架屏容器
2. 子组件 `VSkeletonItem` 骨架屏项目

## 基础用法

将容器作为根组件，它只有一个默认插槽 `slots.default` 且内容只能是 `<VSkeletonItem>`

<preview path="./demos/basic.vue"></preview>

## 构建模块

1. `itemProps.width` 宽度，缺省单位时默认 `px`
2. `itemProps.height` 高度，默认 `20px`，缺省单位时默认 `px`
3. `itemProps.aspectRatio` 宽高比，设置后忽略高度
4. `itemProps.center` 是否水平居中，默认 `false`
5. `itemProps.devider` 是否添加分割线，默认 `false`
6. `itemProps.rows` 自动生成多行，首行宽度 `40%`，尾行宽度 `60%`

<preview path="./demos/module.vue"></preview>
