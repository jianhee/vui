<!-- 多图标 -->
<!-- 本组件用于区分不同状态下的图标，然后传给 MxIconSingle -->
<template>
  <MxIconSingle
    ref="elRef"
    v-bind="iconProps"
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDark, useElementHover } from '@vueuse/core';
import MxIconSingle from './MxIconSingle.vue';

const props = defineProps({
  name: { type: Object, default: null },
  component: { type: Object, default: null }
});

// 明暗模式
const isDark = useDark();

// hover状态
const elRef = ref(null);
const isHovered = useElementHover(elRef);

// 图标 props
const iconProps = computed(() => {
  const icon = props.name || props.component;
  if (!icon) return;

  const hoverIcon = icon.hover || icon.default;
  const darkIcon = icon.dark || icon.default;
  const darkHoverIcon = icon.darkHover || hoverIcon;
  let currentIcon = null;
  if (isDark.value) {
    currentIcon = isHovered.value ? darkHoverIcon : darkIcon;
  } else {
    currentIcon = isHovered.value ? hoverIcon : icon.default;
  }

  if (props.name) {
    return { name: currentIcon };
  } else {
    return { component: currentIcon };
  }
});
</script>
