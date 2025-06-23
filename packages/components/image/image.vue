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
import { useImage, imageProps } from './composables';

// 图片
const props = defineProps(imageProps);

// 使用图片
const { rootStyles, isShowSkeleton, skeletonAspectRatio, imgSrc, dataSrc } = useImage(props);
</script>
