<template>
  <div class="c-demo-inputs">
    <DemoConfig
      label="使用属性"
      label-position="top"
    >
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        prepend="https://"
      />
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        append=".com"
      />
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        prepend="https://"
        append=".com"
      />
    </DemoConfig>
    <DemoConfig
      label="使用插槽"
      label-position="top"
    >
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
      >
        <template #prepend>https://</template>
      </VInput>
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
      >
        <template #append>.com</template>
      </VInput>
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
      >
        <template #prepend>https://</template>
        <template #append>.com</template>
      </VInput>
    </DemoConfig>
    <DemoConfig
      label="混合使用"
      label-position="top"
    >
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
    </DemoConfig>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
