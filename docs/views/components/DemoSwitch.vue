<!-- 开关 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li>
          <code>v-model:checked</code> 选中状态，当前为 <code>{{ switchVal1 }}</code>
        </li>
        <li><code>@change</code> 切换选中状态时触发，返回选中状态</li>
      </ol>
    </template>
    <VSwitch
      v-model:checked="switchVal1"
      @change="writeLog('change', $event)"
    />
  </DemoCard>
  <DemoCard title="切换前回调">
    <template #desc><code>before-change</code> 返回 <code>true</code> 时允许切换</template>
    <DemoRow flex>
      <VSwitch
        v-model:checked="switchVal2"
        :before-change="() => beforeChange(true)"
      />
      <VSwitch
        v-model:checked="switchVal3"
        :before-change="() => beforeChange(false)"
      />
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

// 开关值
const switchVal1 = ref(false);
const switchVal2 = ref(false);
const switchVal3 = ref(false);

// 切换前
let timer = null;
const beforeChange = state => {
  return new Promise(resolve => {
    timer = setTimeout(() => {
      clearTimeout(timer);
      resolve(state);
    }, 2000);
  });
};
</script>
