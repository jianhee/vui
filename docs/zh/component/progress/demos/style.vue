<template>
  <DemoUsage>
    <template #render>
      <VProgress
        :percentage="valueRef"
        :height="heightRef"
        :radius="radiusRef"
      />
    </template>

    <template #config>
      <DemoConfig
        label="高度"
        code="height"
      >
        <DemoSlider
          v-model:value="heightRef"
          :min="1"
          unit="px"
        />
      </DemoConfig>
      <DemoConfig
        label="圆角尺寸"
        code="radius"
      >
        <DemoSlider
          v-model:value="radiusRef"
          unit="px"
        />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(50);
const heightRef = ref(6);
const radiusRef = ref(4);
</script>
