<!-- 空状态 -->
<template>
  <div :class="`vui-${stateType}`">
    <!-- 优先使用图片 -->
    <img
      v-if="image"
      :class="`vui-${stateType}-img`"
      :alt="stateType"
      :src="image"
    />
    <!-- 其次使用图标 -->
    <VIcon
      v-else-if="stateIconProps"
      :class="`vui-${stateType}-icon`"
      v-bind="stateIconProps"
    />
    <!-- 文本 -->
    <div
      v-if="descText"
      :class="`vui-${stateType}-desc`"
    >
      {{ descText }}
    </div>
    <!-- 自定义内容 -->
    <slot />
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useEmpty, emptyProps } from './composables';

// 状态类型
const stateType = inject('stateType', 'empty');

// 状态属性
const props = defineProps(emptyProps);

// 使用状态
const { stateIconProps, descText } = useEmpty({ props, stateType });
</script>
