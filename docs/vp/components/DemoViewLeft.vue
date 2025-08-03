<!--
演示：左侧标签
code / label content
-->
<template>
  <DemoViewBase
    class="demo-view-left"
    :style="{ width: `${width}px` }"
  >
    <slot />
  </DemoViewBase>
</template>

<script setup>
defineProps({
  width: { type: String, default: null }
});
</script>

<style lang="scss">
.demo-view-left {
  display: flex;
  gap: 10px;
}
.demo-view-left .demo-view-base-label {
  text-align: right;
}
</style>
