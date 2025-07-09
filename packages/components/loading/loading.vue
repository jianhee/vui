<!-- 加载状态 -->
<template>
  <div class="vui-loading">
    <!-- 图标 -->
    <VIcon
      class="vui-loading-icon"
      v-bind="iconProps"
    />
    <!-- 文本 -->
    <div
      v-if="description"
      class="vui-loading-desc"
    >
      {{ description }}
    </div>
  </div>
</template>

<script setup>
import { useLoading, loadingProps } from './composables';

const props = defineProps(loadingProps);
const { iconProps } = useLoading({ props });
</script>
