<template>
  <DemoView>
    <template #content>
      <VProgress
        class="demo-progress"
        :percent="valueRef"
        :height="heightRef"
        :radius="radiusRef"
      />
    </template>

    <template #props>
      <DemoViewTop
        label="高度"
        code="height"
      >
        <DemoValue
          v-model:value="heightRef"
          :min="1"
          unit="px"
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

const valueRef = ref(50);
const heightRef = ref(6);
const radiusRef = ref(4);
</script>
