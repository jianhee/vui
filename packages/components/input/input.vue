<!-- 输入框 -->
<template>
  <div
    :class="['vui-input', rootClasses]"
    v-bind="rootProps"
    @click="onRootClick"
  >
    <!-- 前置图标 -->
    <VIcon
      v-if="icon"
      v-bind="iconProps"
    />
    <!-- 输入框 -->
    <input
      ref="inputElRef"
      v-model="modelValue"
      type="text"
      class="vui-input-inner"
      v-bind="nativeProps"
      @input="onInput"
      @change="onChange"
      @keyup.enter="onEnter"
    />
    <!-- 清空图标 -->
    <VIcon
      v-if="modelValue && !nativeProps.disabled"
      class="vui-input-clear"
      :component="IconClear"
      @click.stop="clearValue"
    />
  </div>
</template>

<script setup>
import { computed, useTemplateRef } from 'vue';
import { useInput, inputModel, inputProps, inputEmits } from './composables';
import { useNativeProps } from '../../composables/use-native-props';
import { useIconProps } from '../../composables/use-icon-props';
import IconClear from '../../icons/clear.vue';

// 筛选属性
defineOptions({ inheritAttrs: false });
const { rootProps, nativeProps } = useNativeProps(['disabled', 'maxlength', 'placeholder']);

// 输入框
const inputElRef = useTemplateRef('inputElRef');
const modelValue = defineModel('value', inputModel.value);
const props = defineProps(inputProps);
const emits = defineEmits(inputEmits);

// 使用输入框
const { rootClasses, onRootClick, onInput, onChange, onEnter, clearValue } = useInput({
  inputElRef,
  modelValue,
  props,
  emits
});

// 使用图标
const { iconProps } = useIconProps({
  iconRef: computed(() => props.icon)
});
</script>
