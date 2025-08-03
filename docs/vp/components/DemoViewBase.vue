<!-- 演示：项 -->
<template>
  <div class="demo-view-base">
    <!-- label -->
    <div
      class="demo-view-base-label"
      :style="{ width: `${labelWidth}px` }"
    >
      <code v-if="code">{{ code }}</code>
      <span v-if="label && code">&nbsp;/&nbsp;</span>
      <span v-if="label">{{ label }}</span>
    </div>
    <!-- content -->
    <div class="demo-view-base-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  code: { type: String, default: null },
  label: { type: String, default: null },
  labelWidth: { type: String, default: null }
});
</script>

<style lang="scss">
.demo-view-base {
  flex: auto;
  width: 100%;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  &-label {
    flex: none;
    white-space: nowrap;
  }
  &-content {
    flex: auto;
  }
}
</style>
