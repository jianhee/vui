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
  // 按钮尺寸：small, default, large
  size: { type: String, default: 'default' },
  // 显示类型：`inline` 行内（默认），`block` 独占一行
  display: { type: String, default: 'inline' },
  // 圆角尺寸
  radius: { type: String, default: null }
});

// 获取类名
const btnClasses = computed(() => {
  return [
    'vui-btn',
    `vui-btn--type-${props.type}`,
    {
      [`vui-btn--size-${props.size}`]: props.type !== 'link',
      'vui-btn--display-block': props.display === 'block',
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
const { iconProps } = useIcon(props.icon);
</script>
