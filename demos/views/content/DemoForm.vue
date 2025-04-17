<!-- 表单 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li>根组件 <code>MxForm</code> 是容器</li>
        <ol>
          <li><code>props.layout</code> 表单的布局</li>
          <li><code>props.label-width</code> 表单项的标签宽度</li>
        </ol>
        <li>子组件 <code>MxFormFiled</code> 是表单项</li>
        <ol>
          <li><code>props.label</code> 文本</li>
        </ol>
      </ol>
    </template>
    <MxForm
      :key="layout"
      :layout="layout"
      label-width="4em"
    >
      <MxFormFiled label="输入框">
        <MxInput
          v-model:value="inputValue"
          placeholder="请输入内容"
        />
      </MxFormFiled>
      <MxFormFiled label="多选框">
        <MxCheckbox
          v-model:value="checkboxValue"
          label="选项"
        />
      </MxFormFiled>
      <MxFormFiled label="单选框">
        <MxRadioGroup
          v-model:value="layout"
          :items="layoutItems"
        />
      </MxFormFiled>
      <MxFormFiled label="选择器">
        <MxSelect
          v-model:value="selectValue"
          :items="selectOptions"
        />
      </MxFormFiled>
      <MxFormFiled label="开关">
        <MxSwitch v-model:checked="switchVal" />
      </MxFormFiled>
      <MxFormFiled label="文本"> 文本文本 </MxFormFiled>
    </MxForm>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';

// 输入框
const inputValue = ref('内容');

// 多选框
const checkboxValue = ref(false);

// 单选框
const layout = ref('horizontal');
const layoutItems = [
  { label: '横向', value: 'horizontal' },
  { label: '纵向', value: 'vertical' },
  { label: '内联', value: 'inline' }
];

// 选择器
const selectValue = ref(2);
const selectOptions = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' }
];

// 开关
const switchVal = ref(false);
</script>
