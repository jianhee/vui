<template>
  <DemoView>
    <template #content>
      <DemoBasic :clickable="isClickable" />
    </template>

    <template #props>
      <DemoViewBoolean
        label="可点击状态"
        code="clickable"
      >
        <VSwitch v-model:checked="isClickable" />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isClickable = ref(true);
</script>
