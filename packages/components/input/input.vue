<!-- 输入框 -->
<template>
  <div
    :class="wraperClasses"
    v-bind="wraperAttrs"
    @click="focused = true"
  >
    <!-- 前置图标 -->
    <VIcon
      v-if="icon"
      v-bind="iconProps"
    />
    <!-- 输入框 -->
    <input
      ref="inputRef"
      v-model="modelValue"
      type="text"
      class="vui-input-inner"
      :disabled="disabled"
      v-bind="innerAttrs"
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
import { useProps } from './composables';
import { useIcon } from '../icon/composables';
import IconClear from '../../icons/clear.vue';

const emits = defineEmits(['input', 'change', 'enter', 'clear']);

// 参数
const props = defineProps({
  // 前置图标：VIcon 组件的 name/component/props
  icon: { type: [String, Object], default: null },
  // 尺寸：medium, small
  size: { type: String, default: 'medium' },
  // 单独处理的原生属性
  disabled: { type: Boolean, default: false }
});

// 接收参数
const { wraperAttrs, innerAttrs } = useProps();
const { iconProps } = useIcon(props.icon);

// 是否获取焦点
const inputRef = shallowRef();
const { focused } = useFocus(inputRef);

// 获取外层类名
const wraperClasses = computed(() => {
  return [
    'vui-input',
    `vui-input--${props.size}`,
    {
      'is-disabled': props.disabled,
      'is-focus': focused.value
    }
  ];
});

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

// 按下 `Enter` 键
function onKeyupEnter() {
  focused.value = false;
  emits('enter', modelValue.value);
}

// 清空值
function clearValue() {
  modelValue.value = '';
  emits('clear', '');
}
</script>
