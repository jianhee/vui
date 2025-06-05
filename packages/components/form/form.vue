<!-- 表单-容器 -->
<template>
  <div
    :class="formClasses"
    :style="formStyles"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

// 参数
const props = defineProps({
  // 显示模式：表单项默认块级模式
  filedInline: { type: Boolean, default: false },
  filedBlock: { type: Boolean, default: true },
  // 标签位置：left, right, top
  labelPosition: { type: String, default: 'left' },
  // 标签宽度：默认 `4em`，并且行内模式和顶部标签不生效
  labelWidth: { type: String, default: '4em' }
});

// 是否行内
const isInline = computed(() => props.filedInline || !props.filedBlock);

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
const formStyles = computed(() => {
  const noWidth = isInline.value || props.labelPosition === 'top';
  return {
    '--vui-form-label-width': noWidth ? null : props.labelWidth
  };
});
</script>
