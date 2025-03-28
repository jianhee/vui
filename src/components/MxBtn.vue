<!-- 按钮 -->
<template>
  <button
    type="button"
    :disabled="isDisabled"
    :class="btnClasses"
  >
    <!-- loading -->
    <MxIcon
      v-if="loading"
      :component="IconLoading"
      spin
    />
    <!-- 前置图标 -->
    <MxIconInside
      v-if="icon"
      :icon="icon"
    />
    <!-- 内容 -->
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';
import MxIcon from './MxIcon.vue';
import MxIconInside from './MxIconInside.vue';
import IconLoading from '../icons/loading.vue';

// 参数
const props = defineProps({
  // 类型：custom, default, primary
  type: { type: String, default: 'default' },
  // 尺寸：medium
  size: { type: String, default: 'medium' },
  // 禁用状态
  disabled: { type: Boolean, default: false },
  // 加载状态
  loading: { type: Boolean, default: false },
  // 图标：MxIcon 组件的 name/component/props
  icon: { type: [String, Object], default: null }
});

// 是否禁用
const isDisabled = computed(() => props.disabled || props.loading);

// 类名
const btnClasses = computed(() => {
  return {
    'mx-btn': true,
    [`is-${props.type}`]: true,
    [`is-${props.size}`]: props.type !== 'custom',
    'mx-state-disabled': isDisabled.value
  };
});
</script>

<style lang="scss">
@use '../styles/vars';
@use '../styles/base';
.mx-btn {
  display: inline-flex;
  flex: none;
  gap: 5px;
  align-items: center;
  justify-content: center;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  outline: 0;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.3s ease;

  // 尺寸
  &.is-medium {
    height: 32px;
    padding: 0 20px;
    font-size: 14px;
  }

  // 间距
  & + .mx-btn {
    margin-left: 10px;
  }

  // 类型
  &.is-default {
    color: var(--mx-btn-brand-color);
    background-color: transparent;
    border-color: var(--mx-btn-default-border-color);
    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      background-color: var(--mx-btn-default-bg-color);
      border-color: var(--mx-btn-default-hover-bg-color);
    }
  }
  &.is-primary {
    color: var(--mx-btn-primary-text-color);
    background-color: var(--mx-btn-brand-color);
    border-color: var(--mx-btn-brand-color);
    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      opacity: 0.8;
    }
  }
}
</style>
