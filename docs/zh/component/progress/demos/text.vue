<template>
  <VForm>
    <VFormItem label="格式化文本">
      <VProgress
        class="demo-progress"
        :percent="valueRef1"
        :text-formatter="percent => `当前进度${percent}%`"
      />
    </VFormItem>
    <VFormItem label="不显示文本">
      <VProgress
        class="demo-progress"
        :percent="valueRef2"
        :text-formatter="null"
      />
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';

const valueRef1 = ref(50);
const valueRef2 = ref(50);
</script>
