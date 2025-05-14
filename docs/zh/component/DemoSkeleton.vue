<!-- 骨架屏 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li>`VSkeleton` 根组件容器</li>
        <li>`VSkeletonItem` 子组件生成单行</li>
        <ol>
          <li>`props.width` 和 `props.height` 宽高</li>
          <li>`props.aspectRatio` 宽高比，设置后会忽略行高</li>
          <li>`props.center` 是否水平居中</li>
          <li>`props.devider` 是否添加分割线</li>
        </ol>
        <li>`VSkeletonGroup` 子组件生成多行段落</li>
        <ol>
          <li>`props.rows` 行数</li>
          <li>`props.center` 和 `props.devider` 同上</li>
        </ol>
      </ol>
    </template>
    <VSkeleton>
      <VSkeletonItem
        width="50%"
        center
      />
      <VSkeletonItem
        width="80%"
        height="10px"
        center
      />
      <VSkeletonItem
        aspect-ratio="16/9"
        devider
      />
      <VSkeletonGroup
        v-for="n in 3"
        :key="n"
        :rows="4"
        :devider="n !== 3"
      />
    </VSkeleton>
  </DemoCard>
</template>
