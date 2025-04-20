<!-- 表单 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li><code>MxForm</code> 父组件容器</li>
        <ol>
          <li>
            <code>props.direction</code> 排列方向，默认
            <MxBtn
              type="primary"
              link
              @click="direction = 'vertical'"
            >
              vertical
            </MxBtn>
            纵向（每项独占一行），
            <MxBtn
              type="primary"
              link
              @click="direction = 'horizontal'"
            >
              horizontal
            </MxBtn>
            横向（所有项共用一行）
          </li>
          <li>
            <code>props.labelPosition</code> 表单项的标签位置，默认
            <MxBtn
              type="primary"
              link
              @click="labelPosition = 'left'"
            >
              left
            </MxBtn>
            左对齐，
            <MxBtn
              type="primary"
              link
              @click="labelPosition = 'right'"
            >
              right
            </MxBtn>
            右对齐，
            <MxBtn
              type="primary"
              link
              @click="labelPosition = 'top'"
            >
              top
            </MxBtn>
            顶部对齐
          </li>
          <li><code>props.labelWidth</code> 表单项的标签宽度</li>
        </ol>
        <li><code>MxFormFiled</code> 子组件表单项</li>
        <ol>
          <li><code>props.label</code> 左侧文本</li>
          <li><code>slot.default</code> 右侧内容</li>
        </ol>
      </ol>
    </template>
    <MxForm
      :key="direction + labelPosition"
      :direction="direction"
      :label-position="labelPosition"
      label-width="5em"
    >
      <MxFormFiled label="输入框">
        <MxInput
          v-model:value="inputValue"
          placeholder="请输入内容"
        />
      </MxFormFiled>
      <MxFormFiled label="选择器">
        <MxSelect
          v-model:value="selectValue"
          :items="selectOptions"
        />
      </MxFormFiled>
      <MxFormFiled label="多选框">
        <MxCheckbox
          v-model:checked="checkboxValue"
          label="选项"
        />
      </MxFormFiled>
      <MxFormFiled label="单选框">
        <MxRadioGroup
          v-model:value="radioValue"
          :items="radioItems"
          direction="horizontal"
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
