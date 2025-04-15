<!-- 单选框-项 -->
<template>
  <label :class="['mx-radio-item', { 'is-checked': item.value === modelValue }]">
    <!-- 图标 -->
    <input
      :value="item.value"
      :checked="item.value === modelValue"
      type="radio"
      class="mx-radio-input"
      @change="onValueChange(item)"
    />
    <MxIcon
      :component="IconRadio"
      class="mx-radio-icon"
    />
    <!-- 文本 -->
    <span>{{ item.label }}</span>
    <!-- 自定义内容 -->
    <slot />
  </label>
</template>

<script setup>
import { inject } from 'vue';
import MxIcon from './MxIcon.vue';
import IconRadio from '../assets/icons/radio.vue';

defineProps({
  // 单选框项
  // value    值
  // label    显示内容
  item: { type: Object, default: null }
});

// 共享数据
const modelValue = inject('modelValue');
const onValueChange = inject('onValueChange');
</script>
