<!-- 输入框 -->
<template>
  <div
    v-bind="rootAttrs"
    :class="rootClasses"
    @click="onClickRoot"
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
      @input="onInput"
      @change="onChange"
      @keyup.enter="onEnter"
    />
    <!-- 清空图标 -->
    <VIcon
      v-if="isShowClearIcon"
      class="vui-input-clear"
      :component="IconClear"
      @click.stop="onClickClearIcon"
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
const { rootAttrs, innerAttrs } = useFormElementAttrs();

// 使用输入框
const { rootClasses, onClickRoot, onInput, onChange, onEnter, isShowClearIcon, onClickClearIcon } = useInput({
  inputEl,
  modelValue,
  props,
  emits
});

// 使用图标
const { iconProps } = useIconProps(props.icon);
</script>
