<!-- 演示 -->
<template>
  <div class="demo-view">
    <!-- 配置属性 -->
    <div class="demo-view-props">
      <div class="demo-view-title">{{ propsTitle }}</div>
      <slot name="props" />
    </div>
    <!-- 预览效果 -->
    <div class="demo-view-content">
      <div class="demo-view-title">{{ contentTitle }}</div>
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  propsTitle: { type: String, default: '配置属性' },
  contentTitle: { type: String, default: '预览效果' }
});
</script>

<style lang="scss">
.demo-view {
  display: flex;
  margin: -20px;
  &-props {
    flex: none;
    min-width: 30%;
    padding: 15px 20px;
    background-color: var(--vui-bg-color-page);
  }
  &-content {
    flex: auto;
    padding: 15px 20px;
  }
  &-title {
    padding-bottom: 8px;
    margin-bottom: 18px;
    color: var(--vui-text-color-primary);
    border-bottom: 1px solid var(--vui-border-color-base);
  }
}
</style>
