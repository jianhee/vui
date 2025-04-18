<!-- 按钮 -->
<template>
  <button
    type="button"
    :class="btnClasses"
    :style="btnStyles"
    :disabled="isDisabled"
  >
    <!-- loading -->
    <MxIcon
      v-if="loading"
      :component="IconLoading"
      spin
    />
    <!-- 前置图标 -->
    <MxIcon
      v-if="icon"
      v-bind="iconProps"
    />
    <!-- 内容 -->
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { getIconProps } from '../composables';
import MxIcon from './MxIcon.vue';
import IconLoading from '../assets/icons/loading.vue';

// 参数
const props = defineProps({
  // 类型：custom, default, primary
  type: { type: String, default: 'default' },
  // 尺寸：small, medium, large
  size: { type: String, default: 'medium' },
  // 块级元素
  block: { type: Boolean, default: false },
  // 圆角
  radius: { type: String, default: null },
  // 禁用状态
  disabled: { type: Boolean, default: false },
  // 加载状态
  loading: { type: Boolean, default: false },
  // 前置图标：MxIcon 组件的 name/component/props
  icon: { type: [String, Object], default: null }
});

// 获取类名
const btnClasses = computed(() => {
  return [
    'mx-btn',
    `mx-btn-${props.type}`,
    `mx-btn-${props.size}`,
    {
      'mx-btn-block': props.block,
      'mx-disabled': isDisabled.value
    }
  ];
});

// 获取样式
const btnStyles = computed(() => {
  return { borderRadius: props.radius };
});

// 是否禁用
const isDisabled = computed(() => props.disabled || props.loading);

// 获取图标 props
const iconProps = computed(() => getIconProps(props.icon));
</script>

<style lang="scss">
@use '../assets/styles/vars';
@use '../assets/styles/base';
.mx-btn {
  display: inline-flex;
  flex: none;
  gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  line-height: 1;
  color: var(--mx-btn-text-color);
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  outline: 0;
  background-color: var(--mx-btn-bg-color);
  border: 1px solid var(--mx-btn-border-color);
  border-radius: 4px;
  transition: all 0.3s ease;
  &:not(:disabled):hover {
    background-color: var(--mx-btn-active-bg-color, var(--mx-btn-bg-color));
    border: 1px solid var(--mx-btn-active-border-color, var(--mx-btn-border-color));
    opacity: var(--mx-btn-active-opacity, 1);
  }

  // 类型
  &-default {
    --mx-btn-text-color: var(--mx-brand-color-default);
    --mx-btn-bg-color: transparent;
    --mx-btn-border-color: var(--mx-border-color);
    --mx-btn-active-bg-color: var(--mx-brand-color-a10);
    --mx-btn-active-border-color: var(--mx-brand-color-a30);
  }
  &-primary {
    --mx-btn-text-color: #fff;
    --mx-btn-bg-color: var(--mx-brand-color-default);
    --mx-btn-border-color: var(--mx-brand-color-default);
    --mx-btn-active-opacity: 0.8;
  }

  // 尺寸
  &-small {
    height: 24px;
    font-size: 12px;
  }
  &-medium {
    height: 32px;
    font-size: 14px;
  }
  &-large {
    height: 40px;
    font-size: 16px;
  }

  // 块级元素
  &-block {
    display: flex;
    width: 100%;
  }
}
</style>
