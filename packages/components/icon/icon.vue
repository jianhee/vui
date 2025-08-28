<!-- 图标 -->
<template>
  <i
    :class="['vui-icon', rootClasses]"
    :style="rootStyles"
  >
    <!-- 优先使用插槽 -->
    <slot v-if="$slots.default" />
    <!-- 其次使用组件：需要将 `.svg` 文件改写成 `.vue` 组件 -->
    <component
      :is="icon"
      v-else-if="iconType === 'object'"
    />
    <!-- 最后使用名称：依赖 vite-plugin-svg-icons 插件 -->
    <svg v-else-if="iconType === 'string'">
      <use :href="`#icon-${icon}`" />
    </svg>
  </i>
</template>

<script setup>
import { useIcon, iconProps } from './composables';

// 图标
const props = defineProps(iconProps);

// 使用图标
const { rootClasses, rootStyles, iconType } = useIcon({ props });
</script>
