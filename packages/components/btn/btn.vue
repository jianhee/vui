<!-- 按钮 -->
<template>
  <button
    type="button"
    :class="rootClasses"
    :style="rootStyles"
    :disabled="isDisabled"
  >
    <!-- loading -->
    <VIcon
      v-if="loading"
      :component="IconLoadingLoop"
    />
    <!-- 图标 -->
    <VIcon
      v-if="icon"
      v-bind="iconProps"
    />
    <!-- 内容 -->
    <slot />
  </button>
</template>

<script setup>
import { useBtn, btnProps } from './composables';
import { useIconProps } from '../icon/composables/base';
import IconLoadingLoop from '../../icons/loading-loop.vue';

// 按钮
const props = defineProps(btnProps);
const { isDisabled, rootClasses, rootStyles } = useBtn(props);

// 图标
const { iconProps } = useIconProps(props.icon);
</script>
