<!-- 菜单 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <DemoRow>1.<code>item.label</code> 指定显示文本</DemoRow>
      <DemoRow>2.<code>item.icon</code> 指定前置图标</DemoRow>
    </template>
    <MxMenu :items="menuItems1" />
  </DemoCard>
  <DemoCard title="数据交互">
    <template #desc>
      <DemoRow>
        1.<code>v-model:selected-key</code> 选中项的 <code>key</code>，当前为 <code>{{ seletedKey }}</code>
      </DemoRow>
      <DemoRow>2.<code>show-selected-icon</code> 是否显示选中图标</DemoRow>
      <DemoRow>3.<code>@select</code> 选中一项时触发，返回选中项的值</DemoRow>
      <DemoRow>4.<code>@select-change</code> 选中项改变时触发，返回选中项的值</DemoRow>
    </template>
    <MxMenu
      v-model:selected-key="seletedKey"
      :items="menuItems2"
      show-selected-icon
      @select="writeLog('select', $event)"
      @select-change="writeLog('select-change', $event)"
    />
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';
import IconClose from '@/assets/icons/close.svg?component';

// 当前选中项的key
const seletedKey = ref(1);

// 菜单1
const menuItems1 = [
  { label: '图标 name', icon: 'close' },
  { label: '图标 component', icon: IconClose },
  { label: '图标 props.name', icon: { name: 'close' } },
  { label: '图标 props.component', icon: { component: IconClose } }
];

// 菜单2
const menuItems2 = [1, 2, 3, 4].map(key => ({
  key,
  label: `选项${key}`,
  divider: key === 2
}));
</script>
