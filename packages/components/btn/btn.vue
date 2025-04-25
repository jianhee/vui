<!-- 按钮 -->
<template>
  <button
    type="button"
    :class="btnClasses"
    :style="btnStyles"
    :disabled="isDisabled"
  >
    <!-- loading -->
    <VIcon
      v-if="loading"
      :component="VIconLoadingLoop"
    />
    <!-- 图标 -->
    <VIcon
      v-if="icon"
      v-bind="iconProps"
    />
    <!-- 内容 -->
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { getIconProps } from '../icon/utils';
import VIconLoadingLoop from '../../icons/loading-loop.vue';

// 参数
const props = defineProps({
  // 类型：custom, default, primary, link
  type: { type: String, default: 'default' },
  // 禁用状态
  disabled: { type: Boolean, default: false },
  // 图标按钮：VIcon 组件的 name/component/props
  icon: { type: [String, Object], default: null },
  // 加载状态按钮
  loading: { type: Boolean, default: false },
  // 尺寸：small, medium, large
  size: { type: String, default: 'medium' },
  // 显示类型：inline 行内，block 独占一行
  display: { type: String, default: 'inline' },
  // 圆角
  radius: { type: String, default: null }
});

// 获取类名
const btnClasses = computed(() => {
  return [
    'vui-btn',
    `vui-btn-${props.type}`,
    {
      [`vui-btn-${props.size}`]: props.type !== 'link',
      [`vui-btn-${props.display}`]: props.display === 'block',
      'is-disabled': isDisabled.value
    }
  ];
});

// 获取样式
const btnStyles = computed(() => {
  return { borderRadius: props.radius };
});

// 是否禁用
const isDisabled = computed(() => props.disabled || props.loading);

// 获取图标 props
const iconProps = computed(() => getIconProps(props.icon));
</script>
