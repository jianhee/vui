<!-- 主色 -->
<template>
  <div class="c-demo-color-box">
    <div
      class="c-demo-color-base"
      :style="baseColor.styles"
    >
      <div class="c-demo-color-name">{{ baseColor.name }}</div>
      <div class="c-demo-color-value">{{ baseColor.value }}</div>
    </div>
    <div class="c-demo-color-items">
      <div
        v-for="(item, index) in opcityColors"
        :key="item.name"
        class="c-demo-color-item"
        :style="item.styles"
      >
        {{ `${10 - index - 1}0%` }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useDark } from '@vueuse/core';

// 类型：brand, primary ...
const props = defineProps({
  type: { type: String, default: 'Brand' }
});

// 颜色
const baseColor = ref({});
const opcityColors = ref([]);

// 获取颜色
const getItems = () => {
  // Brand-base
  baseColor.value = getItem(`${props.type}-base`);
  // Brand-a1 ~ Brand-a9
  opcityColors.value = Array.from({ length: 9 })
    .map((_, i) => getItem(`${props.type}-a${i + 1}`))
    .reverse();

  function getItem(name) {
    // brand-base
    const key = name.toLowerCase();
    // #333
    const value = getComputedStyle(document.documentElement).getPropertyValue(`--vui-color-${key}`);
    return {
      // Brand
      name: name.replace('-base', ''),
      // #333
      value,
      styles: { backgroundColor: value }
    };
  }
};

// 初始化获取
onMounted(getItems);

// 切换明暗色时重新获取
useDark({
  storageKey: 'vitepress-theme-appearance',
  onChanged: getItems
});
</script>

<style lang="scss">
.c-demo-color {
  &-group {
    display: flex;
    flex-wrap: wrap;
    gap: var(--demo-filed-gap);
  }
  &-box {
    flex: auto;
    overflow: hidden;
    line-height: 1.2;
    color: #fff;
    border-radius: 4px;
  }
  &-base {
    padding: 20px 10px;
  }
  &-name {
    margin-bottom: 4px;
    font-size: 14px;
  }
  &-value {
    font-size: 12px;
  }
  &-items {
    display: flex;
  }
  &-item {
    flex: auto;
    padding: 15px 10px;
    overflow: hidden;
    font-size: 12px;
  }
}
</style>
