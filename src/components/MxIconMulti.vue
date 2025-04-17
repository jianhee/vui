<!-- 多图标 -->
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

// 参数
const props = defineProps({
  name: { type: Object, default: null },
  component: { type: Object, default: null }
});

// 图标状态
const elRef = ref(null);
const isDark = useDark();
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
