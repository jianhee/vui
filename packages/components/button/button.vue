<!-- 按钮 -->
<template>
  <component
    :is="rootTag"
    class="vui-btn"
    v-bind="rootAttrs"
  >
    <!-- 加载状态 -->
    <VIcon
      v-if="loading"
      :icon="IconLoading"
      :spin="true"
    />
    <!-- 前置图标 -->
    <VIcon
      v-if="icon"
      :icon="icon"
      v-bind="iconProps"
    />
    <!-- 显示内容 -->
    <slot />
  </component>
</template>

<script setup>
import { useButton, btnProps } from './composables';
import IconLoading from '../../icons/loading.vue';

// 按钮
const props = defineProps(btnProps);

// 使用按钮
const { rootTag, rootAttrs } = useButton({ props });
</script>
