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
import { ref, computed, onMounted } from 'vue';
import { addUnit } from '../../utils';

// 参数
const props = defineProps({
  // 显示模式：表单项默认块级模式
  filedInline: { type: Boolean, default: false },
  filedBlock: { type: Boolean, default: true },
  // 标签位置：left, right, top
  labelPosition: { type: String, default: 'left' },
  // 标签宽度：数字或字符串，默认取最长标签的宽度，省略单位时默认 `px`
  // 行内模式和顶部标签不生效
  labelWidth: { type: [Number, String], default: null }
});

// 是否行内
const isInline = computed(() => props.filedInline || !props.filedBlock);

// 计算最长标签的宽度
const formRef = ref(null);
const maxLabelWidth = ref(null);
onMounted(() => {
  if (props.labelWidth) return;
  const labels = formRef.value.querySelectorAll('.vui-form-label');
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
  const noWidth = isInline.value || props.labelPosition === 'top';
  if (noWidth) return null;

  // 设置宽度
  const width = props.labelWidth || maxLabelWidth.value;
  return { '--vui-form-label-width': addUnit(width, 'px') };
});
</script>
