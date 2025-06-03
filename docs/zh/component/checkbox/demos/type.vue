<template>
  <VSwitch
    v-model:checked="isBtn"
    active-text="按钮类型"
  />
  <VForm class="vui-mt-20">
    <VFormFiled label="单个选项">
      <DemoOption :type="type" />
    </VFormFiled>
    <VFormFiled label="选项组">
      <DemoGroup :option-type="type" />
    </VFormFiled>
  </VForm>
</template>

<script setup>
import { ref, computed } from 'vue';
import DemoOption from './option.vue';
import DemoGroup from './group.vue';

const isBtn = ref(true);
const type = computed(() => {
  return isBtn.value ? 'button' : undefined;
});
</script>
