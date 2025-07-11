<template>
  <DemoSpace class="demo-checkboxs">
    <component
      :is="OptionComponent"
      v-for="option in options"
      :key="option.label"
      v-model:checked="option.checked"
      :label="option.label"
      v-bind="$attrs"
      @change="writeLog('change', $event)"
    >
      <template v-if="option.label === '选项3'">+ 自定义内容</template>
    </component>
  </DemoSpace>

  <DemoSpace class="demo-checkboxs">
    当前值分别为
    <code
      v-for="option in options"
      :key="option.label"
    >
      {{ option.checked }}
    </code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@vp/utils';
import { useRouteValid } from '@vp/composables';

defineOptions({ inheritAttrs: false });

// 区分类型
const isCheckbox = useRouteValid('checkbox');
const OptionComponent = isCheckbox ? 'VCheckbox' : 'VRadio';

// 选项
const options = ref([
  { label: '选项1', checked: true },
  { label: '选项2', checked: true },
  { label: '选项3', checked: false }
]);
</script>

<style>
.demo-checkboxs > label {
  margin-right: 10px;
}
.demo-checkboxs > code {
  margin: 0 2px;
}
</style>
