<!-- 间距 -->
<template>
  <div
    class="demo-space"
    :class="{ 'demo-space-flex': flex }"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  flex: { type: Boolean, default: false }
});
</script>

<style lang="scss">
.demo-space {
  margin: 10px 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &-flex {
    display: flex;
  }
  > .vui-icon,
  > .vui-btn,
  > .vui-checkbox,
  > .vui-checkbox-btn,
  > .vui-radio,
  > .vui-radio-btn,
  > .vui-dropdown-trigger {
    margin-right: 10px;
  }
  > .vui-btn--block {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
