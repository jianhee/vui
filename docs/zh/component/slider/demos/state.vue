<template>
  <DemoUsage
    class="c-demo-sliders"
    render-gap
  >
    <template #render>
      <VSlider
        v-model:value="valueRef"
        :disabled="isDisabled"
      />
      <VSlider
        v-model:value="valueRef"
        :readonly="isReadonly"
      />
    </template>

    <template #config>
      <DemoConfig
        label="是否禁用状态"
        code="disabled"
      >
        <VSwitch v-model:checked="isDisabled" />
      </DemoConfig>
      <DemoConfig
        label="是否只读状态"
        code="readonly"
      >
        <VSwitch v-model:checked="isReadonly" />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(50);
const isDisabled = ref(true);
const isReadonly = ref(true);
</script>
