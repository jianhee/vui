<template>
  <DemoProps>
    <template #content>
      <DemoBasic
        :clickable="isClickable"
        :disabled="isDisabled"
        :spin="isSpin"
      />
    </template>

    <template #toolbar>
      <VFormItem label="clickable 是否可点击">
        <VSwitch
          v-model:checked="isClickable"
          active-text="开启"
          @change="onChange1"
        />
      </VFormItem>
      <VFormItem label="disabled 是否禁用">
        <VSwitch
          v-model:checked="isDisabled"
          active-text="开启"
          @change="onChange2"
        />
      </VFormItem>
      <VFormItem label="spin 是否旋转">
        <VSwitch
          v-model:checked="isSpin"
          active-text="开启"
        />
      </VFormItem>
    </template>
  </DemoProps>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isClickable = ref(true);
const isDisabled = ref(false);
const isSpin = ref(true);

// 切换点击状态
function onChange1() {
  if (isClickable.value) {
    isDisabled.value = false;
  }
}

// 切换禁用状态
function onChange2() {
  if (isDisabled.value) {
    isClickable.value = false;
  }
}
</script>
