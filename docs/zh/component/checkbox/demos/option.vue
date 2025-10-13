<template>
  <div class="c-demo-checkboxs">
    <VComponentMatchRoute
      v-model:checked="checked1"
      v-bind="$attrs"
      label="选项1的label"
      @change="onChange"
    >
      选项1的插槽
    </VComponentMatchRoute>
    <VComponentMatchRoute
      v-model:checked="checked2"
      label="选项2的label"
      v-bind="$attrs"
      @change="onChange"
    />
  </div>

  <DemoSpace v-if="isBasic">
    当前值：
    <code>{{ checked1 }}</code>
    、
    <code>{{ checked2 }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import { useDemo } from '../composables/index.js';

defineOptions({ inheritAttrs: false });
const { isBasic, onChange } = useDemo();

// 当前值
const checked1 = ref(true);
const checked2 = ref(false);
</script>

<style>
.c-demo-checkboxs > label {
  margin-right: 10px;
}
</style>
