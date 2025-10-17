<!-- 配置项 -->
<template>
  <div
    :class="{
      'g-demo-config': true,
      [`g-demo-config-label--${labelPosition}`]: !labelWidth
    }"
  >
    <!-- label -->
    <div
      class="g-demo-config-label"
      :style="{ width: labelWidth }"
    >
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
  code: { type: String, default: undefined },
  label: { type: String, default: undefined },
  labelWidth: { type: String, default: undefined },
  // left, top, top-center
  labelPosition: { type: String, default: 'left' }
});
</script>

<style lang="scss">
.g-demo-config {
  display: flex;
  flex: auto;
  gap: 5px var(--demo-filed-gap);
  width: 100%;
  margin-bottom: var(--demo-filed-gap);
  overflow: auto;
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
    > code {
      line-height: 1.4;
    }
  }
  &-content {
    flex: auto;
  }

  // label位置
  &-label--left {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &-label--left > &-content {
    flex: none;
  }
  &-label--top,
  &-label--top-center {
    flex-direction: column;
  }
  &-label--top-center > &-label {
    justify-content: center;
  }
}
</style>
