<!-- 使用示例 -->
<template>
  <div class="g-demo-usage">
    <!-- 渲染结果 -->
    <div class="g-demo-usage-render">
      <div class="g-demo-usage-render-title">配置</div>
      <div
        :class="{
          'g-demo-usage-render-slot': true,
          'g-demo-usage-render-slot-gap': renderGap
        }"
      >
        <slot name="render" />
      </div>
    </div>
    <!-- 配置项 -->
    <div
      class="g-demo-usage-config"
      :style="{ width: configWidth }"
    >
      <div class="g-demo-usage-config-title">预览</div>
      <div class="g-demo-usage-config-container">
        <slot name="config" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  // 渲染结果中的各项之间是否有间距
  renderGap: { type: Boolean, default: false },
  // 配置项的宽度
  configWidth: { type: String, default: null }
});
</script>

<style lang="scss">
.g-demo-usage {
  display: flex;
  margin: -20px;
  &-render {
    flex: auto;
    padding: 15px 20px;
  }
  &-config {
    min-width: 300px;
    padding: 15px 20px;
    background-color: var(--demo-view-bg-color);
  }
  &-render-title,
  &-config-title {
    padding-bottom: 8px;
    margin-bottom: var(--demo-filed-gap);
    color: var(--demo-text-color-primary);
    border-bottom: 1px solid var(--demo-border-color-base);
  }
  &-render-slot-gap > * {
    margin-bottom: var(--demo-filed-gap);
  }
}
</style>
