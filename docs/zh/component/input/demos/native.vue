<template>
  <VForm>
    <VFormItem label="disabled">
      <VInput
        v-model:value="inputValue"
        class="demo-input"
        placeholder="禁用状态"
        disabled
      />
    </VFormItem>
    <VFormItem label="placeholder">
      <VInput
        v-model:value="inputValue"
        class="demo-input"
        placeholder="占位文字"
      />
    </VFormItem>
    <VFormItem label="maxlength">
      <VInput
        v-model:value="inputValue"
        class="demo-input"
        placeholder="最多输入5个字符"
        maxlength="5"
      />
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
