<template>
  <DemoSpace flex>
    <VPopover
      v-for="trigger in triggers"
      :key="trigger.value"
      :trigger="trigger.value"
      content="弹出框内容"
    >
      <VButton>{{ trigger.value }}{{ trigger.label }}</VButton>
    </VPopover>
  </DemoSpace>
</template>

<script setup>
const triggers = [{ value: 'hover', label: '（默认）' }, { value: 'click' }, { value: 'contextmenu' }];
</script>
