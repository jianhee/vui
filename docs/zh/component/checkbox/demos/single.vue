<template>
  <VBtn @click="display = 'inline'">切换 inline </VBtn>
  <VBtn @click="display = 'block'"> block </VBtn>
  <component
    :is="component1"
    v-model:checked="checked1"
    label="选项1"
    :display="display"
    class="vui-mr-10"
    @change="writeLog('change', $event)"
  />
  <component
    :is="component1"
    v-model:checked="checked2"
    label="选项2"
    :display="display"
    @change="writeLog('change', $event)"
  >
    (checked {{ checked2 }})
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
</script>
