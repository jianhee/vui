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
        v-if="_prefixIconProps"
        v-bind="_prefixIconProps"
      />
      <!-- 输入框 -->
      <input
        ref="inputElRef"
        v-model="modelValue"
        :type="inputType"
        :readonly="isReadonly"
        :disabled="isDisabled"
        :autofocus="autofocus"
        :placeholder="placeholder"
        :maxlength="maxlength"
        class="vui-input-inner"
        @input="onInput"
        @change="onChange"
        @keyup.enter="onEnter"
      />
      <!-- 统计字数 -->
      <div
        v-if="maxlength && showWordLimit"
        class="vui-input-count"
      >
        {{ modelValue?.length || 0 }}/{{ maxlength }}
      </div>
      <!-- 清除图标 -->
      <VIcon
        v-if="isShowClear"
        class="vui-input-icon--clear"
        :icon="IconClear"
        @click.stop="onClickClearIcon"
      />
      <!-- 密码图标 -->
      <VIcon
        v-if="isShowPassword"
        class="vui-input-icon--password"
        :icon="inputType === 'password' ? IconEyeClose : IconEyeOpen"
        @click.stop="onClickToggleIcon"
      />
      <!-- 后置内容 -->
      <VIcon
        v-if="_suffixIconProps"
        v-bind="_suffixIconProps"
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
import { useTemplateRef } from 'vue';
import { useInput, inputModel, inputProps, inputEmits } from './composables';
import { useIconProps } from '../icon/composables';
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
const { isDisabled, isReadonly, rootClasses, wraperClasses, inputType, isShowPassword, onClickToggleIcon, isShowClear, onClickClearIcon, onInput, onChange, onEnter } = useInput({
  wraperElRef,
  inputElRef,
  modelValue,
  props,
  emits
});

// 使用图标
const _prefixIconProps = useIconProps(props.prefixIcon, props.prefixIconProps);
const _suffixIconProps = useIconProps(props.suffixIcon, props.suffixIconProps);
</script>
