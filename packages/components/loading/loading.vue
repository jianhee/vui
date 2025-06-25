<!-- loading -->
<template>
  <div class="vui-loading">
    <!-- 图标 -->
    <VIcon
      v-bind="iconProps"
      class="vui-loading-icon"
    />
    <!-- 文本 -->
    <div
      v-if="showText"
      class="vui-loading-text"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { useLoading, loadingProps } from './composables';

// 加载
const props = defineProps(loadingProps);

// 使用加载
const { iconProps } = useLoading(props);
</script>
