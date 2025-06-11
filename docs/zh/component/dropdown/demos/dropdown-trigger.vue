<template>
  <DemoSpace class="demo-dropdown-trigger">
    <VDropdown
      v-for="trigger in triggers"
      :key="trigger"
      :trigger="trigger"
      class="demo-dropdown"
    >
      <VBtn>{{ trigger }} 触发</VBtn>
      <template #dropdown>下拉框</template>
    </VDropdown>
  </DemoSpace>
</template>

<script setup>
const triggers = ['hover', 'click', 'contextmenu'];
</script>

<style>
.demo-dropdown-trigger .vui-btn {
  margin-right: 10px;
}
</style>
