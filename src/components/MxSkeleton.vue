<!-- 骨架屏 -->
<template>
  <div class="mx-skeleton">
    <div
      v-for="(item, index) in rowsRef"
      :key="index"
      :class="[
        'mx-skeleton-item',
        `is-type-${item.type || 'row'}`,
        {
          'is-center': item.center,
          'is-border': item.border
        }
      ]"
      :style="{
        width: item.width,
        height: item.height
      }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  // type: row, image, border
  // width, height 宽高
  // center 是否居中
  rows: { type: Array, default: null }
});

// 格式化
const rowsRef = ref([]);
formatRows(props.rows);
function formatRows(rows) {
  rows.forEach(item => {
    if (item.repeat) {
      for (let i = 0; i < item.repeat; i++) {
        if (item.rows) {
          formatRows(item.rows);
        } else {
          rowsRef.value.push(item);
        }
      }
    } else {
      rowsRef.value.push(item);
    }
  });
}
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
.mx-skeleton-item {
  width: 100%;
  margin-top: 10px;
  background: linear-gradient(90deg, var(--mx-skeleton-from-bg-color) 25%, var(--mx-skeleton-to-bg-color) 37%, var(--mx-skeleton-from-bg-color) 63%);
  background-size: 400% 100%;
  border-radius: 4px;
  animation: mx-skeleton-loading 1.4s ease infinite;
  &:first-child {
    margin-top: 0;
  }

  // 类型
  &.is-type-row {
    height: 20px;
  }
  &.is-type-image {
    aspect-ratio: 16/9;
  }
  &.is-type-border {
    height: 1px;
    background-color: var(--mx-border-color);
  }

  // 是否居中
  &.is-center {
    margin-right: auto;
    margin-left: auto;
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
