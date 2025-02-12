<!-- 图片 -->
<template>
  <div
    class="mx-image"
    :style="{ 'border-radius': radius }"
  >
    <MxSkeleton
      v-if="isLoading"
      :rows="[{ type: 'image' }]"
    />
    <img
      v-else
      :src="error ? errorImg : props.src"
      :data-src="error ? src : null"
      class="mx-image-inner"
      :class="{ 'is-error': error }"
    >
  </div>
</template>

<script setup>
import { useImage } from '@vueuse/core';
import MxSkeleton from './MxSkeleton.vue';
import errorImg from '../images/error.png';

const props = defineProps({
  // 图片地址
  src: { type: String, default: '' },
  // 是否圆角
  radius: { type: String, default: '' }
});

const { isLoading, error } = useImage({ src: props.src });
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
