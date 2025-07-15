<!-- 按钮 -->
<template>
  <button
    type="button"
    :class="rootClasses"
    :style="rootStyles"
    :disabled="loading"
    v-bind="{ ...rootProps, ...nativeProps }"
  >
    <!-- 加载状态 -->
    <VIcon
      v-if="loading"
      :component="IconLoadingLoop"
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
import { useNativeProps } from '../../composables/use-native-props';
import { useIconProps } from '../../composables/use-icon-props';
import IconLoadingLoop from '../../icons/loading-loop.vue';

// 筛选属性
defineOptions({ inheritAttrs: false });
const { rootProps, nativeProps } = useNativeProps(['disabled']);

// 按钮
const props = defineProps(btnProps);

// 使用按钮
const { rootClasses, rootStyles } = useButton({ props });

// 图标属性
const { iconProps } = useIconProps({
  iconRef: computed(() => props.icon)
});
</script>
