<!-- 输入框 -->
<template>
  <div :class="wraperClasses">
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
      :class="innerClasses"
      @focus="isFocus = true"
      @blur="isFocus = false"
      @input="onValueInput"
      @change="onValueChange"
      @keyup.enter="onKeyupEnter"
    />
    <!-- 清空 -->
    <MxIcon
      v-if="modelValue && !disabled"
      :component="IconClear"
      clickable
      @click="clearValue"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { getIconProps } from '../composables';
import IconClear from '../assets/icons/clear.vue';

const emits = defineEmits(['input', 'change', 'clear', 'enter']);

// 参数
const props = defineProps({
  // 原生属性
  placeholder: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  maxlength: { type: [Number, String], default: null },
  // 前置图标：MxIcon 组件的 name/component/props
  icon: { type: [String, Object], default: null },
  // 尺寸：small, medium
  size: { type: String, default: 'medium' }
});

// 是否获取焦点
const isFocus = ref(false);

// 获取容器类名
const wraperClasses = computed(() => {
  return [
    'mx-input',
    `mx-input-${props.size}`,
    {
      'mx-disabled': props.disabled,
      'is-focus': isFocus.value
    }
  ];
});

// 获取内容类名
const innerClasses = computed(() => {
  return ['mx-input-inner', { 'mx-disabled': props.disabled }];
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
  modelValue.value = '';
  emits('clear');
}
</script>

<style lang="scss">
.mx-input {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  width: 240px;
  padding: 0 8px;
  border: 1px solid var(--mx-input-border-color);
  border-radius: 4px;
  transition: border-color 0.3s ease;
  &:not(.mx-disabled):hover,
  &:not(.mx-disabled).is-focus {
    border-color: var(--mx-input-active-border-color);
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
    color: var(--mx-input-text-color);
    outline: 0;
    background-color: transparent;
  }

  // 图标
  .mx-icon {
    color: var(--mx-input-icon-color);
  }
}
</style>
