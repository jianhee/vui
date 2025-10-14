<template>
  <div class="c-demo-progresses">
    <DemoConfig
      label="格式化文本"
      label-width="5em"
    >
      <VProgress
        :percent="valueRef1"
        :text-formatter="percent => `当前进度${percent}%`"
      />
    </DemoConfig>

    <DemoConfig
      label="不显示文本"
      label-width="5em"
    >
      <VProgress
        :percent="valueRef2"
        :text-formatter="null"
      />
    </DemoConfig>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const valueRef1 = ref(50);
const valueRef2 = ref(50);
</script>
