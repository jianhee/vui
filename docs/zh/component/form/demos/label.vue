<template>
  <VForm class="demo-toolbar">
    <VFormItem label="标签位置">
      <VRadioGroup
        v-model:value="labelPosition"
        :options="labelPositions"
        option-type="button"
      />
    </VFormItem>
    <VFormItem label="标签宽度">
      <DemoValue
        v-model:value="labelWidth"
        :min="50"
      />
    </VFormItem>
  </VForm>

  <DemoBasic
    :label-position="labelPosition"
    :label-width="labelWidth"
  />
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

// 标签位置
const labelPosition = ref('left');
const labelPositions = ['left', 'right', 'top'];

// 标签宽度
const labelWidth = ref(60);
</script>
