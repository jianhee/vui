<!-- 表单元素 -->
<template>
  <DemoCard
    v-for="item in layoutItems"
    :key="item.title"
    :title="item.title"
  >
    <MxForm
      label-width="4em"
      :derection="item.derection"
    >
      <MxFormFiled
        v-for="n in 3"
        :key="n"
        label="纯文本"
        is-text
      >
        这是一段文本文本这是一段文本文本这是一段文本文本这是一段文本文本这是一段文本文本这是一段文本文本这是一段文本文本
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="输入框">
    <template #desc>绑定值：<code>v-model:value</code> 等同于输入框的值 <code>value</code></template>
    <MxForm label-width="4em">
      <MxFormFiled label="基础用法">
        <MxInput
          v-model:value="inputValue"
          @change="writeLog('change', $event)"
        />
        <DemoRow>
          当前值：<code>{{ inputValue }}</code>
        </DemoRow>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="多选框">
    <template #desc>
      <DemoRow>绑定值：<code>v-model:checked</code> 等同于多选框的选中状态 <code>checked</code></DemoRow>
      <DemoRow>显示值：优先显示 <code>slot</code> 其次显示 <code>props.label</code></DemoRow>
    </template>
    <MxForm label-width="4em">
      <MxFormFiled label="横向">
        <MxCheckbox
          v-model:checked="checkboxValue1"
          label="选项1"
          @change="writeLog('change', $event)"
        />
        <MxCheckbox
          v-model:checked="checkboxValue2"
          label="选项2"
          @change="writeLog('change', $event)"
        />
        <MxCheckbox
          v-model:checked="checkboxValue3"
          label="选项3"
          @change="writeLog('change', $event)"
        />
        <DemoRow>
          当前值：<code>{{ checkboxValue1 }}</code> <code>{{ checkboxValue2 }}</code> <code>{{ checkboxValue3 }}</code>
        </DemoRow>
      </MxFormFiled>
      <MxFormFiled label="纵向">
        <MxCheckbox
          v-model:checked="checkboxValue4"
          block
          @change="writeLog('change', $event)"
        >
          选项1 的选中状态 {{ checkboxValue4 }}
        </MxCheckbox>
        <MxCheckbox
          v-model:checked="checkboxValue5"
          block
          @change="writeLog('change', $event)"
        >
          选项2 的选中状态 {{ checkboxValue5 }}
        </MxCheckbox>
        <MxCheckbox
          v-model:checked="checkboxValue6"
          block
          @change="writeLog('change', $event)"
        >
          选项3 的选中状态 {{ checkboxValue6 }}
        </MxCheckbox>
        <DemoRow>
          当前值：<code>{{ checkboxValue4 }}</code> <code>{{ checkboxValue5 }}</code> <code>{{ checkboxValue6 }}</code>
        </DemoRow>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="单选框">
    <template #desc>
      <DemoRow>绑定值：<code>v-model:value</code> 等同于选中项的值</DemoRow>
      <DemoRow>每项的值：<code>item.value</code> 等同于单选框的值 <code>value</code></DemoRow>
      <DemoRow>每项的显示值：优先显示 <code>slot</code> 其次显示 <code>item.label</code></DemoRow>
    </template>
    <MxForm label-width="4em">
      <MxFormFiled label="横向">
        <MxRadioGroup
          v-model:value="radioValue1"
          :items="radioItems1"
          @change="writeLog('change', $event)"
        />
        <DemoRow>
          当前值：<code>{{ radioValue1 }}</code>
        </DemoRow>
      </MxFormFiled>
      <MxFormFiled label="纵向">
        <MxRadioGroup
          v-model:value="radioValue2"
          :items="radioItems2"
          block
          @change="writeLog('change', $event)"
        >
          <template #default="{ item }">选项{{ item.value }} 的 value {{ item.value }}</template>
        </MxRadioGroup>
        <DemoRow>
          当前值：<code>{{ radioValue2 }}</code>
        </DemoRow>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="选择器">
    <template #desc>
      <DemoRow>绑定值：<code>v-model:value</code> 等同于选中项的值</DemoRow>
      <DemoRow>每项的值：<code>item.value</code> 等同于 option 的 <code>value</code></DemoRow>
      <DemoRow>每项的显示值：<code>item.label</code></DemoRow>
    </template>
    <MxForm label-width="4em">
      <MxFormFiled label="基础用法">
        <MxSelect
          v-model:value="selectValue"
          :items="selectOptions"
          @change="writeLog('change', $event)"
        />
        <DemoRow>
          当前值：<code>{{ selectValue }}</code>
        </DemoRow>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="开关">
    <template #desc>绑定值：<code>v-model:checked</code> 等同于开关的选中状态</template>
    <MxForm label-width="4em">
      <MxFormFiled label="基础用法">
        <MxSwitch
          v-model:checked="switchVal1"
          @change="writeLog('change', $event)"
        />
        <DemoRow>
          当前值：<code>{{ switchVal1 }}</code>
        </DemoRow>
      </MxFormFiled>
      <MxFormFiled label="切换成功">
        <MxSwitch
          v-model:checked="switchVal2"
          :before-change="() => beforeChange(true)"
          @change="writeLog('change', $event)"
        />
        <DemoRow>
          当前值：<code>{{ switchVal2 }}</code>
        </DemoRow>
      </MxFormFiled>
      <MxFormFiled label="切换失败">
        <MxSwitch
          v-model:checked="switchVal3"
          :before-change="() => beforeChange(false)"
          @change="writeLog('change', $event)"
        />
        <DemoRow>
          当前值：<code>{{ switchVal3 }}</code>
        </DemoRow>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

// 布局
const layoutItems = [
  { title: '横向布局', derection: 'row' },
  { title: '纵向布局', derection: 'column' }
];

// 输入框
const inputValue = ref('11111');

// 多选框
const checkboxValue1 = ref(false);
const checkboxValue2 = ref(true);
const checkboxValue3 = ref(false);
const checkboxValue4 = ref(false);
const checkboxValue5 = ref(false);
const checkboxValue6 = ref(true);

// 单选框
const radioValue1 = ref(2);
const radioValue2 = ref(3);
const radioItems1 = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' }
];
const radioItems2 = [{ value: 1 }, { value: 2 }, { value: 3 }];

// 选择器
const selectValue = ref(2);
const selectOptions = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' }
];

// 开关
const switchVal1 = ref(false);
const switchVal2 = ref(true);
const switchVal3 = ref(false);

// 切换前
const beforeChange = state => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(state);
    }, 2000);
  });
};
</script>
