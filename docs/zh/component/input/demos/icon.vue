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
      icon="face"
    />
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
