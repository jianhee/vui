<template>
  <DemoView>
    <template #content>
      <VPopover
        content="弹出框内容"
        :disabled="isDisabled"
      >
        <VButton :disabled="isDisabled">hover 触发元素</VButton>
      </VPopover>
    </template>

    <template #props>
      <DemoViewBoolean
        label="是否禁用状态"
        code="disabled"
      >
        <VSwitch v-model:checked="isDisabled" />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';

const isDisabled = ref(true);
</script>
