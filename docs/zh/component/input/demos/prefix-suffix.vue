<template>
  <DemoViewLeft label="使用属性">
    <VInput
      v-model:value="inputValue"
      class="demo-input"
      placeholder="请输入内容"
      prefix="￥"
      suffix="RMB"
    />
  </DemoViewLeft>
  <DemoViewLeft label="使用插槽">
    <VInput
      v-model:value="inputValue"
      class="demo-input"
      placeholder="请输入内容"
    >
      <template #prefix>￥</template>
      <template #suffix>RMB</template>
    </VInput>
  </DemoViewLeft>
  <DemoViewLeft label="更多组合">
    <VInput
      v-model:value="inputValue"
      class="demo-input"
      placeholder="请输入内容"
      prefix="￥"
    >
      <template #suffix>
        <VIcon icon="search" />
      </template>
    </VInput>
    <VInput
      v-model:value="inputValue"
      class="demo-input"
      placeholder="请输入内容"
      suffix="RMB"
    >
      <template #prefix>
        <VIcon icon="face" />
      </template>
    </VInput>
  </DemoViewLeft>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
