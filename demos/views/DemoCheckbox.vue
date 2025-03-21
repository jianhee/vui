<!-- 多选框 -->
<template>
  <DemoCard title="基本用法">
    <DemoRow>
      <MxCheckbox
        v-model:checked="checkboxValue1"
        label="选项1（显示label）"
        @change="showLog('change', $event)"
      />
      <span>是否选中：{{ checkboxValue1 }}</span>
    </DemoRow>
    <DemoRow>
      <MxCheckbox
        v-model:checked="checkboxValue2"
        @change="showLog('change', $event)"
      >
        选项2（显示slot）
      </MxCheckbox>
      <span>是否选中：{{ checkboxValue2 }}</span>
    </DemoRow>
    <DemoRow>
      <MxCheckbox
        v-model:checked="checkboxValue3"
        label="选项3-label"
        @change="showLog('change', $event)"
      >
        选项3（显示slot，优先级高于label）
      </MxCheckbox>
      <span>是否选中：{{ checkboxValue3 }}</span>
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';

const checkboxValue1 = ref(false);
const checkboxValue2 = ref(false);
const checkboxValue3 = ref(false);

function showLog(action, val) {
  console.log(action, val);
}
</script>
