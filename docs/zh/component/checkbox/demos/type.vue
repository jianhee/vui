<template>
  <VForm>
    <VFormFiled label="单个选项">
      <DemoOption type="button" />
    </VFormFiled>
    <VFormFiled label="选项组">
      <DemoGroup option-type="button" />
    </VFormFiled>
  </VForm>
</template>

<script setup>
import DemoOption from './option.vue';
import DemoGroup from './group.vue';
</script>
