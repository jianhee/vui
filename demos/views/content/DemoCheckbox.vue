<!-- 多选框 -->
<template>
  <DemoCard title="单独用法">
    <template #desc>
      <ol>
        <li>
          <code>v-model:checked</code> 复选框的选中状态，当前为 <code>{{ checkboxValue1 }}</code> <code>{{ checkboxValue2 }}</code>
        </li>
        <li><code>props.label</code> 复选框的文本，<code>slot.default</code> 追加自定义内容（括号内）</li>
        <li>
          <code>props.block</code> 块级元素
          <MxBtn
            size="small"
            @click="isBlock = !isBlock"
          >
            切换
          </MxBtn>
        </li>
        <li><code>@change</code> 切换选中状态时触发，返回选中状态</li>
      </ol>
    </template>
    <DemoRow>
      <MxCheckbox
        v-model:checked="checkboxValue1"
        label="选项1"
        :block="isBlock"
        @change="writeLog('change', $event)"
      />
      <MxCheckbox
        v-model:checked="checkboxValue2"
        label="选项2"
        :block="isBlock"
        @change="writeLog('change', $event)"
      >
        (checked {{ checkboxValue2 }})
      </MxCheckbox>
    </DemoRow>
  </DemoCard>
  <DemoCard title="分组用法">
    <template #desc>
      <ol>
        <li>
          <code>v-model:value</code> 选中项的 <code>value</code>，当前为 <code>{{ checkboxValue3 }}</code>
        </li>
        <li><code>props.items</code> 选项</li>
        <ol>
          <li><code>item.value</code> 多选框的值</li>
          <li><code>item.label</code> 多选框的文本，<code>slot.default</code> 追加自定义内容（括号内）</li>
        </ol>
        <li>
          <code>props.direction</code> 排列方向
          <MxBtn
            size="small"
            @click="isVertical = !isVertical"
          >
            切换
          </MxBtn>
        </li>
        <li><code>@change</code> 切换选项时触发，返回选中项的值</li>
      </ol>
    </template>
    <MxCheckboxGroup
      v-slot="{ item }"
      v-model:value="checkboxValue3"
      :items="checkboxItems"
      :direction="isVertical ? 'vertical' : 'horizontal'"
      @change="writeLog('change', $event)"
    >
      (value {{ item.value }})
    </MxCheckboxGroup>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

// 切换
const isBlock = ref(false);
const isVertical = ref(false);

// 值
const checkboxValue1 = ref(false);
const checkboxValue2 = ref(false);
const checkboxValue3 = ref([1]);

// 项
const checkboxItems = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' }
];
</script>
