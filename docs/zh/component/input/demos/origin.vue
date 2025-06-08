<template>
  <VForm>
    <VFormItem label="placeholder">
      <VInput
        v-model:value="inputValue1"
        placeholder="请输入内容"
      />
    </VFormItem>
    <VFormItem label="disabled">
      <VInput
        v-model:value="inputValue2"
        placeholder="禁用状态"
        disabled
      />
    </VFormItem>
    <VFormItem label="maxlength">
      <VInput
        v-model:value="inputValue3"
        placeholder="5字以内"
        maxlength="5"
      />
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';

const inputValue1 = ref(null);
const inputValue2 = ref(null);
const inputValue3 = ref(null);
</script>
