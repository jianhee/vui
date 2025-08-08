<!-- 输入框 -->
<template>
  <div
    ref="rootElRef"
    :class="['vui-input', rootClasses]"
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
      :type="inputType"
      :disabled="disabled"
      :autofocus="autofocus"
      :placeholder="placeholder"
      :maxlength="maxlength"
      class="vui-input-inner"
      @input="onInput"
      @change="onChange"
      @keyup.enter="onEnter"
    />
    <!-- 后置图标 -->
    <template v-if="modelValue && !disabled">
      <!-- 清除 -->
      <VIcon
        v-if="isShowClear"
        class="vui-input-icon"
        :component="IconClear"
        @click.stop="onClickClearIcon"
      />
      <!-- 密码 -->
      <VIcon
        v-if="isShowPassword"
        class="vui-input-icon"
        :component="inputType === 'password' ? IconEyeClose : IconEyeOpen"
        @click.stop="onClickToggleIcon"
      />
    </template>
  </div>
</template>

<script setup>
import { computed, useTemplateRef } from 'vue';
import { useInput, inputModel, inputProps, inputEmits } from './composables';
import { useIconProps } from '../../composables/use-icon-props';
import IconClear from '../../icons/circle-close.vue';
import IconEyeOpen from '../../icons/eye-open.vue';
import IconEyeClose from '../../icons/eye-close.vue';

// 输入框
const rootElRef = useTemplateRef('rootElRef');
const inputElRef = useTemplateRef('inputElRef');
const modelValue = defineModel('value', inputModel.value);
const props = defineProps(inputProps);
const emits = defineEmits(inputEmits);

// 使用输入框
const { rootClasses, onRootClick, inputType, isShowPassword, onClickToggleIcon, isShowClear, onClickClearIcon, onInput, onChange, onEnter } = useInput({
  rootElRef,
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
