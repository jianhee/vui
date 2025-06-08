<!-- 图标 -->
<template>
  <i
    :class="iconClasses"
    :style="iconStyles"
  >
    <!-- 使用 svg 名称：依赖 vite-plugin-svg-icons 插件 -->
    <svg v-if="name">
      <use :href="`#icon-${name}`" />
    </svg>
    <!-- 使用 svg 组件：需要将 `.svg` 文件改写成 `.vue` 组件 -->
    <component
      :is="component"
      v-else
    />
  </i>
</template>

<script setup>
import { computed } from 'vue';
import { addUnit } from '../../utils';

// 参数
const props = defineProps({
  // 图标名称或组件：二选一
  name: { type: String, default: null },
  component: { type: Object, default: null },
  // 描边颜色：默认继承 `color`
  color: { type: String, default: null },
  // 填充颜色：仅双色图标有效，默认继承 `--vui-icon-two-one-color`
  twoToneColor: { type: String, default: null },
  // 图标尺寸: 默认值继承 `font-size`，默认单位 `px`
  size: { type: [Number, String], default: null },
  // 是否可点击
  clickable: { type: Boolean, default: false },
  // 是否禁用
  disabled: { type: Boolean, default: false },
  // 旋转动画
  spin: { type: Boolean, default: false },
  // 旋转角度：默认单位 `deg`
  rotate: { type: [Number, String], default: null }
});

// 获取类名
const iconClasses = computed(() => [
  'vui-icon',
  {
    'is-clickable': props.clickable,
    'is-disabled': props.disabled,
    'is-spin': props.spin
  }
]);

// 获取样式
const iconStyles = computed(() => ({
  'font-size': addUnit(props.size, 'px'),
  'transform': `rotate(${addUnit(props.rotate, 'deg')})`,
  'color': props.color,
  '--vui-icon-two-tone-color': props.twoToneColor
}));
</script>
