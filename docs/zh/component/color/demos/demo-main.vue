<template>
  <div class="demo-color-box">
    <div
      class="demo-color-base"
      :style="baseColor.styles"
    >
      <div class="demo-color-name">{{ baseColor.name }}</div>
      <div class="demo-color-value">{{ baseColor.value }}</div>
    </div>
    <div class="demo-color-items">
      <div
        v-for="(item, index) in opcityColors"
        :key="item.name"
        class="demo-color-item"
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
  type: { type: String, default: 'Primary' }
});

// 颜色
const baseColor = ref({});
const opcityColors = ref([]);

// 获取颜色
const getItems = () => {
  baseColor.value = getItem(`${props.type}-base`);
  opcityColors.value = Array.from({ length: 9 })
    .map((_, i) => getItem(`${props.type}-a${i + 1}`))
    .reverse();

  function getItem(name) {
    const key = name.toLowerCase();
    const value = getComputedStyle(document.documentElement).getPropertyValue(`--vui-color-${key}`);
    return {
      name: name.replace('-base', ''),
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
.demo-color {
  &-group {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
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
