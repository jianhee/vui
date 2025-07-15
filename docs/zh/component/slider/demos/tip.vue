<template>
  <VForm>
    <VFormItem label="不显示提示框">
      <VSlider
        v-model:value="valueRef1"
        class="demo-slider"
        :show-tip="false"
      />
    </VFormItem>
    <VFormItem label="格式化提示框">
      <VSlider
        v-model:value="valueRef2"
        class="demo-slider"
        :tip-formatter="val => `${val}%`"
      />
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';

const valueRef1 = ref(50);
const valueRef2 = ref(50);
</script>
