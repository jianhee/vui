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
import { rowProps, useRow } from './composables';

const props = defineProps(rowProps);
const { rootClasses } = useRow(props);
</script>
