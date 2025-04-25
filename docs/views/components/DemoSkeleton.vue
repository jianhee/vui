<!-- 骨架屏 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li><code>VSkeleton</code> 根组件容器</li>
        <li><code>VSkeletonItem</code> 子组件生成单行</li>
        <ol>
          <li><code>props.width</code> 和 <code>props.height</code> 宽高</li>
          <li><code>props.aspectRatio</code> 宽高比，设置后会忽略行高</li>
          <li><code>props.center</code> 是否水平居中</li>
          <li><code>props.devider</code> 是否添加分割线</li>
        </ol>
        <li><code>VSkeletonGroup</code> 子组件生成多行段落</li>
        <ol>
          <li><code>props.rows</code> 行数</li>
          <li><code>props.center</code> 和 <code>props.devider</code> 同上</li>
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
