<template>
  <DemoViewLeft label="使用前置">
    <VInput
      v-model:value="inputValue"
      class="demo-input"
      placeholder="请输入内容"
      prefix-icon="face"
    />
  </DemoViewLeft>
  <DemoViewLeft label="使用后置">
    <VInput
      v-model:value="inputValue"
      class="demo-input"
      placeholder="请输入内容"
      suffix-icon="search"
    />
  </DemoViewLeft>
  <DemoViewLeft label="更多组合">
    <VInput
      v-model:value="inputValue"
      class="demo-input"
      placeholder="请输入内容"
      prefix-icon="face"
      suffix-icon="search"
    />
    <VInput
      v-model:value="inputValue"
      class="demo-input"
      placeholder="请输入内容"
      prefix-icon="face"
      :prefix-icon-props="{ color: 'pink' }"
      suffix-icon="search"
      :suffix-icon-props="{ color: 'pink' }"
    />
  </DemoViewLeft>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
