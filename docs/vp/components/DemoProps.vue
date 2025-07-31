<!-- 属性演示 -->
<template>
  <div class="demo-props">
    <!-- 配置属性 -->
    <div class="demo-props-toolbar">
      <div class="demo-props-title">配置属性</div>
      <VForm label-position="top">
        <slot name="toolbar" />
      </VForm>
    </div>
    <!-- 预览效果 -->
    <div class="demo-props-content">
      <div class="demo-props-title">预览效果</div>
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss">
.demo-props {
  display: flex;
  flex-wrap: wrap;
  margin: -20px;
  &-toolbar {
    flex: none;
    min-width: 30%;
    padding: 20px;
    background-color: var(--vui-fill-color-light);
    border-right: 1px solid var(--vui-border-color-base);
  }
  &-title {
    padding-bottom: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    border-bottom: 1px solid var(--vui-border-color-base);
  }
  &-content {
    flex: auto;
    padding: 20px;
  }
}
</style>
