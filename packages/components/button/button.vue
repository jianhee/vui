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
      v-if="_iconProps"
      v-bind="_iconProps"
    />
    <!-- 显示内容 -->
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useButton, btnProps } from './composables';
import IconLoading from '../../icons/loading.vue';
import { getFormattedIconProps } from '../@common';

// 按钮
const props = defineProps(btnProps);

// 使用按钮
const { rootTag, rootAttrs } = useButton({ props });

// 使用图标
const _iconProps = computed(() => getFormattedIconProps(props.icon, props.iconProps));
</script>
