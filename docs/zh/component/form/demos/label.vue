<template>
  <DemoUsage config-width="340px">
    <template #render>
      <DemoBasic
        :form-props="formProps"
        :form-item-props="formItemProps"
      />
    </template>

    <template #config>
      <DemoConfig
        label="标签位置"
        label-position="top"
      >
        <DemoConfig code="form.labelPosition">
          <DemoOptions
            v-model:value="formProps.labelPosition"
            :options="labelPositions"
          />
        </DemoConfig>
        <DemoConfig code="formItem.labelPosition">
          <DemoOptions
            v-model:value="formItemProps.labelPosition"
            :options="labelPositions"
          />
        </DemoConfig>
      </DemoConfig>
      <DemoConfig
        label="标签对齐"
        label-position="top"
      >
        <DemoConfig code="form.labelAlign">
          <DemoOptions
            v-model:value="formProps.labelAlign"
            :options="labelAligns"
          />
        </DemoConfig>
        <DemoConfig code="formItem.labelAlign">
          <DemoOptions
            v-model:value="formItemProps.labelAlign"
            :options="labelAligns"
          />
        </DemoConfig>
      </DemoConfig>
      <DemoConfig
        label="标签宽度"
        label-position="top"
      >
        <DemoConfig code="form.labelWidth">
          <DemoSlider
            v-model:value="formProps.labelWidth"
            :min="50"
            :max="300"
          />
        </DemoConfig>
        <DemoConfig code="formItem.labelWidth">
          <DemoSlider
            v-model:value="formItemProps.labelWidth"
            :min="50"
            :max="300"
          />
        </DemoConfig>
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const labelPositions = ['left', 'right', 'top', 'bottom'];
const labelAligns = ['left', 'center', 'right'];

// 表单属性
const formProps = ref({
  labelWidth: 60,
  labelPosition: null,
  labelAlign: null
});

// 表单项属性
const formItemProps = ref({
  labelWidth: 60,
  labelPosition: null,
  labelAlign: null
});
</script>
