<!-- 选择器 -->
<template>
  <VDropdown
    v-model:selected-key="modelValue"
    :items="formattedOptions"
    selectable
    trigger="click"
    placement="bottom"
    close-on-click-item
    :disabled="!isEnabled"
    class="vui-select-dropdown"
    :style="dropdownStyles"
    @open="onVisibleChange(true)"
    @close="onVisibleChange(false)"
    @select="onSelectOption"
  >
    <div
      ref="triggerElRef"
      :class="['vui-select', triggerClasses]"
      tabindex="-1"
      v-bind="$attrs"
    >
      <!-- 文本 -->
      <span class="vui-select-inner">{{ selectedOptionLabel || placeholder }}</span>
      <!-- 清除图标 -->
      <VIcon
        v-if="isShowClearIcon"
        class="vui-select-icon--clear"
        :icon="IconClear"
        @click.stop="onClickClearIcon"
      />
      <!-- 展开图标 -->
      <VIcon
        v-else
        class="vui-select-icon--arrow"
        :icon="IconArrowDown"
        :rotate="expandIconRotate"
      />
    </div>
  </VDropdown>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { useSelect, selectModel, selectProps, selectEmits } from './composables';
import VDropdown from '../dropdown/dropdown.vue';
import IconArrowDown from '../../icons/arrow-down.vue';
import IconClear from '../../icons/circle-close.vue';

// 选择器
defineOptions({ inheritAttrs: false });
const triggerElRef = useTemplateRef('triggerElRef');
const modelValue = defineModel('value', selectModel.value);
const props = defineProps(selectProps);
const emits = defineEmits(selectEmits);

// 使用选择器
const { triggerClasses, isEnabled, expandIconRotate, isShowClearIcon, dropdownStyles, formattedOptions, selectedOptionLabel, onClickClearIcon, onVisibleChange, onSelectOption } = useSelect({
  triggerElRef,
  modelValue,
  props,
  emits
});
</script>
