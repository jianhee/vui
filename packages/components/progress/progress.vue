<!-- 进度条 -->
<template>
  <div class="vui-progress">
    <!-- 轨道 -->
    <div
      class="vui-progress-rail"
      :style="railStyles"
    >
      <!-- 填充 -->
      <div
        class="vui-progress-track"
        :style="trackStyles"
      />
    </div>
    <!-- 文字 -->
    <span v-if="!!textFormatter">{{ textContent }}</span>
  </div>
</template>

<script setup>
import { useProgress, progressProps } from './composables';

// 进度条
const props = defineProps(progressProps);

// 使用进度条
const { railStyles, trackStyles, textContent } = useProgress({
  props
});
</script>
