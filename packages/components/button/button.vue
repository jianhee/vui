<!-- 按钮 -->
<template>
  <button
    type="button"
    :class="rootClasses"
    :style="rootStyles"
    :disabled="disabled || loading"
  >
    <!-- 加载状态 -->
    <VIcon
      v-if="loading"
      :component="IconLoading"
      :spin="true"
    />
    <!-- 图标 -->
    <VIcon
      v-if="icon"
      v-bind="iconProps"
    />
    <!-- 显示内容 -->
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { useButton, btnProps } from './composables';
import { useIconProps } from '../../composables/use-icon-props';
import IconLoading from '../../icons/loading.vue';

// 按钮
const props = defineProps(btnProps);

// 使用按钮
const { rootClasses, rootStyles } = useButton({ props });

// 图标属性
const { iconProps } = useIconProps({
  iconRef: computed(() => props.icon)
});
</script>
