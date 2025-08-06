<template>
  <VForm
    class="demo-form"
    v-bind="formProps"
  >
    <VFormItem
      label="文本"
      v-bind="formItemProps"
    >
      使用 <code>label</code> 属性
    </VFormItem>
    <VFormItem v-bind="formItemProps">
      <template #label><b>文本</b></template>
      使用 <code>label</code> 插槽
    </VFormItem>
    <VFormItem
      label="输入框"
      v-bind="formItemProps"
    >
      <VInput v-model:value="inputValue" />
    </VFormItem>
    <VFormItem
      label="选择器"
      v-bind="formItemProps"
    >
      <VSelect
        v-model:value="selectValue"
        :options="options"
      />
    </VFormItem>
    <VFormItem
      label="多选框组"
      v-bind="formItemProps"
    >
      <VCheckboxGroup
        v-model:value="checkboxGroupValue"
        :options="options"
        option-inline
      />
    </VFormItem>
    <VFormItem
      label="单选框组"
      v-bind="formItemProps"
    >
      <VRadioGroup
        v-model:value="radioGroupValue"
        :options="options"
        option-inline
      />
    </VFormItem>
    <VFormItem
      label="开关"
      v-bind="formItemProps"
    >
      <VSwitch v-model:checked="switchVal" />
    </VFormItem>
    <VFormItem
      label="滑块"
      v-bind="formItemProps"
    >
      <VSlider v-model:value="sliderVal" />
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  formProps: { type: Object, default: null },
  formItemProps: { type: Object, default: null }
});

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

<style lang="scss">
.demo-form .vui {
  &-input,
  &-select,
  &-slider {
    max-width: var(--demo-filed-width);
  }
}
</style>
