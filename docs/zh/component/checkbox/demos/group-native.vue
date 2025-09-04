<template>
  <DemoView>
    <template #content>
      <DemoBasic
        :disabled="isDisabled"
        :readonly="isReadonly"
      />
    </template>

    <template #props>
      <DemoViewBoolean
        label="是否禁用"
        code="disabled"
      >
        <VSwitch
          v-model:checked="isDisabled"
          @change="onChange1"
        />
      </DemoViewBoolean>
      <DemoViewBoolean
        label="是否只读"
        code="readonly"
      >
        <VSwitch
          v-model:checked="isReadonly"
          @change="onChange2"
        />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './option.vue';

const isDisabled = ref(true);
const isReadonly = ref(false);

const onChange1 = ({ checked }) => (checked ? (isReadonly.value = false) : null);
const onChange2 = ({ checked }) => (checked ? (isDisabled.value = false) : null);
</script>
