<!-- 图片 -->
<template>
  <div
    class="mx-image"
    :style="{
      'aspect-ratio': aspectRatio,
      'border-radius': radius
    }"
  >
    <MxSkeleton
      v-if="imgUrl === 'skeleton'"
      :aspect-ratio="aspectRatio || '16/9'"
    />
    <img
      v-else
      :src="imgUrl"
      :data-src="src"
      class="mx-image-inner"
    >
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useImage } from '@vueuse/core';
import MxSkeleton from './MxSkeleton.vue';
import errorImg from '../images/error.png';

const props = defineProps({
  // 图片地址
  src: { type: String, default: '' },
  // 未加载时占位的图片地址
  placeholder: { type: String, default: '' },
  // 加载失败的图片地址
  error: { type: String, default: '' },
  // 长宽比：默认为空，按照图片自身比例完整展示，设置后按比例显示图片的一部分
  aspectRatio: { type: String, default: '' },
  // 圆角
  radius: { type: String, default: '' }
});

// 显示的图片地址
const { isLoading, error } = useImage({ src: props.src });
const imgUrl = computed(() => {
  if (isLoading.value) {
    return props.placeholder || 'skeleton';
  } else if (error.value) {
    return props.error || errorImg;
  } else {
    return props.src;
  }
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
