<!-- 选择器 -->
<template>
  <div :class="wraperClasses">
    <!-- 显示文本 -->
    <span
      v-if="text"
      :class="innerClasses"
    >
      {{ text }}
    </span>
    <!-- 显示下拉 -->
    <select
      v-else
      ref="target"
      v-model="modelValue"
      :disabled="disabled"
      :class="innerClasses"
      @focus="isFocus = true"
      @blur="isFocus = false"
      @change="onValueChange"
    >
      <option
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        class="mx-select-option"
      >
        {{ item.label }}
      </option>
    </select>
    <!-- 图标 -->
    <MxIcon
      class="mx-select-icon"
      :component="IconArrow"
    />
  </div>
</template>

<script setup>
import { shallowRef, computed } from 'vue';
import { useFocus } from '@vueuse/core';
import IconArrow from '../assets/icons/select-arrow.vue';

const emits = defineEmits(['change']);

// 参数
const props = defineProps({
  // 选项：{ value: '值', label: '文本' }
  items: { type: Array, default: null },
  // 原生属性
  disabled: { type: Boolean, default: false },
  // 尺寸：small, medium
  size: { type: String, default: 'medium' },
  // 作为文本显示
  text: { type: [String, Number], default: null }
});

// 是否获取焦点
const target = shallowRef();
const { focused } = useFocus(target);

// 获取容器类名
const wraperClasses = computed(() => {
  return [
    'mx-select',
    `mx-select-${props.size}`,
    {
      'mx-disabled': props.disabled,
      'is-focus': focused.value
    }
  ];
});

// 获取内容类名
const innerClasses = computed(() => {
  return ['mx-select-inner', { 'mx-disabled': props.disabled }];
});

// 当前值
const modelValue = defineModel('value', { type: [String, Number], default: null });

// 修改值
function onValueChange(item) {
  emits('change', item);
}
</script>

<style lang="scss">
@use '../assets/styles/mixins';
@include mixins.mx-input('mx-select');
.mx-select {
  position: relative;
  cursor: pointer;
  &-inner {
    padding-right: 18px;
    padding-left: 8px;
    cursor: pointer;
  }
  &-icon {
    position: absolute;
    top: 50%;
    right: 8px;
    z-index: -1;
    transform: translateY(-7px);
  }
  &-option {
    cursor: pointer;
    background-color: var(--mx-option-bg-color);
  }
}
</style>
