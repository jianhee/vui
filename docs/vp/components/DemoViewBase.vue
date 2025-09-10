<!-- 演示：项 -->
<template>
  <div class="demo-view-base">
    <!-- label -->
    <div
      class="demo-view-base-label"
      :class="{ 'is-reverse': start === 'label' }"
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
  labelWidth: { type: String, default: null },
  start: { type: String, default: 'code' }
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
    &.is-reverse {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
  }
  &-content {
    flex: auto;
  }
}
</style>
