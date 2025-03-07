<!-- 图标 -->
<template>
  <svg ref="elRef">
    <use :href="`#icon-${nameRef}`" />
  </svg>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDark, useElementHover } from '@vueuse/core';

const props = defineProps({
  // 图标名称
  name: { type: String, required: true },
  // 其它模式图标名称：无法使用color设置图标颜色时，用来指定其它图标
  hoverName: { type: String, default: null },
  darkName: { type: String, default: null },
  darkHoverName: { type: String, default: null }
});

// 明暗模式
const isDark = useDark();

// hover状态
const elRef = ref(null);
const isHovered = useElementHover(elRef);

// 自动切换图标
const nameRef = computed(() => {
  if (!props.name) return;
  const hoverName = props.hoverName || props.name;
  const darkName = props.darkName || props.name;
  const darkHoverName = props.darkHoverName || hoverName;
  if (isDark.value) {
    return isHovered.value ? darkHoverName : darkName;
  } else {
    return isHovered.value ? hoverName : props.name;
  }
});
</script>
