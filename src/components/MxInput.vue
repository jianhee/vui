<!-- 输入框 -->
<template>
  <div
    class="mx-input"
    :class="inputClasses"
  >
    <!-- 前置图标 -->
    <MxIcon
      v-if="icon"
      v-bind="iconProps"
    />
    <!-- 输入框 -->
    <input
      v-model="modelValue"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      type="text"
      class="mx-input-inner"
      :class="innerClasses"
      @input="onValueInput"
      @change="onValueChange"
      @keyup.enter="onKeyupEnter"
    />
    <!-- 清空 -->
    <MxIcon
      v-if="modelValue && !disabled"
      :component="IconClear"
      clickable
      class="mx-input-clear"
      @click="clearValue"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { getIconProps } from '../composables';
import IconClear from '../assets/icons/clear.vue';

const emits = defineEmits(['input', 'change', 'clear', 'enter']);

// 参数
const props = defineProps({
  // 原生属性
  placeholder: { type: String, default: null },
  maxlength: { type: [Number, String], default: null },
  disabled: { type: Boolean, default: false },
  // 尺寸：small, medium
  size: { type: String, default: 'medium' },
  // 前置图标：MxIcon 组件的 name/component/props
  icon: { type: [String, Object], default: null }
});

// 获取类名
const inputClasses = computed(() => {
  return [`mx-input-${props.size}`, { 'mx-disabled': props.disabled }];
});
const innerClasses = computed(() => {
  return { 'mx-disabled': props.disabled };
});

// 获取图标 props
const iconProps = computed(() => getIconProps(props.icon));

// 当前值
const modelValue = defineModel('value', { type: String, default: null });

// 输入值
function onValueInput() {
  emits('input', modelValue.value);
}

// 修改值
function onValueChange() {
  emits('change', modelValue.value);
}

// 按下enter键
function onKeyupEnter() {
  emits('enter', modelValue.value);
}

// 清空值
function clearValue() {
  const newVal = '';
  modelValue.value = newVal;
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
  &:hover:not(.mx-disabled) {
    border-color: var(--mx-brand-color-default);
  }

  // 尺寸
  &-medium {
    height: 32px;
    font-size: 14px;
  }
  &-small {
    height: 24px;
    font-size: 12px;
  }

  // 输入框
  &-inner {
    flex: auto;
    height: 100%;
    font-size: inherit;
    outline: 0;
    background-color: transparent;
  }

  // 图标
  .mx-icon {
    color: var(--mx-input-icon-color);
  }

  // 清空按钮
  &-clear {
    display: none !important;
  }
  &:hover &-clear {
    display: inline-flex !important;
  }
}
</style>
