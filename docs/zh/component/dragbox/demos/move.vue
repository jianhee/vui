<template>
  <VDragbox
    v-model:left="leftRef"
    v-model:top="topRef"
    :enabled="isEnabled"
    movable
    class="demo-dragbox"
  >
    <DemoView>
      <template #content>
        <DemoViewLeft
          label="操作"
          label-width="100"
        >
          移动
        </DemoViewLeft>
        <DemoViewLeft
          label="绑定值"
          label-width="100"
        >
          <code>v-model:left="{{ leftRef }}"</code>
          <br />
          <code>v-model:top="{{ topRef }}"</code>
        </DemoViewLeft>
      </template>

      <template #props>
        <DemoViewBoolean
          label="是否启用"
          code="enabled"
        >
          <VSwitch v-model:checked="isEnabled" />
        </DemoViewBoolean>
      </template>
    </DemoView>
  </VDragbox>
</template>

<script setup>
import { ref } from 'vue';

const isEnabled = ref(false);
const leftRef = ref(500);
const topRef = ref(100);
</script>

<style>
.demo-dragbox {
  padding: 20px;
  overflow: hidden;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--component-preview-border);
  border-radius: 4px;
  box-shadow: 0 0 10px var(--component-preview-border);
}
</style>
