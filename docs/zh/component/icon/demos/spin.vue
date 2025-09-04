<template>
  <DemoView>
    <template #content>
      <DemoBasic :spin="isSpin" />
    </template>

    <template #props>
      <DemoViewBoolean
        label="是否旋转状态"
        code="spin"
      >
        <VSwitch v-model:checked="isSpin" />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isSpin = ref(true);
</script>
