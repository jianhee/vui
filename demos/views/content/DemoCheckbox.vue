<!-- 多选框 -->
<template>
  <DemoCard title="单独用法">
    <template #desc>
      <ol>
        <li>
          <code>v-model:checked</code> 复选框的选中状态，当前为 <code>{{ checkboxValue1 }}</code> <code>{{ checkboxValue2 }}</code>
        </li>
        <li><code>props.label</code> 复选框的文本，<code>slot.default</code> 文本后的自定义内容（括号内）</li>
        <li>
          <code>props.display</code> 默认 <code>inline</code> 行内，<code>block</code> 独占一行
          <MxBtn
            type="primary"
            link
            @click="isBlock = !isBlock"
          >
            切换
          </MxBtn>
        </li>
        <li><code>@change</code> 切换选中状态时触发，返回选中状态</li>
      </ol>
    </template>
    <MxCheckbox
      v-model:checked="checkboxValue1"
      label="选项1"
      :display="isBlock ? 'block' : undefined"
      @change="writeLog('change', $event)"
    />
    <MxCheckbox
      v-model:checked="checkboxValue2"
      label="选项2"
      :display="isBlock ? 'block' : undefined"
      :class="{ 'mx-ml-10': !isBlock }"
      @change="writeLog('change', $event)"
    >
      (checked {{ checkboxValue2 }})
    </MxCheckbox>
  </DemoCard>
  <DemoCard title="分组用法">
    <template #desc>
      <ol>
        <li>
          <code>v-model:value</code> 选中项的 <code>value</code>，当前为 <code>{{ checkboxValue3 }}</code>
        </li>
        <li><code>props.items</code> 选项</li>
        <ol>
          <li><code>item.value</code> 每项的值</li>
          <li><code>item.label</code> 每项的文本，<code>slot.default</code> 文本后的自定义内容（括号内）</li>
        </ol>
        <li>
          <code>props.direction</code> 排列方向，默认 <code>vertical</code> 纵向（每个选项占一行），<code>horizontal</code> 横向（所有选项在一行）
          <MxBtn
            type="primary"
            link
            @click="isHorizontal = !isHorizontal"
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
      :direction="isHorizontal ? 'horizontal' : undefined"
      @change="writeLog('change', $event)"
    >
      (value {{ item.value }})
    </MxCheckboxGroup>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

// 切换显示方式
const isBlock = ref(false);
const isHorizontal = ref(false);

// 值
const checkboxValue1 = ref(true);
const checkboxValue2 = ref(false);
const checkboxValue3 = ref([1]);

// 项
const checkboxItems = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' }
];
</script>
