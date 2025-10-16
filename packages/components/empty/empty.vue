<!-- 空状态 -->
<template>
  <div
    :class="`vui-${stateType}`"
    v-bind="rootProps"
  >
    <!-- 优先使用图片 -->
    <img
      v-if="image"
      :class="`vui-${stateType}-img`"
      :alt="stateType"
      :src="image"
      :style="imageStyles"
    />
    <!-- 其次使用图标 -->
    <VIcon
      v-else-if="_iconProps"
      :class="`vui-${stateType}-icon`"
      v-bind="_iconProps"
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
const stateType = inject('vuiStateType', 'empty');

// 状态属性
const props = defineProps(emptyProps);

// 使用状态
const { rootProps, _iconProps, descText } = useEmpty({
  props,
  stateType
});
</script>
