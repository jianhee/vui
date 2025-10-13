<template>
  <VComponentMatchRoute
    v-slot="{ option }"
    v-model:value="checkedVal"
    route-suffix="Group"
    :options="options"
    v-bind="$attrs"
    @change="onChange"
  >
    <template v-if="option?.value === options[0].value">选项1的插槽</template>
  </VComponentMatchRoute>

  <DemoSpace v-if="isBasic">
    当前值为 <code>{{ checkedVal }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import { validateRoutePath } from '@vp/composables';
import { useDemo } from '../composables/index.js';

defineOptions({ inheritAttrs: false });
const { isBasic, onChange } = useDemo();

// 选项
const options = [
  // Object
  { value: '选项1的value', label: '选项1的label' },
  { value: '选项2的value', label: '选项2的label' },
  { value: '选项3的value' },
  // string|number
  '选项4'
];

// 默认值
const checkedDefaultVal = [options[0].value, options[1].value];
const radioDefaultVal = options[0].value;
const isCheckbox = validateRoutePath('checkbox');
const defaultVal = isCheckbox ? checkedDefaultVal : radioDefaultVal;

// 当前值
const checkedVal = ref(defaultVal);
</script>
