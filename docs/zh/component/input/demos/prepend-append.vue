<template>
  <div class="demo-inputs">
    <DemoViewLeft label="使用属性">
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        prepend="https://"
        append=".com"
      />
    </DemoViewLeft>
    <DemoViewLeft label="使用插槽">
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
      >
        <template #prepend>https://</template>
        <template #append>.com</template>
      </VInput>
    </DemoViewLeft>
    <DemoViewLeft label="更多组合">
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        prepend="https://"
      >
        <template #append>
          <VIcon icon="search" />
        </template>
      </VInput>
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        append=".com"
      >
        <template #prepend>
          <VIcon icon="face" />
        </template>
      </VInput>
    </DemoViewLeft>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>

<style scoped>
.demo-inputs .vui-input {
  max-width: 400px;
}
</style>
