<template>
  <VForm v-bind="$attrs">
    <VFormItem label="文本"> 文本文本 </VFormItem>
    <VFormItem label="输入框">
      <VInput v-model:value="inputValue" />
    </VFormItem>
    <VFormItem label="选择器">
      <VSelect
        v-model:value="selectValue"
        :options="options"
      />
    </VFormItem>
    <VFormItem label="多选框组">
      <VCheckboxGroup
        v-model:value="checkboxGroupValue"
        :options="options"
        option-inline
      />
    </VFormItem>
    <VFormItem label="单选框组">
      <VRadioGroup
        v-model:value="radioGroupValue"
        :options="options"
        option-inline
      />
    </VFormItem>
    <VFormItem label="开关">
      <VSwitch v-model:checked="switchVal" />
    </VFormItem>
    <VFormItem label="滑块">
      <VSlider v-model:value="sliderVal" />
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';

// 绑定值
const inputValue = ref('123');
const selectValue = ref(1);
const checkboxGroupValue = ref([1]);
const radioGroupValue = ref(1);
const switchVal = ref(true);
const sliderVal = ref(50);

// 选项
const options = [
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  { label: '选项3', value: 3 }
];
</script>
