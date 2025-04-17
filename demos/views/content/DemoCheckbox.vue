<!-- 多选框 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li>
          <code>v-model:checked</code> 多选框的选中状态，当前为 <code>{{ checkboxValue }}</code>
        </li>
        <li><code>props.label</code> 文本内容，<code>slot.default</code> 追加自定义内容（括号内）</li>
        <li><code>@change</code> 切换选中状态时触发，返回选中状态</li>
      </ol>
    </template>
    <MxCheckbox
      v-model:checked="checkboxValue"
      label="内容"
      @change="writeLog('change', $event)"
    >
      （checked：{{ checkboxValue }}）
    </MxCheckbox>
  </DemoCard>
  <DemoCard title="布局方式">
    <template #desc><code>props.block</code></template>
    <DemoRow>
      <MxBtn @click="isBlock = !isBlock">切换布局</MxBtn>
    </DemoRow>
    <DemoRow>
      <MxCheckbox
        v-model:checked="checkboxValue1"
        label="选项1"
        :block="isBlock"
      />
      <MxCheckbox
        v-model:checked="checkboxValue2"
        label="选项2"
        :block="isBlock"
      />
      <MxCheckbox
        v-model:checked="checkboxValue3"
        label="选项3"
        :block="isBlock"
      />
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

const isBlock = ref(false);
const checkboxValue = ref(false);
const checkboxValue1 = ref(false);
const checkboxValue2 = ref(false);
const checkboxValue3 = ref(false);
</script>
