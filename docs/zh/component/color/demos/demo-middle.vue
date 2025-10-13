<!-- 中性色 -->
<template>
  <div class="c-demo-color-group">
    <div
      v-for="item1 in colorItems"
      :key="item1.name"
      class="c-demo-color-box"
    >
      <div
        v-for="item2 in item1.items"
        :key="item2.name"
        class="c-demo-color-item"
        :style="item2.styles"
      >
        <div class="c-demo-color-name">{{ item2.name }}</div>
        <div class="c-demo-color-value">{{ item2.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useDark } from '@vueuse/core';

const colorItems = ref([]);
const nameItems = [
  {
    name: 'Text-Color',
    color: 'var(--demo-color-box-color)',
    items: ['Primary', 'Regular', 'Secondary', 'Placeholder', 'Disabled']
  },
  {
    name: 'Border-Color',
    color: 'var(--vui-text-color-primary)',
    items: ['Darker', 'Dark', 'Base', 'Light', 'Lighter', 'Extra-light']
  },
  {
    name: 'Fill-Color',
    color: 'var(--vui-text-color-primary)',
    items: ['Darker', 'Dark', 'Base', 'Light', 'Lighter', 'Extra-light', 'Blank']
  },
  {
    name: 'Bg-Color',
    color: 'var(--vui-text-color-primary)',
    items: ['Page', 'Base', 'Overlay']
  },
  {
    name: 'Mask-Color',
    items: ['Base', 'Light', 'Lighter']
  }
  // {
  //   name: 'Box-Shadow',
  //   items: ['Dark', 'Base', 'Light', 'Lighter']
  // },
];

// 获取颜色
const getItems = () => {
  colorItems.value = nameItems.map(item1 => {
    return {
      // Text-Color
      name: item1.name,
      items: item1.items.map(item2 => {
        // text-color-primary
        const key = `${item1.name}-${item2}`.toLowerCase();
        // #333
        const value = getComputedStyle(document.documentElement).getPropertyValue(`--vui-${key}`);
        return {
          // Text Primary
          name: `${item1.name.replace('-Color', '')} ${item2.replace('-base', '')}`,
          // #333
          value,
          styles: { backgroundColor: value, color: item1.color }
        };
      })
    };
  });
};

// 初始化获取
onMounted(getItems);

// 切换明暗色时重新获取
useDark({
  storageKey: 'vitepress-theme-appearance',
  onChanged: getItems
});
</script>

<style>
html {
  --demo-color-box-color: #fff;
}
html.dark {
  --demo-color-box-color: var(--vui-bg-color-base);
}
</style>
