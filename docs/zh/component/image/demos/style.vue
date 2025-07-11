<template>
  <DemoDesc :items="['width', 'aspectRatio', 'radius']" />
  <VForm class="demo-toolbar">
    <VFormItem label="宽度">
      <DemoValue
        v-model:value="widthRef"
        :min="100"
        :max="500"
        unit="px"
      />
    </VFormItem>
    <VFormItem label="宽高比">
      <DemoValue
        v-model:value="aspectRatioRef"
        :min="50"
        :max="200"
        unit="/100"
      />
    </VFormItem>
    <VFormItem label="圆角尺寸">
      <DemoValue
        v-model:value="radiusRef"
        unit="px"
      />
    </VFormItem>
  </VForm>

  <VImage
    :src="url"
    :width="widthRef"
    :aspect-ratio="`${aspectRatioRef}/100`"
    :radius="radiusRef"
  />
</template>

<script setup>
import { ref } from 'vue';

const url = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg';
const widthRef = ref(300);
const aspectRatioRef = ref(100);
const radiusRef = ref(0);
</script>
