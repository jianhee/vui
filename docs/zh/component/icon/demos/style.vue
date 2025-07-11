<template>
  <DemoDesc :items="['color', 'twoToneColor', 'size', 'rotate']" />
  <VForm class="demo-toolbar">
    <VFormItem label="主要颜色">
      <VRadioGroup
        v-model:value="colorRef"
        :options="colorOptions"
        option-type="button"
      />
    </VFormItem>
    <VFormItem label="次要颜色">
      <VRadioGroup
        v-model:value="twoToneColorRef"
        :options="colorOptions"
        option-type="button"
      />
    </VFormItem>
    <VFormItem label="图标尺寸">
      <DemoValue
        v-model:value="sizeRef"
        unit="px"
        :min="20"
        :max="50"
      />
    </VFormItem>
    <VFormItem label="旋转角度">
      <DemoValue
        v-model:value="rotateRef"
        unit="deg"
        :min="-360"
        :max="360"
      />
    </VFormItem>
  </VForm>

  <DemoBasic
    :color="colorRef"
    :two-tone-color="twoToneColorRef"
    :size="sizeRef"
    :rotate="rotateRef"
  />
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const colorOptions = ['#333', 'rgb(126,211,33)', 'red'];
const colorRef = ref(colorOptions[0]);
const twoToneColorRef = ref(colorOptions[1]);
const sizeRef = ref(40);
const rotateRef = ref(45);
</script>
