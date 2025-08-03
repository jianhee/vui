<template>
  <DemoView>
    <template #content>
      <DemoBasic :loading="isLoading" />
    </template>

    <template #props>
      <DemoViewBoolean
        code="loading"
        label="加载状态"
      >
        <VSwitch v-model:checked="isLoading" />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isLoading = ref(true);
</script>
