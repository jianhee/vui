<template>
  <div class="demo-sliders">
    <DemoViewLeft label="格式化提示框">
      <VSlider
        v-model:value="valueRef"
        :tip-formatter="val => `${val}%`"
      />
    </DemoViewLeft>

    <DemoViewLeft label="不显示提示框">
      <VSlider
        v-model:value="valueRef"
        :tip-formatter="null"
      />
    </DemoViewLeft>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(50);
</script>
