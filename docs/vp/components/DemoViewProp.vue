<!-- 演示：属性 -->
<template>
  <VFormItem
    :class="['demo-view-prop', { 'is-left': labelLeft }]"
    :label-position="labelLeft ? 'left' : 'top'"
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
  labelLeft: { type: Boolean, default: false },
  prop: { type: String, default: null }
});
</script>

<style>
.demo-view-prop .vui-form-label {
  white-space: nowrap;
}
.demo-view-prop.is-left .vui-form-control {
  text-align: right;
}
</style>
