<!-- 行：常用样式集合 -->
<template>
  <component
    :is="tag"
    :class="rootClasses"
  >
    <slot />
  </component>
</template>

<script setup>
import { useRow, rowProps } from './composables';

// 行
const props = defineProps(rowProps);

// 使用行
const { rootClasses } = useRow(props);
</script>
