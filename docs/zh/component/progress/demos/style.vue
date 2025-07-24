<template>
  <DemoDesc :items="['height', 'radius']" />
  <VForm class="demo-toolbar">
    <VFormItem label="高度">
      <DemoValue
        v-model:value="heightRef"
        :min="1"
        unit="px"
      />
    </VFormItem>
    <VFormItem label="圆角尺寸">
      <DemoValue
        v-model:value="radiusRef"
        unit="px"
      />
    </VFormItem>
  </VForm>
  <VProgress
    class="demo-progress"
    :percent="valueRef"
    :height="heightRef"
    :radius="radiusRef"
  />
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(50);
const heightRef = ref(6);
const radiusRef = ref(4);
</script>
