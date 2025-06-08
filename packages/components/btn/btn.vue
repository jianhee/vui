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
      :component="IconLoadingLoop"
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
import { useIcon } from '../icon/composables';
import IconLoadingLoop from '../../icons/loading-loop.vue';
import { addUnit } from '../../utils';

// 参数
const props = defineProps({
  // 按钮类型：primary, default, link
  type: { type: String, default: 'default' },
  // 禁用状态
  disabled: { type: Boolean, default: false },
  // 加载状态
  loading: { type: Boolean, default: false },
  // 图标按钮：`VIcon` 组件的 `name/component/props`
  icon: { type: [String, Object], default: null },
  // 按钮尺寸：large, medium, small
  size: { type: String, default: 'medium' },
  // 显示模式：默认行内模式
  block: { type: Boolean, default: false },
  inline: { type: Boolean, default: true },
  // 圆角尺寸：默认值 `4px`，默认单位 `px`
  radius: { type: [Number, String], default: null }
});

// 获取类名
const btnClasses = computed(() => {
  return [
    'vui-btn',
    `vui-btn--${props.type}`,
    {
      [`vui-btn--${props.size}`]: props.type !== 'link',
      'vui-btn--block': props.block || !props.inline
    }
  ];
});

// 获取样式
const btnStyles = computed(() => {
  return { borderRadius: addUnit(props.radius, 'px') };
});

// 是否禁用
const isDisabled = computed(() => props.disabled || props.loading);

// 获取图标 props
const { iconProps } = useIcon(props.icon);
</script>
