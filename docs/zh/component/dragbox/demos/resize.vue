<template>
  <!-- 定位元素 -->
  <VDragbox
    v-model:left="leftRef1"
    v-model:top="topRef1"
    v-model:width="widthRef1"
    v-model:height="heightRef1"
    :enabled="isEnabled1"
    resizable
    :resize-handles="handlesRef1"
    :min-width="100"
    :min-height="100"
    class="demo-dragbox"
    :class="{ 'demo-dragbox-fixed': isEnabled1 }"
  >
    <DemoView>
      <template #content>
        <DemoViewLeft
          label="操作"
          label-width="100"
        >
          定位元素缩放
        </DemoViewLeft>
        <DemoViewLeft
          label="绑定值"
          label-width="100"
        >
          <code>v-model:left="{{ leftRef1 }}"</code>
          <br />
          <code>v-model:top="{{ topRef1 }}"</code>
          <br />
          <code>v-model:width="{{ widthRef1 }}"</code>
          <br />
          <code>v-model:height="{{ heightRef1 }}"</code>
        </DemoViewLeft>
      </template>
      <template #props>
        <DemoViewBoolean
          label="是否启用"
          code="enabled"
        >
          <VSwitch v-model:checked="isEnabled1" />
        </DemoViewBoolean>
        <DemoViewTop
          label="可缩放手柄"
          code="resizeHandles"
        >
          <VCheckboxGroup
            v-model:value="handlesRef2"
            :options="handlesOptions"
            option-type="button"
          />
        </DemoViewTop>
      </template>
    </DemoView>
  </VDragbox>

  <br />

  <VDragbox
    v-model:width="widthRef2"
    v-model:height="heightRef2"
    :enabled="isEnabled2"
    resizable
    :resize-handles="handlesRef2"
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
          非定位元素缩放
        </DemoViewLeft>
        <DemoViewLeft
          label="绑定值"
          label-width="100"
        >
          <code>v-model:width="{{ widthRef2 }}"</code>
          <br />
          <code>v-model:height="{{ heightRef2 }}"</code>
        </DemoViewLeft>
      </template>
      <template #props>
        <DemoViewBoolean
          label="是否启用"
          code="enabled"
        >
          <VSwitch v-model:checked="isEnabled2" />
        </DemoViewBoolean>
        <DemoViewTop
          label="可缩放手柄"
          code="resizeHandles"
        >
          <VCheckboxGroup
            v-model:value="handlesRef2"
            :options="handlesOptions"
            option-type="button"
          />
        </DemoViewTop>
      </template>
    </DemoView>
  </VDragbox>
</template>

<script setup>
import { ref } from 'vue';

const handlesOptions = ['left', 'right', 'top', 'bottom'];

// 定位元素
const isEnabled1 = ref(false);
const handlesRef1 = ref(['left', 'right', 'top', 'bottom']);
const leftRef1 = ref(300);
const topRef1 = ref(100);
const widthRef1 = ref(600);
const heightRef1 = ref(400);

// 非定位元素
const isEnabled2 = ref(false);
const handlesRef2 = ref(['left', 'right', 'top', 'bottom']);
const widthRef2 = ref(600);
const heightRef2 = ref(260);
</script>

<style>
.demo-dragbox-fixed {
  position: fixed !important;
  z-index: 999;
}
</style>
