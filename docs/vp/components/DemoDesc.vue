<!-- 描述说明 -->
<template>
  <div class="demo-desc">
    目前支持
    <code
      v-for="item in items"
      :key="item"
    >
      {{ item }}
    </code>
    等 {{ items?.length }} 个属性
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, default: null }
});
</script>

<style lang="scss">
.demo-desc {
  padding: 8px 16px;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 24px;
  background-color: var(--vp-custom-block-info-bg);
  border-radius: 8px;
  code {
    margin: 0 2px;
  }
}
</style>
