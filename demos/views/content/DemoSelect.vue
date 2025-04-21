<!-- 选择器 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li>
          <code>v-model:value</code> 选中项的 <code>value</code>，当前为 <code>{{ selectValue1 }}</code>
        </li>
        <li><code>props.items</code> 选项</li>
        <ol>
          <li><code>item.value</code> 选项的值</li>
          <li><code>item.label</code> 选项的文本</li>
        </ol>
        <li><code>@change</code> 切换选项时触发，返回选中项的 <code>value</code></li>
      </ol>
    </template>
    <MxSelect
      v-model:value="selectValue1"
      :items="selectOptions"
      @change="writeLog('change', $event)"
    />
  </DemoCard>
  <DemoCard title="原生属性">
    <template #desc>
      <ol>
        <li><code>props.disabled</code></li>
      </ol>
    </template>
    <DemoRow flex>
      <MxSelect
        v-model:value="selectValue3"
        :items="selectOptions"
        disabled
      />
    </DemoRow>
  </DemoCard>
  <DemoCard title="尺寸">
    <template #desc><code>props.size</code></template>
    <DemoRow flex>
      <MxSelect
        v-model:value="selectValue4"
        :items="selectOptions"
      />
      <MxSelect
        v-model:value="selectValue5"
        :items="selectOptions"
        size="small"
      />
    </DemoRow>
  </DemoCard>
  <DemoCard title="作为文本显示">
    <template #desc><code>props.text</code></template>
    <DemoRow flex>
      <MxSelect :text="selectValue6" />
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

const selectValue1 = ref(1);
const selectValue3 = ref(1);
const selectValue4 = ref(1);
const selectValue5 = ref(1);
const selectValue6 = ref('这里不会出现下拉');
const selectOptions = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' }
];
</script>
