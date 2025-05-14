<!-- 多选框/单选框 -->
<template>
  <VBtn
    type="link"
    @click="direction = 'vertical'"
  >
    vertical
  </VBtn>

  <VBtn
    type="link"
    @click="direction = 'horizontal'"
  >
    horizontal
  </VBtn>
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
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { writeLog } from '@utils';

// 区分页面
const route = useRoute();
const isRadio = computed(() => route.path === '/radio');

// 单独使用
const component1 = computed(() => (isRadio.value ? 'VRadio' : 'VCheckbox'));
const display = ref('inline');
const checked1 = ref(true);
const checked2 = ref(false);

// 分组使用
const component2 = computed(() => (isRadio.value ? 'VRadioGroup' : 'VCheckboxGroup'));
const direction = ref('vertical');
const defaultVal = computed(() => (isRadio.value ? 1 : [1]));
const value1 = ref(defaultVal.value);
const valueItems = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' }
];
</script>
