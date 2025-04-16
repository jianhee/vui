<!-- 多选框 -->
<template>
  <label
    class="mx-checkbox"
    :class="boxClasses"
  >
    <!-- 图标 -->
    <input
      v-model="modelChecked"
      type="checkbox"
      class="mx-checkbox-input"
      @change="onCheckedChange"
    />
    <MxIcon
      :component="IconCheckbox"
      class="mx-checkbox-icon"
    />
    <!-- 文本 -->
    <span>{{ label }}</span>
    <!-- 自定义内容 -->
    <slot />
  </label>
</template>

<script setup>
import { computed } from 'vue';
import MxIcon from './MxIcon.vue';
import IconCheckbox from '../assets/icons/checkbox.vue';

const emits = defineEmits(['change']);

// 参数
const props = defineProps({
  // 文本
  label: { type: String, default: null },
  // 是否独占一行
  block: { type: Boolean, default: false }
});

// 是否选中
const modelChecked = defineModel('checked', { type: Boolean, default: false });

// 获取类名
const boxClasses = computed(() => {
  return {
    'is-block': props.block,
    'is-checked': modelChecked.value
  };
});

// 切换选中状态
function onCheckedChange() {
  emits('change', modelChecked.value);
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
  line-height: 32px;
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
