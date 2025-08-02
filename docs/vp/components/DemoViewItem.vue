<!-- 演示项 -->
<template>
  <VFormItem
    class="demo-view-item"
    :class="{ 'is-content-right': pleft }"
    :label-position="pleft ? 'left' : 'top'"
    :label-align="aCenter ? 'center' : 'left'"
  >
    <!-- label -->
    <template #label>
      <code v-if="code">{{ code }}</code>
      <span v-if="label && code">&nbsp;/&nbsp;</span>
      <span v-if="label">{{ label }}</span>
    </template>
    <!-- content -->
    <slot />
  </VFormItem>
</template>

<script setup>
defineProps({
  code: { type: String, default: null },
  label: { type: String, default: null },
  pleft: { type: Boolean, default: false },
  aCenter: { type: Boolean, default: false }
});
</script>

<style lang="scss">
.demo-view-item {
  flex: auto;
  width: 100%;
  .vui-form-label {
    white-space: nowrap;
  }
  &.is-content-right .vui-form-control {
    text-align: right;
  }
}
</style>
