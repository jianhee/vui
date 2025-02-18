<!-- 图标 -->
<template>
  <svg
    ref="elRef"
    aria-hidden="true"
    class="mx-icon"
    :class="{
      'is-spin': spin,
      'is-clickable': clickable,
      'is-disabled': disabled
    }"
    :style="{
      'font-size': size ? `${size}px` : null,
      'transform': rotate ? `rotate(${rotate}deg)` : null
    }"
  >
    <use :href="`#icon-${nameRef}`" />
  </svg>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useElementHover } from '@vueuse/core';

const props = defineProps({
  // 图标名称
  name: { type: String, required: true },
  // 其它模式图标名称：无法使用color设置图标颜色时，用来指定其它图标
  hoverName: { type: String, default: null },
  darkName: { type: String, default: null },
  darkHoverName: { type: String, default: null },
  // 图标大小: 16, '16'
  size: { type: [String, Number], default: null },
  // 是否旋转
  spin: { type: Boolean, default: false },
  // 是否可点击
  clickable: { type: Boolean, default: false },
  // 是否禁用
  disabled: { type: Boolean, default: false },
  // 旋转角度
  rotate: { type: [String, Number], default: null }
});

// 明暗模式
const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
const isDarkMode = ref(mediaQueryList.matches);
mediaQueryList.addEventListener('change', e => {
  isDarkMode.value = e.matches;
});

// hover状态
const elRef = ref(null);
const isHovered = useElementHover(elRef);

// 自动切换图标
const nameRef = computed(() => {
  if (isDarkMode.value) {
    return isHovered.value ? props.darkHoverName : props.darkName;
  } else {
    return isHovered.value ? props.hoverName : props.name;
  }
});
</script>

<style lang="scss">
.mx-icon {
  flex: none;
  width: 1em;
  height: 1em;
  fill: currentcolor;
  transition: all .3s ease;
  &.is-spin {
    animation: mx-spin 1s linear infinite;
  }
  &.is-clickable {
    cursor: pointer;
  }
  &.is-disabled {
    cursor: not-allowed;
    opacity: .8;
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
