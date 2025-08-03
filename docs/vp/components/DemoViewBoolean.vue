<!--
演示：布尔型属性
code / label        switch
-->
<template>
  <DemoViewBase class="demo-view--boolean">
    <slot />
  </DemoViewBase>
</template>

<style lang="scss">
.demo-view--boolean {
  display: flex;
  gap: 10px;
}
.demo-view--boolean .demo-view-base-label {
  line-height: 32px;
}
.demo-view--boolean .demo-view-base-content {
  text-align: right;
}
</style>
