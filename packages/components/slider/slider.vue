<!-- 滑块 -->
<template>
  <div :class="['vui-slider', rootClasses]">
    <!-- 中间内容 -->
    <div class="vui-slider-inner">
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
        @mousedown.left.stop="onDragStart"
      />
      <!-- 文字提示框 -->
      <VTooltip
        ref="tooltipRef"
        :trigger="null"
        :trigger-element="handleElRef"
        :content="tooltipText"
      />
    </div>
    <!-- 右侧内容 -->
    <div
      v-if="$slots.suffix || suffixText"
      class="vui-slider-suffix"
    >
      {{ suffixText }}
      <slot
        name="suffix"
        :value="modelValue"
        :tooltip="tooltipText"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue';
import { useSlider, sliderModel, sliderProps } from './composables';
import VTooltip from '../tooltip/tooltip.vue';

// 滑块
const railElRef = useTemplateRef('railElRef');
const handleElRef = useTemplateRef('handleElRef');
const tooltipRef = ref(null);
const modelValue = defineModel('value', sliderModel.value);
const props = defineProps(sliderProps);

// 使用滑块
const { rootClasses, trackStyles, handleProps, tooltipText, suffixText, onRailClick, onDragStart } = useSlider({
  railElRef,
  handleElRef,
  tooltipRef,
  modelValue,
  props
});
</script>
