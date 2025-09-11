<!--
演示：顶部居中标签
          code / label
content content content content content
-->
<template>
  <DemoViewBase class="demo-view-top--center">
    <slot />
  </DemoViewBase>
</template>

<style lang="scss">
.demo-view-top--center .demo-view-base-label {
  justify-content: center;
  margin-bottom: 4px;
  line-height: 22px;
}
</style>
