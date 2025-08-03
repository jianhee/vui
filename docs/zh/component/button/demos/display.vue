<template>
  <DemoView>
    <template #content>
      <DemoBasic :block="isBlock" />
    </template>

    <template #props>
      <DemoViewBoolean code="inline|block">
        <VSwitch
          v-model:checked="isBlock"
          inactive-text="行内模式"
          active-text="块级模式"
        />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isBlock = ref(true);
</script>
