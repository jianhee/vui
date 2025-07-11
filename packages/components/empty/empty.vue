<!-- 空状态 -->
<template>
  <div class="vui-empty">
    <!-- 优先使用图片 -->
    <img
      v-if="image"
      class="vui-empty-img"
      alt="empty"
      :src="image"
    />
    <!-- 其次使用图标 -->
    <VIcon
      v-else-if="icon !== null"
      class="vui-empty-icon"
      v-bind="iconProps"
    />
    <!-- 文本 -->
    <div
      v-if="description"
      class="vui-empty-desc"
    >
      {{ description }}
    </div>
    <!-- 自定义内容 -->
    <slot />
  </div>
</template>

<script setup>
import { useEmpty, emptyProps } from './composables';

const props = defineProps(emptyProps);
const { iconProps } = useEmpty({ props });
</script>
