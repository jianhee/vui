<template>
  <DemoView
    class="demo-sliders"
    content-gap
  >
    <template #content>
      <VSlider
        v-model:value="valueRef"
        :disabled="isDisabled"
      />
      <VSlider
        v-model:value="valueRef"
        :readonly="isReadonly"
      />
    </template>

    <template #props>
      <DemoViewLeft
        label="是否禁用状态"
        code="disabled"
      >
        <VSwitch v-model:checked="isDisabled" />
      </DemoViewLeft>
      <DemoViewLeft
        label="是否只读状态"
        code="readonly"
      >
        <VSwitch v-model:checked="isReadonly" />
      </DemoViewLeft>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(50);
const isDisabled = ref(true);
const isReadonly = ref(true);
</script>
