<template>
  <DemoView>
    <template #content>
      <DemoBasic
        :color="colorRef"
        :two-tone-color="twoToneColorRef"
        :size="sizeRef"
        :rotate="rotateRef"
      />
    </template>

    <template #props>
      <DemoViewTop
        label="主要颜色"
        code="color"
      >
        <VRadioGroup
          v-model:value="colorRef"
          :options="colorOptions"
          option-type="button"
        />
      </DemoViewTop>
      <DemoViewTop
        label="次要颜色"
        code="twoToneColor"
      >
        <VRadioGroup
          v-model:value="twoToneColorRef"
          :options="colorOptions"
          option-type="button"
        />
      </DemoViewTop>
      <DemoViewTop
        label="图标尺寸"
        code="size"
      >
        <DemoValue
          v-model:value="sizeRef"
          unit="px"
          :min="20"
          :max="50"
        />
      </DemoViewTop>
      <DemoViewTop
        label="旋转角度"
        code="rotate"
      >
        <DemoValue
          v-model:value="rotateRef"
          unit="deg"
          :min="-360"
          :max="360"
        />
      </DemoViewTop>
    </template>
  </DemoView>
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
