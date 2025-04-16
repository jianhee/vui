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
import IconLoading from '../assets/icons/loading.vue';

// 参数
const props = defineProps({
  // 类型：custom, default, primary
  type: { type: String, default: 'default' },
  // 尺寸：small, medium, large
  size: { type: String, default: 'medium' },
  // 块级元素
  block: { type: Boolean, default: false },
  // 禁用状态
  disabled: { type: Boolean, default: false },
  // 加载状态
  loading: { type: Boolean, default: false },
  // 前置图标：MxIcon 组件的 name/component/props
  icon: { type: [String, Object], default: null },
  // 圆角
  radius: { type: String, default: null }
});

// 是否禁用
const isDisabled = computed(() => props.disabled || props.loading);

// 获取样式
const btnStyles = computed(() => {
  return { borderRadius: props.radius };
});

// 获取类名
const btnClasses = computed(() => {
  return [
    'mx-btn',
    `mx-btn-type-${props.type}`,
    `mx-btn-size-${props.size}`,
    {
      'is-block': props.block,
      'mx-disabled': isDisabled.value
    }
  ];
});
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

  // 间距
  & + .mx-btn {
    margin-left: 10px;
  }

  // 类型
  &-type {
    &-default {
      color: var(--mx-btn-brand-color);
      border-color: var(--mx-btn-default-border-color);
      &:hover:not(:disabled),
      &:focus:not(:disabled) {
        background-color: var(--mx-btn-default-bg-color);
        border-color: var(--mx-btn-default-hover-bg-color);
      }
    }
    &-primary {
      color: var(--mx-btn-primary-text-color);
      background-color: var(--mx-btn-brand-color);
      border-color: var(--mx-btn-brand-color);
      &:hover:not(:disabled),
      &:focus:not(:disabled) {
        opacity: 0.8;
      }
    }
  }

  // 尺寸
  &-size {
    &-small {
      height: 24px;
      padding: 0 20px;
      font-size: 12px;
    }
    &-medium {
      height: 32px;
      padding: 0 20px;
      font-size: 14px;
    }
    &-large {
      height: 40px;
      padding: 0 20px;
      font-size: 16px;
    }
  }

  // 是否块级元素
  &.is-block {
    display: flex;
    width: 100%;
  }
  &.is-block + &.is-block {
    margin-top: 10px;
    margin-left: 0;
  }
}
</style>
