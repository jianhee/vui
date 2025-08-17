<template>
  <DemoSpace class="demo-checkboxs">
    <component
      :is="OptionComponent"
      v-model:checked="checked1"
      v-bind="$attrs"
      @change="writeLog('change', $event)"
    >
      选项1
    </component>
    <component
      :is="OptionComponent"
      v-model:checked="checked2"
      label="选项2"
      v-bind="$attrs"
      @change="writeLog('change', $event)"
    />
  </DemoSpace>
  <DemoSpace class="demo-checkboxs">
    当前值：
    <code>{{ checked1 }}</code>
    、
    <code>{{ checked2 }}</code>
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
const checked1 = ref(true);
const checked2 = ref(false);
</script>

<style>
.demo-checkboxs label {
  margin-right: 10px;
}
</style>
