<template>
  <DemoDesc :items="['disabled', 'maxlength', 'placeholder']" />
  <VForm>
    <VFormItem label="禁用状态">
      <VInput
        v-model:value="inputValue"
        class="demo-input"
        placeholder="禁用状态"
        disabled
      />
    </VFormItem>
    <VFormItem label="最大长度">
      <VInput
        v-model:value="inputValue"
        class="demo-input"
        placeholder="最多输入5个字符"
        maxlength="5"
      />
    </VFormItem>
    <VFormItem label="占位文字">
      <VInput
        v-model:value="inputValue"
        class="demo-input"
        placeholder="请输入内容"
      />
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
