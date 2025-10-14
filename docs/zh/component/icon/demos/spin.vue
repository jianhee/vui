<template>
  <DemoUsage>
    <template #render>
      <DemoBasic :spin="isSpin" />
    </template>

    <template #config>
      <DemoConfig
        label="是否旋转状态"
        code="spin"
      >
        <VSwitch v-model:checked="isSpin" />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isSpin = ref(true);
</script>
