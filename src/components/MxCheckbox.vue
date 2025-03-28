<!-- 多选框 -->
<template>
  <label
    class="mx-checkbox"
    :class="classList"
  >
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
    <!-- 显示内容：slots 优先级高于 label -->
    <slot v-if="slots.default" />
    <span v-else-if="label">{{ label }}</span>
  </label>
</template>

<script setup>
import { computed, useSlots } from 'vue';
import MxIcon from './MxIcon.vue';
import IconCheckbox from '../icons/checkbox.vue';

const slots = useSlots();

const props = defineProps({
  // 文本
  label: { type: String, default: null },
  // 是否独占一行
  block: { type: Boolean, default: false }
});

// 是否选中
const checked = defineModel('checked', { type: Boolean, default: false });

// 修改值
const emits = defineEmits(['change']);
function onChange() {
  emits('change', checked.value);
}

// 类名
const classList = computed(() => {
  return {
    'is-checked': checked.value,
    'is-block': props.block
  };
});
</script>

<style lang="scss">
@use '../styles/vars';
.mx-checkbox {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 32px;
  margin-right: 10px;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
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
    transition: color 0.3s ease;
  }
  &.is-checked,
  &.is-checked .mx-checkbox-icon {
    color: var(--mx-checkbox-active-color);
  }
  &.is-block {
    display: flex;
  }
}
</style>
