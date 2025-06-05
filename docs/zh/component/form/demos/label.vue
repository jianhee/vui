<template>
  <VForm class="vui-mb-20">
    <VFormItem label="标签位置">
      <VRadioGroup
        v-model:value="labelPosition"
        :options="labelPositions"
        option-type="button"
      />
    </VFormItem>
    <VFormItem label="标签宽度">
      <VRadioGroup
        v-model:value="labelWidth"
        :options="labelWidths"
        option-type="button"
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
const labelPosition = ref('right');
const labelPositions = ['left', 'right', 'top'];

// 标签宽度
const labelWidth = ref(undefined);
const labelWidths = ['10em', '100px', '10%'];
</script>
