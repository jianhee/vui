<template>
  <DemoView>
    <template #content>
      <DemoBasic
        :form-props="formProps"
        :form-item-props="formItemProps"
      />
    </template>

    <template #props>
      <DemoViewTop
        label="标签位置"
        code="form.labelPosition"
      >
        <VRadioGroup
          v-model:value="formProps.labelPosition"
          :options="labelPositions"
          option-type="button"
        />
      </DemoViewTop>
      <DemoViewTop
        label="标签对齐"
        code="form.labelAlign"
      >
        <VRadioGroup
          v-model:value="formProps.labelAlign"
          :options="labelAligns"
          option-type="button"
        />
      </DemoViewTop>
      <DemoViewTop
        label="标签宽度"
        code="form.labelWidth"
      >
        <DemoValue
          v-model:value="formProps.labelWidth"
          :min="50"
          :max="300"
        />
      </DemoViewTop>
      <hr />
      <DemoViewTop
        label="标签位置"
        code="formItem.labelPosition"
      >
        <VRadioGroup
          v-model:value="formItemProps.labelPosition"
          :options="labelPositions"
          option-type="button"
        />
      </DemoViewTop>
      <DemoViewTop
        label="标签对齐"
        code="formItem.labelAlign"
      >
        <VRadioGroup
          v-model:value="formItemProps.labelAlign"
          :options="labelAligns"
          option-type="button"
        />
      </DemoViewTop>
      <DemoViewTop
        label="标签宽度"
        code="form.labelWidth"
      >
        <DemoValue
          v-model:value="formItemProps.labelWidth"
          :min="50"
          :max="300"
        />
      </DemoViewTop>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const labelPositions = [{ label: 'empty', value: null }, 'left', 'right', 'top', 'bottom'];
const labelAligns = [{ label: 'empty', value: null }, 'left', 'center', 'right'];

// 表单属性
const formProps = ref({
  labelWidth: null,
  labelPosition: null,
  labelAlign: null
});

// 表单项属性
const formItemProps = ref({
  labelWidth: null,
  labelPosition: null,
  labelAlign: null
});
</script>
