<!-- 下拉框 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li>`slot.default` 触发元素，`slot.content` 内容元素</li>
        <li>`props.trigger` 触发方式</li>
        <li>`@open` 和 `@close` 切换显示状态时触发</li>
      </ol>
    </template>
    <DemoRow flex>
      <VDropdown
        trigger="hover"
        @open="writeLog('open')"
        @close="writeLog('close')"
      >
        <VBtn>hover 触发</VBtn>
        <template #content>
          <div class="demo-dropdown">内容</div>
        </template>
      </VDropdown>
      <VDropdown trigger="click">
        <VBtn>click 触发</VBtn>
        <template #content>
          <div class="demo-dropdown">内容</div>
        </template>
      </VDropdown>
      <VDropdown trigger="contextmenu">
        <VBtn>contextmenu 触发</VBtn>
        <template #content>
          <div class="demo-dropdown">内容</div>
        </template>
      </VDropdown>
    </DemoRow>
  </DemoCard>
  <DemoCard title="手动打开">
    <template #desc>`dropdownRef.open()`</template>
    <VBtn @click="openDropdown">点击打开</VBtn>
    <VDropdown
      ref="dropdownRef"
      trigger="click"
    >
      <template #content>
        <div class="demo-dropdown">内容</div>
      </template>
    </VDropdown>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@utils';

// 下拉框
const dropdownRef = ref();

// 打开下拉框
function openDropdown(event) {
  dropdownRef.value.open(event);
}
</script>

<style scoped>
.demo-dropdown {
  width: 200px;
  height: 200px;
  padding: 10px;
}
</style>
