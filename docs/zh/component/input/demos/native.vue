<template>
  <DemoUsage class="c-demo-inputs">
    <template #render>
      <VInput
        v-model:value="inputValue"
        placeholder="自动聚焦"
        :autofocus="isAutofocus"
      />
    </template>

    <template #config>
      <DemoConfig
        label="是否自动聚焦"
        code="autofocus"
      >
        <VSwitch v-model:checked="isAutofocus" />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
const isAutofocus = ref(true);
</script>
