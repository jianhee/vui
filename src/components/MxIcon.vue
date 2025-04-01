<!-- 图标 -->
<!-- 本组件用于处理参数，然后传给 MxIconSingle 和 MxIconMulti -->
<template>
  <!-- 单个值：用于单色图标，使用 color 切换颜色 -->
  <!-- 多个值：用于多色图标，使用 js 切换图标，分成单独的组件是为了减少不必要的性能开销 -->
  <component
    :is="isMultiIcons ? MxIconMulti : MxIconSingle"
    class="mx-icon"
    :class="iconClasses"
    :style="iconStyles"
    :name="name"
    :component="component"
  />
</template>

<script setup>
import { computed } from 'vue';
import MxIconSingle from './MxIconSingle.vue';
import MxIconMulti from './MxIconMulti.vue';

// 参数
const props = defineProps({
  // 图标名称
  // 单个值：name="close"
  // 多个值：name="{ default: 'close', hover: 'close-hover', dark: 'close-dark', darkHover: 'close-dark-hover' }"
  name: { type: [String, Object], default: null },
  // 图标组件：同上
  component: { type: Object, default: null },
  // 图标大小: 16, '16'
  size: { type: [String, Number], default: null },
  // 图标颜色
  color: { type: String, default: null },
  // 是否可点击
  clickable: { type: Boolean, default: false },
  // 是否禁用
  disabled: { type: Boolean, default: false },
  // 旋转角度
  rotate: { type: [String, Number], default: null },
  // 旋转动画
  spin: { type: Boolean, default: false }
});

// 是否多个图标
const isMultiIcons = computed(() => props.name?.default || props.component?.default);

// 获取类名
const iconClasses = computed(() => ({
  'mx-state-clickable': props.clickable,
  'mx-state-disabled': props.disabled,
  'mx-animation-spin': props.spin
}));

// 获取样式
const iconStyles = computed(() => ({
  'color': props.color,
  'font-size': props.size ? `${props.size}px` : null,
  'transform': props.rotate ? `rotate(${props.rotate}deg)` : null
}));
</script>

<style lang="scss">
@use '../assets/styles/base';
.mx-icon {
  position: relative;
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  line-height: 1em;
  transition: all 0.3s ease;
  > svg {
    width: 1em;
    height: 1em;
    fill: currentcolor;
  }
}
</style>
