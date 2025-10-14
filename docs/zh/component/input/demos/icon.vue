<template>
  <div class="c-demo-inputs">
    <DemoConfig
      label="单独使用图标"
      label-width="120px"
    >
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        prefix-icon="face"
      />
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        suffix-icon="search"
      />
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        prefix-icon="face"
        suffix-icon="search"
      />
    </DemoConfig>
    <DemoConfig
      label="同时使用图标和属性"
      label-width="120px"
    >
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        prefix-icon="face"
        :prefix-icon-props="{ color: 'pink' }"
        suffix-icon="search"
        :suffix-icon-props="{ color: 'pink' }"
      />
    </DemoConfig>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
