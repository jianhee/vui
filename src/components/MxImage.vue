<!-- 图片 -->
<template>
  <div
    class="mx-image"
    :style="imageStyles"
  >
    <!-- 骨架屏 -->
    <MxSkeletonItem
      v-if="isShowSkeleton"
      :aspect-ratio="skeletonAspectRatio"
    />
    <!-- 图片 -->
    <img
      v-else
      class="mx-image-inner"
      :src="imgUrl"
      :data-src="error ? src : null"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useImage } from '@vueuse/core';
import MxSkeletonItem from './MxSkeletonItem.vue';
import mxErrorImg from '../assets/images/mx-error.png';

// 参数
const props = defineProps({
  // 图片地址
  src: { type: String, default: null },
  // 加载中的图片地址：默认使用骨架屏
  loadingImg: { type: String, default: null },
  // 加载失败的图片地址
  errorImg: { type: String, default: mxErrorImg },
  // 宽度
  width: { type: String, default: null },
  // 宽高比：默认按照原始比例展示完整图片，设置后按指定比例展示部分图片
  aspectRatio: { type: String, default: null },
  // 圆角
  radius: { type: String, default: null }
});

// 获取样式
const imageStyles = computed(() => {
  return {
    'width': props.width,
    'aspect-ratio': props.aspectRatio,
    'border-radius': props.radius
  };
});

// 加载状态
const { isLoading, error } = useImage({ src: props.src });

// 是否显示骨架屏
const isShowSkeleton = computed(() => isLoading.value && !props.loadingImg);

// 骨架屏长宽比
const skeletonAspectRatio = computed(() => {
  return props.aspectRatio || '16/9';
});

// 图片地址
const imgUrl = computed(() => {
  return isLoading.value ? props.loadingImg : error.value ? props.errorImg : props.src;
});
</script>

<style lang="scss">
.mx-image {
  flex: none;
  overflow: hidden;
  &-inner {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
