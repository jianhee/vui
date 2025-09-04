<!--
演示：左侧标签
code / label content
-->
<template>
  <DemoViewBase class="demo-view--left">
    <slot />
  </DemoViewBase>
</template>

<style lang="scss">
.demo-view--left {
  display: flex;
  gap: 12px;
}
.demo-view--left .demo-view-base-label {
  height: 32px;
  line-height: 32px;
}
</style>
