<template>
  <DemoUsage>
    <template #render>
      <DemoBasic
        :cursor="cursorRef"
        :color="colorRef"
        :two-tone-color="twoToneColorRef"
        :size="sizeRef"
        :rotate="rotateRef"
      />
    </template>

    <template #config>
      <DemoConfig
        label="鼠标样式"
        code="cursor"
      >
        <DemoOptions
          v-model:value="cursorRef"
          :options="cursorOptions"
        />
      </DemoConfig>
      <DemoConfig
        label="主要颜色"
        code="color"
      >
        <DemoOptions
          v-model:value="colorRef"
          :options="colorOptions"
        />
      </DemoConfig>
      <DemoConfig
        label="次要颜色"
        code="twoToneColor"
      >
        <DemoOptions
          v-model:value="twoToneColorRef"
          :options="colorOptions"
        />
      </DemoConfig>
      <DemoConfig
        label="图标尺寸"
        code="size"
      >
        <DemoSlider
          v-model:value="sizeRef"
          unit="px"
          :min="20"
          :max="50"
        />
      </DemoConfig>
      <DemoConfig
        label="旋转角度"
        code="rotate"
      >
        <DemoSlider
          v-model:value="rotateRef"
          unit="deg"
          :min="-360"
          :max="360"
        />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const cursorOptions = ['pointer', 'move'];
const cursorRef = ref(cursorOptions[0]);

const colorOptions = ['#333', 'rgb(126,211,33)', 'red'];
const colorRef = ref(colorOptions[0]);

const twoToneColorRef = ref(colorOptions[1]);
const sizeRef = ref(40);
const rotateRef = ref(45);
</script>
