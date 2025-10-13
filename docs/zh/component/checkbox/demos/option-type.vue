<template>
  <DemoUsage>
    <template #render>
      <DemoBasic :type="typeRef" />
    </template>

    <template #config>
      <DemoConfig
        label="显示类型"
        code="type"
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
import DemoBasic from './option.vue';

const types = ['default', 'button'];
const typeRef = ref('button');
</script>
