<!-- 下拉菜单 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <DemoRow>`props.items` 菜单项</DemoRow>
      <ol>
        <li>`item.key` 唯一标识，需要选中状态时必填，也可以是 `props.keyName` 指定的其它键名</li>
        <li>`item.label` 文本</li>
        <li>`item.icon` 前置图标， VIcon 组件的 name/component/props</li>
        <li>`item.divider` 分隔符</li>
      </ol>
    </template>
    <VDropdownMenu :items="menuItems1">
      <VBtn>基本用法</VBtn>
    </VDropdownMenu>
  </DemoCard>
  <DemoCard title="选中项">
    <template #desc>
      <ol>
        <li>`v-model:selectedKey` 选中项的 `key`，当前为 `{{ seletedKey }}`</li>
        <li>`props.keyName` 自定义键名，默认 `key`</li>
        <li>`props.showSelectedIcon` 是否显示选中图标</li>
        <li>`@select` 点击菜单项时触发，返回此项的所有数据</li>
        <li>`@select-change` 切换菜单项时触发，返回此项的所有数据</li>
      </ol>
    </template>
    <VDropdownMenu
      v-model:selected-key="seletedKey"
      :items="menuItems2"
      show-selected-icon
      @select="writeLog('select', $event)"
      @select-change="writeLog('select-change', $event)"
    >
      <VBtn>选中项</VBtn>
    </VDropdownMenu>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@utils';
import IconClose from '@/assets/icons/close.svg?component';

// 菜单1
const menuItems1 = [
  // 文本
  { label: '文本1' },
  { label: '文本2', divider: true },
  // 图标
  { label: '传入 name', icon: 'close' },
  { label: '传入 component', icon: IconClose },
  { label: '传入 { name }', icon: { name: 'close' } },
  { label: '传入 { component }', icon: { component: IconClose } }
];

// 菜单2
const seletedKey = ref(1);
const menuItems2 = [1, 2, 3, 4].map(key => ({
  key,
  label: `选项${key}`
}));
</script>
