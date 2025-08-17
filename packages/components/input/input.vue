<!-- 输入框 -->
<template>
  <div
    :class="[
      'vui-input',
      rootClasses,
      {
        'vui-input--prepend': $slots.prepend || prepend,
        'vui-input--append': $slots.append || append
      }
    ]"
  >
    <!-- 前置标签 -->
    <div
      v-if="$slots.prepend || prepend"
      class="vui-input-prepend"
    >
      <slot name="prepend" />
      {{ prepend }}
    </div>
    <!-- 中间内容 -->
    <div
      ref="wraperElRef"
      :class="['vui-input-wrapper', wraperClasses]"
    >
      <slot name="prefix" />
      {{ prefix }}
      <VIcon
        v-if="prefixIcon"
        v-bind="prefixIconProps"
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
      <!-- 内置图标 -->
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
      <!-- 后置内容 -->
      <VIcon
        v-if="suffixIcon"
        v-bind="suffixIconProps"
      />
      {{ suffix }}
      <slot name="suffix" />
    </div>
    <!-- 后置标签 -->
    <div
      v-if="$slots.append || append"
      class="vui-input-append"
    >
      {{ append }}
      <slot name="append" />
    </div>
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
const wraperElRef = useTemplateRef('wraperElRef');
const inputElRef = useTemplateRef('inputElRef');
const modelValue = defineModel('value', inputModel.value);
const props = defineProps(inputProps);
const emits = defineEmits(inputEmits);

// 使用输入框
const { rootClasses, wraperClasses, inputType, isShowPassword, onClickToggleIcon, isShowClear, onClickClearIcon, onInput, onChange, onEnter } = useInput({
  wraperElRef,
  inputElRef,
  modelValue,
  props,
  emits
});

// 使用图标
const { iconProps: prefixIconProps } = useIconProps({
  iconRef: computed(() => props.prefixIcon)
});
const { iconProps: suffixIconProps } = useIconProps({
  iconRef: computed(() => props.suffixIcon)
});
</script>
