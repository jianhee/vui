<template>
  <component
    :is="GroupComponent"
    v-slot="{ option }"
    v-model:value="checkedVal"
    :options="options"
    v-bind="$attrs"
    @change="writeLog('change', $event)"
  >
    <template v-if="option?.value === options[0].value">选项1的插槽</template>
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

// 选项
const options = [
  // Object
  { value: '选项1的value', label: '选项1的label' },
  { value: '选项2的value', label: '选项2的label' },
  { value: '选项3的value' },
  // string|number
  '选项4'
];

// 选中值
const defaultVal = isCheckbox ? [options[0].value, options[1].value] : options[0].value;
const checkedVal = ref(defaultVal);
</script>
