<!-- 多选框 -->
<template>
  <label
    class="mx-checkbox"
    :class="boxClasses"
  >
    <input
      v-model="isChecked"
      type="checkbox"
      class="mx-checkbox-input"
      @change="onCheckedChange"
    />
    <MxIcon
      :component="IconCheckbox"
      class="mx-checkbox-icon"
    />
    <!-- 优先显示slot -->
    <slot v-if="slots.default" />
    <span v-else-if="label">{{ label }}</span>
  </label>
</template>

<script setup>
import { computed, useSlots } from 'vue';
import MxIcon from './MxIcon.vue';
import IconCheckbox from '../assets/icons/checkbox.vue';

const slots = useSlots();
const emits = defineEmits(['change']);

// 参数
const props = defineProps({
  // 文本
  label: { type: String, default: null },
  // 是否独占一行
  block: { type: Boolean, default: false }
});

// 是否选中
const isChecked = defineModel('checked', { type: Boolean, default: false });

// 获取类名
const boxClasses = computed(() => {
  return {
    'is-checked': isChecked.value,
    'is-block': props.block
  };
});

// 切换选中状态
function onCheckedChange() {
  emits('change', isChecked.value);
}
</script>

<style lang="scss">
@use '../assets/styles/vars';
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
  &.is-block {
    display: flex;
  }
  &.is-checked,
  &.is-checked .mx-checkbox-icon {
    color: var(--mx-checkbox-active-color);
  }
}
</style>
