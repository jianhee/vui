<template>
  <DemoSpace>
    <component
      :is="GroupComponent"
      v-slot="{ option }"
      v-model:value="checkedVal"
      :options="options"
      v-bind="$attrs"
      @change="onChange"
    >
      <template v-if="option.value === 3">（自定义内容）</template>
    </component>
  </DemoSpace>

  <DemoSpace>
    绑定值为
    <code>{{ checkedVal }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vitepress';
import { writeLog } from '@utils';

defineOptions({ inheritAttrs: false });

// 区分类型
const route = useRoute();
const isCheckbox = /checkbox/.test(route.path);
const GroupComponent = isCheckbox ? 'VCheckboxGroup' : 'VRadioGroup';
const defaultVal = isCheckbox ? [1] : 1;

// 选中值
const checkedVal = ref(defaultVal);

// 选项
const options = [
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  { label: '选项3', value: 3 }
];

// 切换选项
function onChange(...arg) {
  writeLog('change', ...arg);
}
</script>
