<!-- 选择器 -->
<template>
  <!-- 触发器：必填 -->
  <div
    ref="triggerElRef"
    :class="['vui-select', triggerClasses]"
    v-bind="$attrs"
    @click="onTriggerClick"
  >
    <!-- 文本 -->
    <span :class="['vui-select-inner', innerClasses]">
      {{ innerText || placeholder }}
    </span>
    <!-- 图标 -->
    <VIcon
      class="vui-select-icon"
      :icon="IconArrowDown"
      v-bind="iconProps"
    />
  </div>

  <!-- 下拉框：必填 -->
  <Dropdown
    ref="dropdownElRef"
    trigger="click"
    close-on-click-dropdown
    class="vui-select-dropdown"
    :style="dropdownStyles"
    @open="onDropdownToggle(true)"
    @close="onDropdownToggle(false)"
  >
    <template #dropdown>
      <!-- 自定义选项 -->
      <slot
        v-if="$slots.options"
        name="options"
      />
      <!-- 默认选项 -->
      <Menu
        v-else
        v-model:selected-key="modelValue"
        :items="formattedOptions"
        selectable
        @select="onSelectOption"
      />
    </template>
  </Dropdown>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { useSelect, selectModel, selectProps, selectEmits } from './composables';
import Dropdown from '../dropdown/dropdown.vue';
import Menu from '../menu/menu.vue';
import IconArrowDown from '../../icons/arrow-down.vue';

// 选择器
defineOptions({ inheritAttrs: false });
const triggerElRef = useTemplateRef('triggerElRef');
const dropdownElRef = useTemplateRef('dropdownElRef');
const modelValue = defineModel('value', selectModel.value);
const props = defineProps(selectProps);
const emits = defineEmits(selectEmits);

// 使用选择器
const { triggerClasses, onTriggerClick, innerText, innerClasses, iconProps, onDropdownToggle, dropdownStyles, formattedOptions, onSelectOption } = useSelect({
  triggerElRef,
  dropdownElRef,
  modelValue,
  props,
  emits
});
</script>
