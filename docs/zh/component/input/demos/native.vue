<template>
  <DemoViewTop
    label="禁用状态"
    code="disabled"
  >
    <VInput
      v-model:value="inputValue"
      class="demo-input"
      placeholder="禁用状态"
      disabled
    />
  </DemoViewTop>
  <DemoViewTop
    label="最大长度"
    code="maxlength"
  >
    <VInput
      v-model:value="inputValue"
      class="demo-input"
      placeholder="最多输入5个字符"
      maxlength="5"
    />
  </DemoViewTop>
  <DemoViewTop
    label="占位文字"
    code="placeholder"
  >
    <VInput
      v-model:value="inputValue"
      class="demo-input"
      placeholder="请输入内容"
    />
  </DemoViewTop>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
