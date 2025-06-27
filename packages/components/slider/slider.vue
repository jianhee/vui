<!-- 滑块 -->
<template>
  <div :class="rootClasses">
    <!-- 轨道 -->
    <div
      ref="railElRef"
      class="vui-slider-rail"
      @click.stop="onRailClick"
    />
    <!-- 填充 -->
    <div
      class="vui-slider-track"
      :style="trackStyles"
      @click.stop="onRailClick"
    />
    <!-- 手柄 -->
    <div
      ref="handleElRef"
      class="vui-slider-handle"
      :style="handleStyles"
      @mousedown.left.stop="onSliderDragStart"
    />
    <!-- 提示框 -->
    <div
      v-if="showTip"
      class="vui-slider-tooltip"
      :style="handleStyles"
    >
      {{ tipText }}
    </div>
  </div>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { useSlider, sliderModel, sliderProps } from './composables';

// 滑块
const railElRef = useTemplateRef('railElRef');
const handleElRef = useTemplateRef('handleElRef');
const modelValue = defineModel('value', sliderModel.value);
const props = defineProps(sliderProps);

// 使用滑块
const { rootClasses, onRailClick, onSliderDragStart, trackStyles, handleStyles, tipText } = useSlider({
  railElRef,
  handleElRef,
  modelValue,
  props
});
</script>
