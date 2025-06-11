<!-- 图片 -->
<template>
  <div
    class="vui-image"
    :style="rootStyles"
  >
    <!-- 骨架屏 -->
    <VSkeletonItem
      v-if="isShowSkeleton"
      :aspect-ratio="skeletonAspectRatio"
    />
    <!-- 图片 -->
    <img
      v-else
      class="vui-image-inner"
      :src="imgSrc"
      :data-src="dataSrc"
    />
  </div>
</template>

<script setup>
import { imageProps, useImage } from './composables';

// 处理数据
const props = defineProps(imageProps);
const { rootStyles, isShowSkeleton, skeletonAspectRatio, imgSrc, dataSrc } = useImage(props);
</script>
