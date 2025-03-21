<!-- 多选框 -->
<template>
  <label class="mx-checkbox">
    <input
      v-model="checked"
      type="checkbox"
      class="mx-checkbox-input"
      @change="onChange"
    />
    <MxIcon
      :component="IconCheckbox"
      class="mx-checkbox-icon"
    />
    <span
      v-if="slots.default || label"
      class="mx-checkbox-label"
    >
      <slot v-if="slots.default" />
      <template v-else-if="label">{{ label }}</template>
    </span>
  </label>
</template>

<script setup>
import { useSlots } from 'vue';
import MxIcon from './MxIcon.vue';
import IconCheckbox from '../icons/checkbox.vue';

// 显示内容：优先级高于 label
const slots = useSlots();

// 文本
defineProps({
  label: { type: String, default: null }
});

// 是否选中
const checked = defineModel('checked', { type: Boolean, default: false });

// 修改值
const emits = defineEmits(['change']);
function onChange() {
  emits('change', checked.value);
}
</script>

<style lang="scss">
@use '../styles/vars';
.mx-checkbox {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  &-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
  &-icon {
    overflow: hidden;
    color: var(--mx-checkbox-default-color);
    border-radius: 2px;
  }
  &-input:checked + &-icon {
    color: var(--mx-checkbox-active-color);
  }
}
</style>
