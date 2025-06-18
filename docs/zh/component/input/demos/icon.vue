<template>
  <DemoSpace>
    <VInput
      v-model:value="inputValue"
      class="demo-input"
      placeholder="请输入内容"
      icon="search"
    />
  </DemoSpace>
  <DemoSpace>
    <VInput
      v-model:value="inputValue"
      class="demo-input"
      placeholder="请输入内容"
      :icon="IconClose"
    />
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import IconClose from '@vp/icons/close.svg?component';

const inputValue = ref(null);
</script>
