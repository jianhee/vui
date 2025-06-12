<!-- 骨架屏-项 -->
<template>
  <!-- 单行 -->
  <template
    v-for="(item, index) in formattedRows"
    :key="index"
  >
    <div
      class="vui-skeleton-item"
      v-bind="item"
    />
  </template>
  <!-- 分割线 -->
  <div
    v-if="devider"
    class="vui-skeleton-devider"
  />
</template>

<script setup>
import { skeletonProps, useSkeleton } from './composables';

const props = defineProps(skeletonProps);
const { formattedRows } = useSkeleton({ props });
</script>
