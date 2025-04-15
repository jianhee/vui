<!-- 单选框 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <DemoRow>
        1.<code>v-model:value</code> 选中项的 <code>value</code>，当前为 <code>{{ radioValue1 }}</code>
      </DemoRow>
      <DemoRow>2.<code>item.value</code> 单选框的值，<code>item.label</code> 单选框的文本</DemoRow>
      <DemoRow>3.<code>@change</code> 切换选项时触发，返回此项的所有数据</DemoRow>
    </template>
    <MxRadioGroup
      v-model:value="radioValue1"
      :items="radioItems"
      @change="writeLog('change', $event)"
    />
  </DemoCard>
  <DemoCard title="布局方式">
    <template #desc><code>layout</code> 布局方式</template>
    <MxRadioGroup
      v-model:value="radioValue2"
      :items="radioItems"
      layout="block"
    />
  </DemoCard>
  <DemoCard title="自定义内容">
    <template #desc><code>slot.default</code> 追加自定义内容（括号里的内容）</template>
    <MxRadioGroup
      v-slot="{ item }"
      v-model:value="radioValue3"
      :items="radioItems"
      layout="block"
    >
      （value {{ item.value }}）
    </MxRadioGroup>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

// 值
const radioValue1 = ref(1);
const radioValue2 = ref(1);
const radioValue3 = ref(1);

// 项
const radioItems = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' }
];
</script>
