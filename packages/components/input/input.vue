<!-- 输入框 -->
<template>
  <div
    :class="wraperClasses"
    @click="focused = true"
  >
    <!-- 前置图标 -->
    <VIcon
      v-if="icon"
      v-bind="iconProps"
    />
    <!-- 输入框 -->
    <input
      ref="target"
      v-model="modelValue"
      type="text"
      class="vui-input-inner"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxlength"
      @input="onValueInput"
      @change="onValueChange"
      @keyup.enter="onKeyupEnter"
    />
    <!-- 清空 -->
    <VIcon
      v-if="modelValue && !disabled"
      class="vui-input-clear"
      :component="IconClear"
      clickable
      @click.stop="clearValue"
    />
  </div>
</template>

<script setup>
import { shallowRef, computed } from 'vue';
import { useFocus } from '@vueuse/core';
import { getIconProps } from '../icon/utils';
import IconClear from '../../icons/clear.vue';

const emits = defineEmits(['input', 'change', 'clear', 'enter']);

// 参数
const props = defineProps({
  // 原生属性
  placeholder: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  maxlength: { type: [Number, String], default: null },
  // 前置图标：VIcon 组件的 name/component/props
  icon: { type: [String, Object], default: null },
  // 尺寸：small, medium
  size: { type: String, default: 'medium' }
});

// 是否获取焦点
const target = shallowRef();
const { focused } = useFocus(target);

// 获取容器类名
const wraperClasses = computed(() => {
  return [
    'vui-input',
    `vui-input-${props.size}`,
    {
      'is-disabled': props.disabled,
      'is-focus': focused.value
    }
  ];
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
