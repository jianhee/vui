<!-- 下拉框 -->
<template>
  <DemoCard title="使用 trigger 打开">
    <DemoRow>
      <MxDropdown trigger="hover">
        <MxBtn>hover</MxBtn>
        <template #content>
          <MxMenu
            :items="menuItems"
            @select="showLog('select', $event)"
          />
        </template>
      </MxDropdown>
      <MxDropdown trigger="click">
        <MxBtn>click</MxBtn>
        <template #content>
          <MxMenu
            :items="menuItems"
            @select="showLog('select', $event)"
          />
        </template>
      </MxDropdown>
      <MxDropdown trigger="contextmenu">
        <MxBtn>contextmenu</MxBtn>
        <template #content>
          <MxMenu
            :items="menuItems"
            @select="showLog('select', $event)"
          />
        </template>
      </MxDropdown>
    </DemoRow>
  </DemoCard>
  <DemoCard title="使用 open 方法打开">
    <DemoRow>
      <MxBtn
        ref="downdownTrigger"
        @click="openDropdown()"
      >
        对齐元素
      </MxBtn>
      <MxBtn @click="openDropdown">对齐鼠标</MxBtn>
      <MxDropdown ref="downdownContent">
        <template #content>
          <MxMenu
            :items="menuItems"
            @select="showLog('select', $event)"
          />
        </template>
      </MxDropdown>
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { unrefElement } from '@vueuse/core';
import IconClose from '@/icons/close.svg?component';

// 下拉框
const downdownTrigger = ref(null);
const downdownContent = ref(null);
function openDropdown(event) {
  const el = unrefElement(downdownTrigger);
  downdownContent.value.open(event || el);
}

// 菜单
const menuItems = [
  { key: 'key1', title: '图标 name', icon: 'close' },
  { key: 'key2', title: '图标 component', icon: IconClose },
  { key: 'key3', title: '图标 props.name', icon: { name: 'close' }, divider: true },
  { key: 'key4', title: '图标 props.component', icon: { component: IconClose } }
];

function showLog(action, val) {
  console.log(action, val);
}
</script>
