<!-- 多选框/单选框 -->
<template>
  <DemoCard title="单独用法">
    <template #desc>
      <ol>
        <li>
          <code>v-model:checked</code> 选中状态 <code>checked</code>，当前为 <code>{{ checked1 }}</code> <code>{{ checked2 }}</code>
        </li>
        <li><code>props.label</code> 文本，<code>slot.default</code> 文本后的自定义内容（括号内）</li>
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
    <component
      :is="component1"
      v-model:checked="checked1"
      label="选项1"
      :display="display"
      class="mx-mr-10"
      @change="writeLog('change', $event)"
    />
    <component
      :is="component1"
      v-model:checked="checked2"
      label="选项2"
      :display="display"
      @change="writeLog('change', $event)"
    >
      (checked {{ checked2 }})
    </component>
  </DemoCard>
  <DemoCard title="分组用法">
    <template #desc>
      <ol>
        <li>
          <code>v-model:value</code> 选中项的 <code>value</code>，当前为 <code>{{ value1 }}</code>
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
    <component
      :is="component2"
      v-slot="{ item }"
      v-model:value="value1"
      :items="valueItems"
      :direction="direction"
      @change="writeLog('change', $event)"
    >
      (value {{ item.value }})
    </component>
  </DemoCard>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { writeLog } from '@/utils';

// 区分页面
const route = useRoute();
const isRadio = computed(() => route.path === '/radio');

// 单独使用
const component1 = computed(() => (isRadio.value ? 'MxRadio' : 'MxCheckbox'));
const display = ref('inline');
const checked1 = ref(true);
const checked2 = ref(false);

// 分组使用
const component2 = computed(() => (isRadio.value ? 'MxRadioGroup' : 'MxCheckboxGroup'));
const direction = ref('vertical');
const defaultVal = computed(() => (isRadio.value ? 1 : [1]));
const value1 = ref(defaultVal.value);
const valueItems = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' }
];
</script>
