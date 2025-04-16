<!-- 下拉框 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <DemoRow>1.<code>slot.default</code> 触发元素，<code>slot.content</code> 显示内容</DemoRow>
      <DemoRow>2.<code>props.trigger</code> 触发方式</DemoRow>
      <DemoRow>3.<code>@open</code> 和 <code>@close</code> 切换显示状态时触发</DemoRow>
    </template>
    <DemoRow flex>
      <MxDropdown
        trigger="hover"
        @open="writeLog('open')"
        @close="writeLog('close')"
      >
        <MxBtn>hover 触发</MxBtn>
        <template #content>
          <div class="demo-dropdown-content">1231</div>
        </template>
      </MxDropdown>
      <MxDropdown trigger="click">
        <MxBtn>click 触发</MxBtn>
        <template #content>
          <div class="demo-dropdown-content">1231</div>
        </template>
      </MxDropdown>
      <MxDropdown trigger="contextmenu">
        <MxBtn>contextmenu 触发</MxBtn>
        <template #content>
          <div class="demo-dropdown-content">1231</div>
        </template>
      </MxDropdown>
    </DemoRow>
  </DemoCard>
  <DemoCard title="使用 open 方法打开">
    <DemoRow>
      <MxBtn @click="openDropdown">点击打开</MxBtn>
      <MxDropdown
        ref="contentRef"
        trigger="click"
      >
        <template #content>
          <div class="demo-dropdown-content">1231</div>
        </template>
      </MxDropdown>
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

// 下拉框
const contentRef = ref(null);

// 打开下拉框
function openDropdown(event) {
  contentRef.value.open(event);
}
</script>

<style>
.demo-dropdown-content {
  width: 200px;
  height: 400px;
  padding: 10px;
}
</style>
