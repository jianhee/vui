<!-- 选择器 -->
<template>
  <div
    v-bind="rootAttrs"
    :class="rootClasses"
  >
    <!-- 显示选项 -->
    <select
      v-if="options"
      ref="selectElRef"
      v-model="modelValue"
      class="vui-select-inner"
      v-bind="innerAttrs"
      :disabled="disabled"
      @change="onChange"
    >
      <option
        v-for="item in formattdOptions"
        :key="item.value"
        :value="item.value"
        class="vui-select-option"
      >
        {{ item.label }}
      </option>
    </select>
    <!-- 显示文本 -->
    <span
      v-else
      class="vui-select-inner"
    >
      {{ modelValue }}
    </span>
    <!-- 图标 -->
    <VIcon
      class="vui-select-icon"
      :component="IconArrow"
    />
  </div>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { useSelect, selectModel, selectProps, selectEmits } from './composables';
import { useFormElementAttrs } from '../input/composables/base';
import IconArrow from '../../icons/select-arrow.vue';

// 选择器
defineOptions({ inheritAttrs: false });
const selectElRef = useTemplateRef('selectElRef');
const modelValue = defineModel('value', selectModel.value);
const props = defineProps(selectProps);
const emits = defineEmits(selectEmits);

// 筛选属性
const { rootAttrs, innerAttrs } = useFormElementAttrs();

// 使用选择器
const { formattdOptions, onChange, rootClasses } = useSelect({
  selectElRef,
  modelValue,
  props,
  emits
});
</script>
