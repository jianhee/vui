<template>
  <DemoView>
    <template #content>
      <DemoBasic :form-props="formProps" />
    </template>

    <template #props>
      <DemoViewBoolean
        label="是否禁用状态"
        code="disabled"
      >
        <VSwitch
          v-model:checked="formProps.disabled"
          @change="onChange1"
        />
      </DemoViewBoolean>
      <DemoViewBoolean
        label="是否只读状态"
        code="readonly"
      >
        <VSwitch
          v-model:checked="formProps.readonly"
          @change="onChange2"
        />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const formProps = ref({
  disabled: true,
  readonly: false
});

const onChange1 = ({ checked }) => (checked ? (formProps.value.readonly = false) : null);
const onChange2 = ({ checked }) => (checked ? (formProps.value.disabled = false) : null);
</script>
