<!-- 下拉框 -->
<template>
  <DemoCard title="使用 trigger 打开">
    <DemoRow>
      <MxDropdown trigger="hover">
        <MxBtn>hover</MxBtn>
        <template #content>
          <div class="demo-dorpdown-content">内容</div>
        </template>
      </MxDropdown>
      <MxDropdown trigger="click">
        <MxBtn>click</MxBtn>
        <template #content>
          <div class="demo-dorpdown-content">内容</div>
        </template>
      </MxDropdown>
      <MxDropdown trigger="contextmenu">
        <MxBtn>contextmenu</MxBtn>
        <template #content>
          <div class="demo-dorpdown-content">内容</div>
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
          <div class="demo-dorpdown-content">内容</div>
        </template>
      </MxDropdown>
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { unrefElement } from '@vueuse/core';

const downdownTrigger = ref(null);
const downdownContent = ref(null);
function openDropdown(event) {
  const el = unrefElement(downdownTrigger);
  downdownContent.value.open(event || el);
}
</script>

<style scoped>
.demo-dorpdown-content {
  width: 100px;
  height: 200px;
  padding: 10px;
}
</style>
