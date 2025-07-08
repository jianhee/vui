<!-- 图片 -->
<template>
  <div
    class="vui-image"
    v-bind="rootProps"
  >
    <!-- 加载中 -->
    <VSkeletonItem v-if="isLoading" />
    <!-- 加载失败 -->
    <div
      v-else-if="error"
      class="vui-image-error"
    >
      <VIcon :component="IconImageError" />
    </div>
    <!-- 加载成功 -->
    <img
      v-else
      class="vui-image-inner"
      :src="src"
    />
  </div>
</template>

<script setup>
import { useImage, imageProps } from './composables';
import IconImageError from '../../icons/image-error.vue';

// 图片
const props = defineProps(imageProps);

// 使用图片
const { isLoading, error, rootProps } = useImage({ props });
</script>
