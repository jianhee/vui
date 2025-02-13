<!-- 图标 -->
<template>
  <svg
    ref="elRef"
    aria-hidden="true"
    class="mx-icon"
    :class="{
      'is-clickable': clickable,
      'is-disabled': disabled,
      'is-loading': loading
    }"
    :style="{
      'font-size': iconSize ? `${iconSize}px` : null,
      'transform': rotate ? `rotate(${rotate}deg)` : null
    }"
  >
    <use :href="`#icon-${iconNameRef}`" />
  </svg>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useElementHover } from '@vueuse/core';

const props = defineProps({
  // 名称
  iconName: { type: String, required: true },
  // 明暗模式：用于多色图标，需要准备两个图标 'name-dark' 和 'name-light'
  useDarkIcon: { type: Boolean, default: false },
  // hover状态：用于多色图标，需要准备两个图标 'name' 和 'name-hover'
  useHoverIcon: { type: Boolean, default: false },
  // 大小
  iconSize: { type: [String, Number], default: null },
  // 是否旋转
  loading: { type: Boolean, default: false },
  // 是否可点击
  clickable: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  // 旋转角度
  rotate: { type: [String, Number], default: null }
});

// 初始化明暗模式
const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
const isDarkMode = ref(mediaQueryList.matches);

// 切换明暗模式
mediaQueryList.addEventListener('change', e => {
  isDarkMode.value = e.matches;
});

// hover状态
const elRef = ref(null);
const isHovered = props.useHoverIcon ? useElementHover(elRef) : ref(false);

// 切换图标
const iconNameRef = computed(() => {
  let newName = props.iconName;
  if (props.useDarkIcon) {
    newName += isDarkMode.value ? '-dark' : '-light';
  }
  return isHovered.value ? `${newName}-hover` : newName;
});
</script>

<style lang="scss">
.mx-icon {
  flex: none;
  width: 1em;
  height: 1em;
  fill: currentcolor;
  transition: all .3s ease;
  &.is-clickable {
    cursor: pointer;
  }
  &.is-disabled {
    cursor: not-allowed;
    opacity: .8;
  }
  &.is-loading {
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
