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
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useButton, btnProps } from './composables';
import { useIconProps } from '../../composables/use-icon-props';
import IconLoading from '../../icons/loading.vue';

// 按钮
const props = defineProps(btnProps);

// 使用按钮
const { rootTag, rootAttrs } = useButton({ props });

// 图标属性
const { iconProps } = useIconProps({
  iconRef: computed(() => props.icon)
});
</script>
