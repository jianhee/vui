<!-- 演示 -->
<template>
  <div class="demo-view">
    <!-- 预览效果 -->
    <div class="demo-view-content">
      <div class="demo-view-title">{{ contentTitle }}</div>
      <div :class="['demo-view-container', { 'demo-view-gap': contentGap }]">
        <slot name="content" />
      </div>
    </div>
    <!-- 配置属性 -->
    <div class="demo-view-props">
      <div class="demo-view-title">{{ propsTitle }}</div>
      <div class="demo-view-container">
        <slot name="props" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  propsTitle: { type: String, default: '配置' },
  contentTitle: { type: String, default: '预览' },
  contentGap: { type: Boolean, default: false }
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
    background-color: var(--demo-view-bg-color);
  }
  &-content {
    flex: auto;
    padding: 15px 20px;
  }
  &-title {
    padding-bottom: 8px;
    margin-bottom: var(--demo-filed-gap);
    color: var(--demo-text-color-primary);
    border-bottom: 1px solid var(--demo-border-color-base);
  }
  &-gap {
    display: flex;
    flex-direction: column;
    gap: var(--demo-filed-gap);
  }
}
</style>
