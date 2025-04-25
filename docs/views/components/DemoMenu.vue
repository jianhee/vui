<!-- 菜单 -->
<template>
  <DemoRow>通常搭配 <code>VDropdown</code> 一起使用</DemoRow>
  <DemoCard title="基础用法">
    <template #desc>
      <DemoRow><code>props.items</code> 菜单项</DemoRow>
      <ol>
        <li><code>item.key</code> 唯一标识，需要选中状态时必填，也可以是 <code>props.keyName</code> 指定的其它键名</li>
        <li><code>item.label</code> 文本</li>
        <li><code>item.icon</code> 前置图标， VIcon 组件的 name/component/props</li>
        <li><code>item.divider</code> 分隔符</li>
      </ol>
    </template>
    <VDropdown>
      <VBtn>基本用法</VBtn>
      <template #content>
        <VMenu :items="menuItems1" />
      </template>
    </VDropdown>
  </DemoCard>
  <DemoCard title="选中项">
    <template #desc>
      <ol>
        <li>
          <code>v-model:selectedKey</code> 选中项的 <code>key</code>，当前为 <code>{{ seletedKey }}</code>
        </li>
        <li><code>props.keyName</code> 自定义键名，默认 <code>key</code></li>
        <li><code>props.showSelectedIcon</code> 是否显示选中图标</li>
        <li><code>@select</code> 点击菜单项时触发，返回此项的所有数据</li>
        <li><code>@select-change</code> 切换菜单项时触发，返回此项的所有数据</li>
      </ol>
    </template>
    <VDropdown>
      <VBtn>选中项</VBtn>
      <template #content>
        <VMenu
          v-model:selected-key="seletedKey"
          :items="menuItems2"
          show-selected-icon
          @select="writeLog('select', $event)"
          @select-change="writeLog('select-change', $event)"
        />
      </template>
    </VDropdown>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';
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
