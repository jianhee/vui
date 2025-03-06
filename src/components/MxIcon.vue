<!-- 图标 -->
<template>
  <i
    class="mx-icon"
    :class="[iconClasses, $attrs.class]"
    :style="[iconStyles, $attrs.style]"
  >
    <!-- 方式1：使用 name，需要使用 vite-plugin-svg-icons 插件自动导入 svg 文件 -->
    <!-- <MxIcon name="loading" /> -->
    <IconUseSvg
      v-if="$attrs.name"
      :name="$attrs.name"
      :hover-name="$attrs.hoverName"
      :dark-name="$attrs.darkName"
      :dark-hover-name="$attrs.darkHoverName"
    />
    <!-- 方式2：使用 slot，需要将 svg 文件改成 vue 组件，然后在使用前手动导入组件 -->
    <!-- <MxIcon><IconLoading /></MxIcon> -->
    <slot v-else />
  </i>
</template>

<script setup>
import { computed } from 'vue';
import IconUseSvg from './MxIconUseSvg.vue';

defineOptions({
  inheritAttrs: false
});

const props = defineProps({
  // 图标大小: 16, '16'
  size: { type: [String, Number], default: null },
  // 是否可点击
  clickable: { type: Boolean, default: false },
  // 是否禁用
  disabled: { type: Boolean, default: false },
  // 旋转角度
  rotate: { type: [String, Number], default: null },
  // 是否旋转
  spin: { type: Boolean, default: false }
});

// 类名
const iconClasses = computed(() => ({
  'is-clickable': props.clickable,
  'is-disabled': props.disabled,
  'is-spin': props.spin
}));

// 样式
const iconStyles = computed(() => ({
  'font-size': props.size ? `${props.size}px` : null,
  'transform': props.rotate ? `rotate(${props.rotate}deg)` : null
}));
</script>

<style lang="scss">
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
  &.is-clickable {
    cursor: pointer;
  }
  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &.is-spin {
    animation: mx-spin 1s linear infinite;
  }
}

// animation
@keyframes mx-spin {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
