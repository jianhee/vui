<!-- 行 -->
<template>
  <div :class="['demo-row', { 'demo-row-flex': flex, 'demo-row-flex-center': flexCenter }]">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  flex: { type: Boolean, default: false },
  flexCenter: { type: Boolean, default: false }
});
</script>

<style lang="scss">
.demo-row {
  margin: 10px 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &-flex {
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }
  &-flex-center {
    align-items: center !important;
  }
  > .vui-btn {
    margin-right: 10px;
  }
  > .vui-btn--display-block {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
