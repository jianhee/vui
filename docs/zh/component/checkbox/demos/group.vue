<template>
  <component
    :is="GroupComponent"
    v-slot="{ option }"
    v-model:value="checkedVal"
    :options="options"
    v-bind="$attrs"
    @change="writeLog('change', $event)"
  >
    <template v-if="option?.value === 1">选项1</template>
  </component>

  <DemoSpace v-if="isShowValue">
    当前值为 <code>{{ checkedVal }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref, useAttrs } from 'vue';
import { writeLog } from '@vp/utils';
import { useRouteValid } from '@vp/composables';

defineOptions({ inheritAttrs: false });

// 是否显示值
const attrs = useAttrs();
const isShowValue = Object.keys(attrs).length === 0;

// 区分类型
const isCheckbox = useRouteValid('checkbox');
const GroupComponent = isCheckbox ? 'VCheckboxGroup' : 'VRadioGroup';
const defaultVal = isCheckbox ? [1, 2] : 1;

// 选中值
const checkedVal = ref(defaultVal);

// 选项
const options = [
  // Object
  { value: 1, label: '使用插槽' },
  { value: 2, label: '选项2' },
  { value: 3 },
  // string|number
  4
];
</script>
