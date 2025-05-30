<!-- 间距 -->
<template>
  <div class="demo-space">
    <slot />
  </div>
</template>

<style lang="scss">
.demo-space {
  margin: 10px 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  > .vui-btn,
  > .vui-checkbox,
  > .vui-checkbox-btn,
  > .vui-radio,
  > .vui-radio-btn {
    margin-right: 10px;
  }
  > .vui-btn--block {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
