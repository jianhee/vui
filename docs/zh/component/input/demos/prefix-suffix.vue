<template>
  <div class="c-demo-inputs">
    <DemoConfig
      label="使用属性"
      label-position="top"
    >
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        prefix="￥"
      />
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        suffix="RMB"
      />
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        prefix="￥"
        suffix="RMB"
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
        <template #prefix>￥</template>
      </VInput>
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
      >
        <template #suffix>RMB</template>
      </VInput>
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
      >
        <template #prefix>￥</template>
        <template #suffix>RMB</template>
      </VInput>
    </DemoConfig>
    <DemoConfig
      label="混合使用"
      label-position="top"
    >
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        prefix="￥"
      >
        <template #suffix>
          <VIcon icon="search" />
        </template>
      </VInput>
      <VInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        suffix="RMB"
      >
        <template #prefix>
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
