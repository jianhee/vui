<!-- 表单 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li><code>VForm</code> 父组件容器</li>
        <ol>
          <li>
            <code>props.direction</code> 排列方向，默认
            <VBtn
              type="link"
              @click="direction = 'vertical'"
            >
              vertical
            </VBtn>
            纵向（每项独占一行），
            <VBtn
              type="link"
              @click="direction = 'horizontal'"
            >
              horizontal
            </VBtn>
            横向（所有项共用一行）
          </li>
          <li>
            <code>props.labelPosition</code> 表单项的标签位置，默认
            <VBtn
              type="link"
              @click="labelPosition = 'left'"
            >
              left
            </VBtn>
            左对齐，
            <VBtn
              type="link"
              @click="labelPosition = 'right'"
            >
              right
            </VBtn>
            右对齐，
            <VBtn
              type="link"
              @click="labelPosition = 'top'"
            >
              top
            </VBtn>
            顶部对齐
          </li>
          <li><code>props.labelWidth</code> 表单项的标签宽度</li>
        </ol>
        <li><code>VFormFiled</code> 子组件表单项</li>
        <ol>
          <li><code>props.label</code> 左侧文本</li>
          <li><code>slot.default</code> 右侧内容</li>
        </ol>
      </ol>
    </template>
    <VForm
      :key="direction + labelPosition"
      :direction="direction"
      :label-position="labelPosition"
      label-width="5em"
    >
      <VFormFiled label="输入框">
        <VInput
          v-model:value="inputValue"
          placeholder="请输入内容"
        />
      </VFormFiled>
      <VFormFiled label="选择器">
        <VSelect
          v-model:value="selectValue"
          :items="selectOptions"
        />
      </VFormFiled>
      <VFormFiled label="多选框">
        <VCheckbox
          v-model:checked="checkboxValue"
          label="选项"
        />
      </VFormFiled>
      <VFormFiled label="单选框">
        <VRadioGroup
          v-model:value="radioValue"
          :items="radioItems"
          direction="horizontal"
        />
      </VFormFiled>
      <VFormFiled label="开关">
        <VSwitch v-model:checked="switchVal" />
      </VFormFiled>
      <VFormFiled label="文本"> 文本文本 </VFormFiled>
    </VForm>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';

// 表单
const direction = ref('vertical');
const labelPosition = ref('left');

// 输入框
const inputValue = ref('内容');

// 多选框
const checkboxValue = ref(false);

// 单选框
const radioValue = ref(1);
const radioItems = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' }
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
