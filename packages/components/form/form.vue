<!-- 表单-容器 -->
<template>
  <div
    ref="formRef"
    :class="formClasses"
    :style="labelWidthStyles"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useElementVisibility } from '@vueuse/core';
import { addUnit } from '../../utils';

// 参数
const props = defineProps({
  // 显示模式：表单项默认块级模式
  filedInline: { type: Boolean, default: false },
  filedBlock: { type: Boolean, default: true },
  // 标签位置：left, right, top
  labelPosition: { type: String, default: 'left' },
  // 标签宽度：仅块级模式的左侧/右侧标签有效，默认值取最长标签的宽度，默认单位 `px`
  labelWidth: { type: [Number, String], default: null }
});

// 是否行内
const isInline = computed(() => props.filedInline || !props.filedBlock);

// 计算最长标签的宽度
const maxLabelWidth = ref(null);
const formRef = ref(null);
const formIsVisible = useElementVisibility(formRef);
watchEffect(async () => {
  // 初始隐藏时无法获取宽度
  if (!formIsVisible.value) return;
  // 设置的值
  if (props.labelWidth) return;
  // 最长的值
  const labels = formRef.value.querySelectorAll('.vui-form-label');
  if (!labels.length) return;
  const labelWidths = Array.from(labels).map(label => label.offsetWidth);
  maxLabelWidth.value = Math.max(...labelWidths);
});

// 获取类名
const formClasses = computed(() => {
  return [
    'vui-form',
    {
      'vui-form--filed-inline': isInline.value,
      [`vui-form--label-${props.labelPosition}`]: props.labelPosition !== 'left'
    }
  ];
});

// 获取样式
const labelWidthStyles = computed(() => {
  // 是否使用宽度
  const useWidth = !isInline.value && props.labelPosition !== 'top';
  if (!useWidth) return null;

  // 设置宽度
  const width = props.labelWidth || maxLabelWidth.value;
  return { '--vui-form-label-width': addUnit(width, 'px') };
});
</script>
