<!-- 表单元素 -->
<template>
  <DemoCard title="输入框">
    <template #desc>绑定值：v-model:value === input 的 value 属性</template>
    <MxForm label-width="4em">
      <MxFormFiled label="基础用法">
        <MxInput
          v-model:value="inputValue"
          @change="showLog('change', $event)"
        />
        <DemoRow>当前值：{{ inputValue }}</DemoRow>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="多选框">
    <template #desc>
      <div>绑定值：v-model:checked === checkbox 的 checked 属性</div>
      <div>显示值：优先显示 slot，其次显示 label 字段</div>
    </template>
    <MxForm label-width="4em">
      <MxFormFiled label="横向">
        <MxCheckbox
          v-model:checked="checkboxValue1"
          label="选项1"
          @change="showLog('change', $event)"
        />
        <MxCheckbox
          v-model:checked="checkboxValue2"
          label="选项2"
          @change="showLog('change', $event)"
        />
        <MxCheckbox
          v-model:checked="checkboxValue3"
          label="选项3"
          @change="showLog('change', $event)"
        />
        <DemoRow>当前值：{{ checkboxValue1 }}, {{ checkboxValue2 }}, {{ checkboxValue3 }}</DemoRow>
      </MxFormFiled>
      <MxFormFiled label="纵向">
        <MxCheckbox
          v-model:checked="checkboxValue4"
          block
          @change="showLog('change', $event)"
        >
          选项1 的选中状态 {{ checkboxValue4 }}
        </MxCheckbox>
        <MxCheckbox
          v-model:checked="checkboxValue5"
          block
          @change="showLog('change', $event)"
        >
          选项2 的选中状态 {{ checkboxValue5 }}
        </MxCheckbox>
        <MxCheckbox
          v-model:checked="checkboxValue6"
          block
          @change="showLog('change', $event)"
        >
          选项3 的选中状态 {{ checkboxValue6 }}
        </MxCheckbox>
        <DemoRow>当前值：{{ checkboxValue4 }}, {{ checkboxValue5 }}, {{ checkboxValue6 }}</DemoRow>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="单选框">
    <template #desc>
      <div>绑定值：v-model:value === 选中项的值</div>
      <div>每项的值：value 字段 === radio 的 value 属性</div>
      <div>每项的显示值：优先显示 slot，其次显示 label 字段</div>
    </template>
    <MxForm label-width="4em">
      <MxFormFiled label="横向">
        <MxRadioGroup
          v-model:value="radioValue1"
          :items="radioItems1"
          @change="showLog('change', $event)"
        />
        <DemoRow>当前值：{{ radioValue1 }}</DemoRow>
      </MxFormFiled>
      <MxFormFiled label="纵向">
        <MxRadioGroup
          v-model:value="radioValue2"
          :items="radioItems2"
          block
          @change="showLog('change', $event)"
        >
          <template #default="{ item }">选项{{ item.value }} 的 value {{ item.value }}</template>
        </MxRadioGroup>
        <DemoRow>当前值：{{ radioValue2 }}</DemoRow>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="选择器">
    <template #desc>
      <div>绑定值：v-model:value === 选中项的值</div>
      <div>每项的值：value 字段 === option 的 value 属性</div>
      <div>每项的显示值：label 字段</div>
    </template>
    <MxForm label-width="4em">
      <MxFormFiled label="基础用法">
        <MxSelect
          v-model:value="selectValue"
          :items="selectOptions"
          @change="showLog('change', $event)"
        />
        <DemoRow>当前值：{{ selectValue }}</DemoRow>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';

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

function showLog(action, val) {
  console.log(action, val);
}
</script>
