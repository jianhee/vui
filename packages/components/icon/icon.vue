<!-- 图标-容器 -->
<!-- 单图标：适用于单色图标和无需切换状态的多色图标，通过 css 设置 color 对应不同状态 -->
<!-- 多图标：适用于需要切换状态的多色图标，通过 js 切换图标对应不同状态 -->
<!-- 分成单独的组件是为了减少不必要的性能开销 -->
<template>
  <component
    :is="isMultiIcons ? VIconMulti : VIconSingle"
    class="vui-icon"
    :class="iconClasses"
    :style="iconStyles"
    :name="name"
    :component="component"
  />
</template>

<script setup>
import { computed } from 'vue';
import VIconSingle from './icon-single.vue';
import VIconMulti from './icon-multi.vue';

// 参数
const props = defineProps({
  // 图标名称
  // 单图标：name="close"
  // 多图标：name="{ default: 'close', hover: 'close-hover', dark: 'close-dark', darkHover: 'close-dark-hover' }"
  name: { type: [String, Object], default: null },
  // 图标组件：同上
  component: { type: Object, default: null },
  // 图标颜色
  color: { type: String, default: null },
  // 图标大小: 16, '16'
  size: { type: [String, Number], default: null },
  // 是否可点击
  clickable: { type: Boolean, default: false },
  // 是否禁用
  disabled: { type: Boolean, default: false },
  // 旋转角度
  rotate: { type: [String, Number], default: null },
  // 是否使用旋转动画
  spin: { type: Boolean, default: false }
});

// 是否多图标
const isMultiIcons = computed(() => props.name?.default || props.component?.default);

// 获取类名
const iconClasses = computed(() => ({
  'is-clickable': props.clickable,
  'is-disabled': props.disabled,
  'is-spin': props.spin
}));

// 获取样式
const iconStyles = computed(() => ({
  'color': props.color,
  'font-size': `${props.size}px`,
  'transform': `rotate(${props.rotate}deg)`
}));
</script>
