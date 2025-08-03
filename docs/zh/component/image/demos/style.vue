<template>
  <DemoView>
    <template #content>
      <VImage
        :src="url"
        :width="widthRef"
        :aspect-ratio="`${aspectRatioRef}/100`"
        :radius="radiusRef"
      />
    </template>

    <template #props>
      <DemoViewTop
        label="宽度"
        code="width"
      >
        <DemoValue
          v-model:value="widthRef"
          :min="100"
          :max="500"
          unit="px"
        />
      </DemoViewTop>
      <DemoViewTop
        label="宽高比"
        code="aspectRatio"
      >
        <DemoValue
          v-model:value="aspectRatioRef"
          :min="50"
          :max="200"
          unit="/100"
        />
      </DemoViewTop>
      <DemoViewTop
        label="圆角尺寸"
        code="radius"
      >
        <DemoValue
          v-model:value="radiusRef"
          unit="px"
        />
      </DemoViewTop>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';

const url = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg';
const widthRef = ref(300);
const aspectRatioRef = ref(100);
const radiusRef = ref(50);
</script>
