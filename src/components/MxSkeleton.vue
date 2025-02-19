<!-- 骨架屏 -->
<template>
  <!-- 占位 -->
  <div
    v-for="n in rows"
    :key="n"
    class="mx-skeleton"
    :class="{
      'is-first': rows > 1 && n === 1,
      'is-last': rows > 1 && n === rows,
      'is-center': center
    }"
    :style="{
      width: width,
      height: aspectRatio ? null : height,
      aspectRatio: aspectRatio
    }"
  />
  <!-- 边框 -->
  <div
    v-if="border"
    class="mx-skeleton-border"
  />
</template>

<script setup>
defineProps({
  // 多行
  rows: { type: [Number, String], default: 1 },
  // 尺寸
  width: { type: String, default: null },
  height: { type: String, default: '20px' },
  aspectRatio: { type: String, default: null },
  // 是否居中
  center: { type: Boolean, default: false },
  border: { type: Boolean, default: false }
});
</script>

<style lang="scss">
:root {
  --mx-skeleton-from-bg-color: #f0f2f5;
  --mx-skeleton-to-bg-color: #e6e8eb;
}

@media (prefers-color-scheme: dark) {
  :root {
    --mx-skeleton-from-bg-color: #303030;
    --mx-skeleton-to-bg-color: #424243;
  }
}
.mx-skeleton {
  background: linear-gradient(90deg, var(--mx-skeleton-from-bg-color) 25%, var(--mx-skeleton-to-bg-color) 37%, var(--mx-skeleton-from-bg-color) 63%);
  background-size: 400% 100%;
  border-radius: 4px;
  animation: mx-skeleton-loading 1.4s ease infinite;
  & + & {
    margin-top: 10px;
  }
  &.is-first {
    width: 40%;
  }
  &.is-last {
    width: 60%;
  }
  &.is-center {
    margin-right: auto;
    margin-left: auto;
  }
  &-border {
    height: 1px;
    margin-top: 10px;
    background-color: var(--mx-border-color);
  }
}

@keyframes mx-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
