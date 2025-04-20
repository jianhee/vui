<!-- 表单 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li>
          <code>v-model:value</code> 输入框的 <code>value</code>，当前值为 <code>{{ inputValue1 }}</code>
        </li>
        <li><code>@input</code>, <code>@change</code> 原生事件</li>
        <li><code>@enter</code> 按下 Enter 键时触发</li>
        <li><code>@clear</code> 点击清空按钮时触发</li>
      </ol>
    </template>
    <MxInput
      v-model:value="inputValue1"
      placeholder="请输入内容"
      @input="writeLog('input', $event)"
      @change="writeLog('change', $event)"
      @enter="writeLog('enter', $event)"
      @clear="writeLog('clear', $event)"
    />
  </DemoCard>
  <DemoCard title="原生属性">
    <template #desc>
      <ol>
        <li><code>props.placeholder</code></li>
        <li><code>props.disabled</code></li>
        <li><code>props.maxlength</code></li>
      </ol>
    </template>
    <DemoRow flex>
      <MxInput
        v-model:value="inputValue2"
        placeholder="请输入内容"
      />
      <MxInput
        v-model:value="inputValue3"
        placeholder="disabled"
        disabled
      />
      <MxInput
        v-model:value="inputValue4"
        placeholder="maxlength=5"
        maxlength="5"
      />
    </DemoRow>
  </DemoCard>
  <DemoCard title="前置图标">
    <template #desc><code>props.icon</code> MxIcon 组件的 name/component/props</template>
    <MxInput
      v-model:value="inputValue5"
      placeholder="请输入内容"
      icon="close"
    />
  </DemoCard>
  <DemoCard title="尺寸">
    <template #desc><code>props.size</code></template>
    <DemoRow flex>
      <MxInput
        v-model:value="inputValue6"
        placeholder="medium"
      />
      <MxInput
        v-model:value="inputValue7"
        placeholder="small"
        size="small"
      />
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

const inputValue1 = ref('');
const inputValue2 = ref('');
const inputValue3 = ref('');
const inputValue4 = ref('');
const inputValue5 = ref('');
const inputValue6 = ref('');
const inputValue7 = ref('');
</script>
