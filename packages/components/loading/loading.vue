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
      v-if="text"
      class="vui-loading-text"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { useLoading, loadingProps } from './composables';

const props = defineProps(loadingProps);
const { iconProps } = useLoading(props);
</script>
