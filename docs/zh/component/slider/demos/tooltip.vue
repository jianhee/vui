<template>
  <div class="c-demo-sliders">
    <DemoConfig
      label="不显示提示框"
      label-width="7em"
    >
      <VSlider
        v-model:value="valueRef"
        :tooltip="null"
      />
    </DemoConfig>
    <DemoConfig
      label="使用字符串/数字"
      label-width="7em"
    >
      <VSlider
        v-model:value="valueRef"
        :tooltip="`${valueRef}px`"
      />
    </DemoConfig>
    <DemoConfig
      label="使用函数"
      label-width="7em"
    >
      <VSlider
        v-model:value="valueRef"
        :tooltip="val => `${val}%`"
      />
    </DemoConfig>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(50);
</script>
