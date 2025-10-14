<template>
  <DemoUsage>
    <template #render>
      <VImage
        :src="url"
        :width="widthRef"
        :aspect-ratio="`${aspectRatioRef}/100`"
        :radius="radiusRef"
      />
    </template>

    <template #config>
      <DemoConfig
        label="宽度"
        code="width"
      >
        <DemoSlider
          v-model:value="widthRef"
          :min="100"
          :max="500"
          unit="px"
        />
      </DemoConfig>
      <DemoConfig
        label="宽高比"
        code="aspectRatio"
      >
        <DemoSlider
          v-model:value="aspectRatioRef"
          :min="50"
          :max="200"
          unit="/100"
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

const url = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg';
const widthRef = ref(300);
const aspectRatioRef = ref(100);
const radiusRef = ref(50);
</script>
