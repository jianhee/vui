<template>
  <DemoView>
    <template #content>
      <DemoBasic :option-type="typeRef" />
    </template>

    <template #props>
      <DemoViewBoolean
        label="显示类型"
        code="optionType"
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
import DemoBasic from './group.vue';

const types = ['default', 'button'];
const typeRef = ref('button');
</script>
