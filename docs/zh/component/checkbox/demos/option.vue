<template>
  <DemoSpace>
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

  <DemoSpace>
    绑定值分别为
    <template
      v-for="option in options"
      :key="option.label"
    >
      <code>{{ option.checked }}</code>
      &nbsp;
    </template>
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
const OptionComponent = isCheckbox ? 'VCheckbox' : 'VRadio';

// 选项
const options = ref([
  { label: '选项1', checked: true },
  { label: '选项2', checked: false },
  { label: '选项3', checked: false }
]);
</script>
