<template>
  <DemoUsage>
    <template #render>
      <DemoBasic :option-type="typeRef" />
    </template>

    <template #config>
      <DemoConfig
        label="显示类型"
        code="optionType"
      >
        <DemoOptions
          v-model:value="typeRef"
          :options="types"
        />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './group.vue';

const types = ['default', 'button'];
const typeRef = ref('button');
</script>
