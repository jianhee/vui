<!-- 下拉框+菜单 -->
<template>
  <DemoCard title="菜单">
    <template #desc>每项的显示值：优先显示 <code>slot</code> 其次显示 <code>item.title</code></template>
    <MxMenu
      :items="menuItems"
      @select="writeLog('select', $event)"
    />
  </DemoCard>
  <DemoCard title="使用 trigger 打开">
    <DemoRow flex>
      <MxDropdown
        trigger="hover"
        @open="writeLog('open')"
        @close="writeLog('close')"
      >
        <MxBtn>hover</MxBtn>
        <template #content>
          <MxMenu :items="menuItems" />
        </template>
      </MxDropdown>
      <MxDropdown trigger="click">
        <MxBtn>click</MxBtn>
        <template #content>
          <MxMenu :items="menuItems" />
        </template>
      </MxDropdown>
      <MxDropdown trigger="contextmenu">
        <MxBtn>contextmenu</MxBtn>
        <template #content>
          <MxMenu :items="menuItems" />
        </template>
      </MxDropdown>
    </DemoRow>
  </DemoCard>
  <DemoCard title="使用 open 方法打开">
    <DemoRow>
      <MxBtn
        ref="triggerRef"
        @click="openDropdown()"
      >
        对齐元素
      </MxBtn>
      <MxBtn @click="openDropdown">对齐鼠标</MxBtn>
      <MxDropdown ref="contentRef">
        <template #content>
          <MxMenu :items="menuItems" />
        </template>
      </MxDropdown>
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { unrefElement } from '@vueuse/core';
import { writeLog } from '@/utils';
import IconClose from '@/assets/icons/close.svg?component';

// 菜单数据
const menuItems = [
  { title: '图标 name', icon: 'close' },
  { title: '图标 component', icon: IconClose },
  { title: '图标 props.name', icon: { name: 'close' }, divider: true },
  { title: '图标 props.component', icon: { component: IconClose } }
];

// 下拉框
const triggerRef = ref(null);
const contentRef = ref(null);

// 打开下拉框
function openDropdown(event) {
  const el = unrefElement(triggerRef);
  contentRef.value.open(event || el);
}
</script>
