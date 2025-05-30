<template>
  <VRadioGroup
    v-model:value="displayVal"
    :options="['inline', 'block']"
    option-type="button"
  />

  <VForm class="vui-mt-20">
    <VFormFiled label="单个选项">
      <DemoOption :block="isBlock" />
    </VFormFiled>
    <VFormFiled label="选项组">
      <DemoGroup :option-inline="isInline" />
    </VFormFiled>
  </VForm>
</template>

<script setup>
import { ref, computed } from 'vue';
import DemoOption from './option.vue';
import DemoGroup from './group.vue';

const displayVal = ref(undefined);
const isBlock = computed(() => displayVal.value === 'block');
const isInline = computed(() => displayVal.value === 'inline');
</script>
