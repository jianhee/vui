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
      ref="inputRef"
      v-model="modelValue"
      type="text"
      class="vui-input-inner"
      v-bind="innerAttrs"
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
import { shallowRef } from 'vue';
import { inputModel, inputProps, inputEmits, useInput } from './composables';
import { useFormElement } from './composables/base';
import { useIconProps } from '../icon/composables/base';
import IconClear from '../../icons/clear.vue';

// 根元素
const inputRef = shallowRef();

// 输入框
const modelValue = defineModel('value', inputModel.value);
const props = defineProps(inputProps);
const emits = defineEmits(inputEmits);
const { focused, wraperClasses, isShowClearIcon, onValueInput, onValueChange, onKeyupEnter, onClearValue } = useInput({ modelValue, props, emits, inputRef });

// 筛选属性
defineOptions({ inheritAttrs: false });
const { wraperAttrs, innerAttrs } = useFormElement();

// 图标
const { iconProps } = useIconProps(props.icon);
</script>
