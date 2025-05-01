<template>
  <VForm
    label-width="5em"
    v-bind="$attrs"
  >
    <slot />
    <VFormFiled label="输入框">
      <VInput v-model:value="inputValue" />
    </VFormFiled>
    <VFormFiled label="选择器">
      <VSelect
        v-model:value="selectValue"
        :items="items"
      />
    </VFormFiled>
    <VFormFiled label="多选框组">
      <VCheckboxGroup
        v-model:value="checkboxValue"
        :items="items"
      />
    </VFormFiled>
    <VFormFiled label="单选框组">
      <VRadioGroup
        v-model:value="radioValue"
        :items="items"
      />
    </VFormFiled>
    <VFormFiled label="开关">
      <VSwitch v-model:checked="switchVal" />
    </VFormFiled>
    <VFormFiled label="文本"> 文本文本 </VFormFiled>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';

// 绑定值
const inputValue = ref(null);
const selectValue = ref(null);
const checkboxValue = ref([]);
const radioValue = ref(null);
const switchVal = ref(false);

// 选项
const items = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' }
];
</script>
