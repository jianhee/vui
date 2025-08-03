<template>
  <DemoView>
    <template #content>
      <DemoBasic :type="typeRef" />
    </template>

    <template #props>
      <DemoViewBoolean
        label="显示类型"
        code="type"
      >
        <VRadioGroup
          v-model:value="typeRef"
          :options="types"
          option-type="button"
        />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './option.vue';

const types = ['default', 'button'];
const typeRef = ref('button');
</script>
