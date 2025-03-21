<!-- 菜单 -->
<template>
  <DemoCard title="在下拉框中使用">
    <MxDropdown trigger="hover">
      <MxBtn>hover</MxBtn>
      <template #content>
        <MxMenu
          :data="menuItems"
          @select="showLog('select', $event)"
        />
      </template>
    </MxDropdown>
  </DemoCard>
</template>

<script setup>
import IconClose from '@/icons/close.svg?component';

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
