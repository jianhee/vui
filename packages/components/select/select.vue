<!-- 选择器 -->
<template>
  <!-- 触发元素 -->
  <div
    ref="rootElRef"
    :class="['vui-select', rootClasses]"
    v-bind="$attrs"
    @click="onRootClick"
  >
    <!-- 文本 -->
    <span
      v-if="modelValue"
      class="vui-select-inner"
    >
      {{ selectedOption.label }}
    </span>
    <!-- 占位 -->
    <span
      v-else
      class="vui-select-inner vui-select-placeholder"
    >
      {{ placeholder }}
    </span>
    <!-- 图标 -->
    <VIcon
      class="vui-select-icon"
      :component="IconArrow"
      :rotate="iconRotate"
    />
  </div>

  <!-- 下拉菜单 -->
  <DropdownMenu
    ref="dropdownElRef"
    v-model:selected-key="modelValue"
    trigger="click"
    :items="formattedOptions"
    :style="dropdownStyles"
    selectable
    @select="onSelectOption"
    @open="onVisibleChange(true)"
    @close="onVisibleChange(false)"
  />
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { useSelect, selectModel, selectProps, selectEmits } from './composables';
import DropdownMenu from '../dropdown-menu/dropdown-menu.vue';
import IconArrow from '../../icons/select-arrow.vue';

// 选择器
defineOptions({ inheritAttrs: false });
const rootElRef = useTemplateRef('rootElRef');
const dropdownElRef = useTemplateRef('dropdownElRef');
const modelValue = defineModel('value', selectModel.value);
const props = defineProps(selectProps);
const emits = defineEmits(selectEmits);

// 使用选择器
const { rootClasses, onRootClick, iconRotate, onVisibleChange, dropdownStyles, formattedOptions, selectedOption, onSelectOption } = useSelect({
  rootElRef,
  dropdownElRef,
  modelValue,
  props,
  emits
});
</script>
