<!-- 图标 -->
<template>
  <i
    :class="rootClasses"
    :style="rootStyles"
  >
    <!-- 使用 svg 名称：依赖 vite-plugin-svg-icons 插件 -->
    <svg v-if="name">
      <use :href="`#icon-${name}`" />
    </svg>
    <!-- 使用 svg 组件：需要将 `.svg` 文件改写成 `.vue` 组件 -->
    <component
      :is="component"
      v-else
    />
  </i>
</template>

<script setup>
import { iconProps, useIcon } from './composables';

// 处理数据
const props = defineProps(iconProps);
const { rootClasses, rootStyles } = useIcon(props);
</script>
