<template>
  <div class="demo-progresses">
    <DemoViewLeft label="格式化文本">
      <VProgress
        :percent="valueRef1"
        :text-formatter="percent => `当前进度${percent}%`"
      />
    </DemoViewLeft>

    <DemoViewLeft label="不显示文本">
      <VProgress
        :percent="valueRef2"
        :text-formatter="null"
      />
    </DemoViewLeft>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const valueRef1 = ref(50);
const valueRef2 = ref(50);
</script>
