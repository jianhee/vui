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
          <code>props.display</code> 显示类型，默认
          <MxBtn
            type="primary"
            link
            @click="display = 'inline'"
          >
            inline
          </MxBtn>
          行内，
          <MxBtn
            type="primary"
            link
            @click="display = 'block'"
          >
            block
          </MxBtn>
          独占一行
        </li>
        <li><code>@change</code> 切换选中状态时触发，返回选中状态</li>
      </ol>
    </template>
    <MxCheckbox
      v-model:checked="checkboxValue1"
      label="选项1"
      :display="display"
      class="mx-mr-10"
      @change="writeLog('change', $event)"
    />
    <MxCheckbox
      v-model:checked="checkboxValue2"
      label="选项2"
      :display="display"
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
          <code>props.direction</code> 排列方向，默认
          <MxBtn
            type="primary"
            link
            @click="direction = 'vertical'"
          >
            vertical
          </MxBtn>
          纵向（每项独占一行），
          <MxBtn
            type="primary"
            link
            @click="direction = 'horizontal'"
          >
            horizontal
          </MxBtn>
          横向（所有项共用一行）
        </li>
        <li><code>@change</code> 切换选项时触发，返回选中项的值</li>
      </ol>
    </template>
    <MxCheckboxGroup
      v-slot="{ item }"
      v-model:value="checkboxValue3"
      :items="checkboxItems"
      :direction="direction"
      @change="writeLog('change', $event)"
    >
      (value {{ item.value }})
    </MxCheckboxGroup>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

// 显示方式
const display = ref('inline');
const direction = ref('vertical');

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
