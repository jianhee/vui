<!-- 骨架屏-单行 -->
<template>
  <!-- 行 -->
  <div
    class="vui-skeleton-item"
    :class="{ 'vui-skeleton-center': center }"
    :style="{
      width: width,
      height: aspectRatio ? null : height,
      aspectRatio: aspectRatio
    }"
  />
  <!-- 分割线 -->
  <VSkeletonDevider v-if="devider" />
</template>

<script setup>
import VSkeletonDevider from './skeleton-devider.vue';

defineProps({
  // 宽高
  width: { type: String, default: '100%' },
  height: { type: String, default: '20px' },
  // 宽高比：设置后会忽略行高
  aspectRatio: { type: String, default: null },
  // 是否水平居中
  center: { type: Boolean, default: false },
  // 是否添加分割线
  devider: { type: Boolean, default: false }
});
</script>
