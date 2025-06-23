<!-- 输入框 -->
<template>
  <div
    v-bind="wraperAttrs"
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
      ref="inputEl"
      v-model="modelValue"
      type="text"
      class="vui-input-inner"
      v-bind="innerAttrs"
      :disabled="disabled"
      @input="onValueInput"
      @change="onValueChange"
      @keyup.enter="onKeyupEnter"
    />
    <!-- 清空 -->
    <VIcon
      v-if="isShowClearIcon"
      class="vui-input-clear"
      :component="IconClear"
      clickable
      @click.stop="onClearValue"
    />
  </div>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { useInput, inputModel, inputProps, inputEmits } from './composables';
import { useFormElementAttrs } from './composables/base';
import { useIconProps } from '../icon/composables/base';
import IconClear from '../../icons/clear.vue';

// 输入框
defineOptions({ inheritAttrs: false });
const inputEl = useTemplateRef('inputEl');
const modelValue = defineModel('value', inputModel.value);
const props = defineProps(inputProps);
const emits = defineEmits(inputEmits);

// 筛选属性
const { wraperAttrs, innerAttrs } = useFormElementAttrs();

// 使用输入框
const { focused, wraperClasses, isShowClearIcon, onValueInput, onValueChange, onKeyupEnter, onClearValue } = useInput({
  inputEl,
  modelValue,
  props,
  emits
});

// 使用图标
const { iconProps } = useIconProps(props.icon);
</script>
