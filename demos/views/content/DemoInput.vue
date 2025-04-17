<!-- 表单 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li>
          <code>v-model:value</code> 输入框的 <code>value</code>，当前值为 <code>{{ inputValue }}</code>
        </li>
        <li><code>@input</code>, <code>@change</code> 原生事件</li>
        <li><code>@enter</code> 按下 Enter 键时触发</li>
        <li><code>@clear</code> 点击清空按钮时触发</li>
      </ol>
    </template>
    <MxInput
      v-model:value="inputValue"
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
        <li><code>props.maxlength</code></li>
        <li><code>props.disabled</code></li>
      </ol>
    </template>
    <DemoRow flex>
      <MxInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        maxlength="10"
      />
      <MxInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        disabled
      />
    </DemoRow>
  </DemoCard>
  <DemoCard title="尺寸">
    <template #desc><code>props.size</code></template>
    <DemoRow flex>
      <MxInput
        v-model:value="inputValue"
        placeholder="请输入内容"
      />
      <MxInput
        v-model:value="inputValue"
        placeholder="请输入内容"
        size="small"
      />
    </DemoRow>
  </DemoCard>
  <DemoCard title="前置图标">
    <template #desc><code>props.icon</code> MxIcon 组件的 name/component/props</template>
    <MxInput
      v-model:value="inputValue"
      placeholder="请输入内容"
      icon="close"
    />
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

const inputValue = ref('123456');
</script>
