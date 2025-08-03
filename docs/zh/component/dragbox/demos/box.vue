<template>
  <VDragbox
    v-model:left="leftRef"
    v-model:top="topRef"
    v-model:width="widthRef"
    v-model:height="heightRef"
    :enabled="isEnabled"
    movable
    resizable
    :min-width="100"
    :min-height="100"
    class="demo-dragbox"
  >
    <DemoView>
      <template #content>
        <DemoViewLeft
          label="操作"
          label-width="100"
        >
          移动+缩放
        </DemoViewLeft>
        <DemoViewLeft
          label="绑定值"
          label-width="100"
        >
          <code>v-model:left="{{ leftRef }}"</code>
          <br />
          <code>v-model:top="{{ topRef }}"</code>
          <br />
          <code>v-model:width="{{ widthRef }}"</code>
          <br />
          <code>v-model:height="{{ heightRef }}"</code>
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
const leftRef = ref(300);
const topRef = ref(100);
const widthRef = ref(600);
const heightRef = ref(260);
</script>
