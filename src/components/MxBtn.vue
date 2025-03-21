<!-- 按钮 -->
<template>
  <button
    type="button"
    :disabled="disabled || loading"
    :class="['mx-btn', `is-${type}`, `is-${size}`]"
  >
    <!-- loading -->
    <MxIcon
      v-if="loading"
      :component="IconLoading"
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
import MxIcon from './MxIcon.vue';
import MxIconInside from './MxIconInside.vue';
import IconLoading from '../icons/loading.vue';

defineProps({
  // 类型：default, primary
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
</script>

<style lang="scss">
:root {
  // brand
  --mx-btn-brand-color: #458ff3;

  // default
  --mx-btn-default-bg-color: #458ff31a;
  --mx-btn-default-border-color: #ddd;
  --mx-btn-default-hover-bg-color: #458ff34d;

  // primary
  --mx-btn-primary-text-color: #fff;
}

@media (prefers-color-scheme: dark) {
  :root {
    // brand
    --mx-btn-brand-color: #6f8cb4;

    // default
    --mx-btn-default-bg-color: #6f8cb41a;
    --mx-btn-default-border-color: #4f4f4f;
    --mx-btn-default-hover-bg-color: #6f8cb44d;
  }
}
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
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  transition: all 0.3s ease;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  // 尺寸
  &.is-medium {
    padding: 8px 20px;
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
