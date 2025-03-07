<!-- 图片 -->
<template>
  <div
    class="mx-image"
    :style="imageStyles"
  >
    <!-- 加载中 -->
    <MxSkeleton
      v-if="isLoading && !placeholder"
      :aspect-ratio="skeletonAspectRatio"
    />
    <!-- 其它状态 -->
    <img
      v-else
      class="mx-image-inner"
      :src="imgUrl"
      :data-src="src"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useImage } from '@vueuse/core';
import MxSkeleton from './MxSkeleton.vue';
import errorImg from '../images/error.png';

const props = defineProps({
  // 图片地址
  src: { type: String, default: null },
  // 加载中的图片地址
  placeholder: { type: String, default: null },
  // 加载失败的图片地址
  error: { type: String, default: errorImg },
  // 尺寸
  width: { type: String, default: null },
  // 长宽比：默认为空，按照图片自身比例完整展示，设置后按比例显示图片的一部分
  aspectRatio: { type: String, default: null },
  // 圆角
  radius: { type: String, default: null }
});

// 加载状态
const { isLoading, error } = useImage({ src: props.src });

// 显示的图片地址
const imgUrl = computed(() => {
  return isLoading.value ? props.placeholder : error.value ? props.error : props.src;
});

// 计算样式
const imageStyles = computed(() => {
  return {
    'width': props.width,
    'aspect-ratio': props.aspectRatio,
    'border-radius': props.radius
  };
});

// 骨架屏长宽比
const skeletonAspectRatio = computed(() => {
  return props.aspectRatio || '16/9';
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
