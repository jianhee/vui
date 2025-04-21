<!-- 骨架屏-多行段落 -->
<template>
  <!-- 行 -->
  <MxSkeletonItem
    v-for="n in rows"
    :key="n"
    :center="center"
    :width="n === 1 ? '40%' : n === rows ? '60%' : null"
  />
  <!-- 分割线 -->
  <MxSkeletonDevider v-if="devider" />
</template>

<script setup>
defineProps({
  // 行数
  rows: { type: Number, default: 3 },
  // 是否居中
  center: { type: Boolean, default: false },
  // 是否添加分割线
  devider: { type: Boolean, default: false }
});
</script>
