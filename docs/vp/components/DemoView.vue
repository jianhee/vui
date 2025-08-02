<!-- 演示 -->
<template>
  <div class="demo-view">
    <!-- 配置属性 -->
    <div class="demo-view-props">
      <div class="demo-view-title">{{ title }}</div>
      <VForm>
        <slot name="props" />
      </VForm>
    </div>
    <!-- 预览效果 -->
    <div class="demo-view-content">
      <div class="demo-view-title">预览效果</div>
      <VForm>
        <slot name="content" />
      </VForm>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '配置属性' }
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
    margin-bottom: 15px;
    color: var(--vui-text-color-primary);
    border-bottom: 1px solid var(--vui-border-color-base);
  }
}
</style>
