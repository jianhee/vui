<!-- 演示：项 -->
<template>
  <div class="demo-view-base">
    <!-- label -->
    <div
      class="demo-view-base-label"
      :style="{ width: `${labelWidth}px` }"
    >
      <span v-if="label">{{ label }}</span>
      <span v-if="label && code">&nbsp;/&nbsp;</span>
      <code v-if="code">{{ code }}</code>
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
  margin-bottom: var(--demo-filed-gap);
  &:last-child {
    margin-bottom: 0;
  }
  &-label {
    display: flex;
    flex: none;
    align-items: center;
    white-space: nowrap;
    code {
      line-height: 1.4;
    }
  }
  &-content {
    flex: auto;
  }
}
</style>
