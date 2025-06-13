<template>
  <VForm>
    <VFormItem label="placeholder">
      <VInput
        v-model:value="inputValue"
        class="demo-input"
        placeholder="请输入内容"
      />
    </VFormItem>
    <VFormItem label="disabled">
      <VInput
        v-model:value="inputValue"
        class="demo-input"
        placeholder="禁用状态"
        disabled
      />
    </VFormItem>
    <VFormItem label="maxlength">
      <VInput
        v-model:value="inputValue"
        class="demo-input"
        placeholder="5字以内"
        maxlength="5"
      />
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
