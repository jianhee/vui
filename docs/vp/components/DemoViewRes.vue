<!-- 演示：结果 -->
<template>
  <div class="demo-view-res">
    <!-- label -->
    <div :class="['demo-view-res-label', { 'is-center': center }]">{{ label }}</div>
    <!-- content -->
    <div class="demo-view-res-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: null },
  center: { type: Boolean, default: false }
});
</script>

<style lang="scss">
.demo-view-res {
  flex: auto;
  width: 100%;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  &-label {
    margin-bottom: 8px;
  }
  &-label.is-center {
    text-align: center;
  }
}
</style>
