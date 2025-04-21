<!-- 骨架屏-单行 -->
<template>
  <!-- 行 -->
  <div
    class="mx-skeleton-item"
    :class="{ 'mx-skeleton-center': center }"
    :style="{
      width: width,
      height: aspectRatio ? null : height,
      aspectRatio: aspectRatio
    }"
  />
  <!-- 分割线 -->
  <MxSkeletonDevider v-if="devider" />
</template>

<script setup>
defineProps({
  // 宽高
  width: { type: String, default: '100%' },
  height: { type: String, default: '20px' },
  // 宽高比：设置后会忽略行高
  aspectRatio: { type: String, default: null },
  // 是否居中
  center: { type: Boolean, default: false },
  // 是否添加分割线
  devider: { type: Boolean, default: false }
});
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-skeleton {
  &-item {
    background: linear-gradient(90deg, var(--mx-skeleton-from-bg-color) 25%, var(--mx-skeleton-to-bg-color) 37%, var(--mx-skeleton-from-bg-color) 63%);
    background-size: 400% 100%;
    border-radius: 4px;
    animation: mx-skeleton 1.4s ease infinite;
  }

  // 居中
  &-center {
    align-self: center;
  }
}

@keyframes mx-skeleton {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
