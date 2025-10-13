<!-- 配置项 -->
<template>
  <div :class="['g-demo-config', `g-demo-config-label--${labelPosition}`]">
    <!-- label -->
    <div class="g-demo-config-label">
      <span v-if="label">{{ label }}</span>
      <span v-if="label && code">&nbsp;/&nbsp;</span>
      <code v-if="code">{{ code }}</code>
    </div>
    <!-- content -->
    <div class="g-demo-config-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  code: { type: String, default: null },
  label: { type: String, default: null },
  // left, top, top-center
  labelPosition: { type: String, default: 'left' }
});
</script>

<style lang="scss">
.g-demo-config {
  display: flex;
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
    height: 32px;
    line-height: 32px;
    white-space: nowrap;
    code {
      line-height: 1.4;
    }
  }

  // label位置
  &-label--left {
    gap: 0 12px;
    justify-content: space-between;
  }
  &-label--top-center > .g-demo-config-label {
    justify-content: center;
  }
}
</style>
