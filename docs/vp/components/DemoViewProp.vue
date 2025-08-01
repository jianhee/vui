<!-- 演示：属性 -->
<template>
  <VFormItem
    class="demo-view-prop"
    :label-position="left ? 'left' : 'top'"
  >
    <!-- label -->
    <template #label>
      <code v-if="prop">{{ prop }}</code>
      <span v-if="label && prop">&nbsp;/&nbsp;</span>
      <span v-if="label">{{ label }}</span>
    </template>
    <!-- content -->
    <slot />
  </VFormItem>
</template>

<script setup>
defineProps({
  label: { type: String, default: null },
  prop: { type: String, default: null },
  left: { type: Boolean, default: false }
});
</script>

<style>
.demo-view-prop .vui-form-label {
  white-space: nowrap;
}
</style>
