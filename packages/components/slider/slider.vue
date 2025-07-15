<!-- 滑块 -->
<template>
  <div class="vui-slider">
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
      v-bind="handleProps"
      @mousedown.left.stop="onSliderDragStart"
    />
    <!-- 提示框 -->
    <transition name="vui-slider-tip">
      <div
        v-if="isShowTip"
        class="vui-slider-tip"
        :style="tipStyles"
      >
        {{ tipText }}
      </div>
    </transition>
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
const { onRailClick, onSliderDragStart, trackStyles, handleProps, isShowTip, tipStyles, tipText } = useSlider({
  railElRef,
  handleElRef,
  modelValue,
  props
});
</script>
