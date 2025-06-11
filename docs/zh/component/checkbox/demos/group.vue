<template>
  <DemoSpace>
    <component
      :is="GroupComponent"
      v-slot="{ option }"
      v-model:value="checkedVal"
      :options="options"
      v-bind="$attrs"
      @change="writeLog('change', $event)"
    >
      <template v-if="option === 3"> + 自定义内容</template>
    </component>
  </DemoSpace>

  <DemoSpace>
    绑定值 <code>v-model:value</code> 的值为 <code>{{ checkedVal }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vitepress';
import { writeLog } from '@vp/utils';

defineOptions({ inheritAttrs: false });

// 区分类型
const route = useRoute();
const isCheckbox = /checkbox/.test(route.path);
const GroupComponent = isCheckbox ? 'VCheckboxGroup' : 'VRadioGroup';
const defaultVal = isCheckbox ? [1, 2] : 1;

// 选中值
const checkedVal = ref(defaultVal);

// 选项
const options = [
  // Object
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  // Number|String
  3
];
</script>
