<!-- 菜单 -->
<template>
  <DemoCard title="基础用法">
    <template #desc><code>item.label</code> 菜单项的文本，<code>item.icon</code> 菜单项的前置图标</template>
    <MxMenu :items="menuItems1" />
  </DemoCard>
  <DemoCard title="选中项">
    <template #desc>
      <DemoRow>
        1.<code>v-model:selected-key</code> 选中项的 <code>key</code>，当前为 <code>{{ seletedKey }}</code>
      </DemoRow>
      <DemoRow>2.<code>show-selected-icon</code> 是否显示选中图标</DemoRow>
      <DemoRow>3.<code>@select</code> 点击菜单项时触发，<code>@select-change</code> 切换菜单项时触发，返回此项的所有数据</DemoRow>
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
