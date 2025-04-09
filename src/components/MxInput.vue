<!-- 输入框 -->
<template>
  <div
    class="mx-input"
    :class="inputClasses"
  >
    <!-- 前置图标 -->
    <MxIconInside
      v-if="prefixIcon"
      :icon="prefixIcon"
    />
    <!-- 输入框 -->
    <input
      v-model="valRef"
      type="text"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      class="mx-input-inner"
      @input="onValueInput"
      @change="onValueChange"
      @keyup.enter="onKeyupEnter"
    />
    <!-- 清空 -->
    <MxIcon
      v-if="valRef && !disabled"
      :component="IconClear"
      clickable
      class="mx-input-clear"
      @click="clearValue"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import IconClear from '../assets/icons/clear.vue';

const emits = defineEmits(['input', 'change', 'clear', 'enter']);

// 参数
const props = defineProps({
  // 占位符
  placeholder: { type: String, default: null },
  // 最大长度
  maxlength: { type: Number, default: null },
  // 禁用状态
  disabled: { type: Boolean, default: false },
  // 尺寸：small, medium
  size: { type: String, default: 'medium' },
  // 前置图标：MxIcon 组件的 name/component/props
  prefixIcon: { type: [String, Object], default: null }
});

// 获取类名
const inputClasses = computed(() => {
  return {
    'mx-state-disabled': props.disabled,
    [`is-size-${props.size}`]: true
  };
});

// 当前值
const valRef = defineModel('value', { type: String, default: null });

// 输入值
function onValueInput() {
  emits('input', valRef.value);
}

// 修改值
function onValueChange() {
  emits('change', valRef.value);
}

// 按下enter键
function onKeyupEnter() {
  emits('enter', valRef.value);
}

// 清空值
function clearValue() {
  const newVal = '';
  valRef.value = newVal;
  emits('clear', newVal);
}
</script>

<style lang="scss">
.mx-input {
  display: flex;
  gap: 8px;
  align-items: center;
  width: 240px;
  padding: 0 8px;
  border: 1px solid var(--mx-border-color);
  border-radius: 4px;
  &:hover:not(.mx-state-disabled) {
    border-color: var(--mx-brand-color-default);
  }

  // 尺寸
  &.is-size {
    &-medium {
      height: 32px;
      font-size: 14px;
    }
    &-small {
      height: 24px;
      font-size: 12px;
    }
  }

  // 输入框
  &-inner {
    flex: auto;
    height: 100%;
    font-size: inherit;
    outline: 0;
    background-color: transparent;
  }
  &.mx-state-disabled .mx-input-inner {
    cursor: not-allowed;
  }

  // 图标
  .mx-icon {
    color: var(--mx-input-icon-color);
  }
  &-clear {
    display: none !important;
  }
  &:hover &-clear {
    display: inline-flex !important;
  }
}
</style>
