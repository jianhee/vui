<template>
  <VForm>
    <VFormItem label="成功示例">
      <VSwitch
        v-model:checked="valueRef1"
        :before-change="() => beforeChange(true)"
      />
    </VFormItem>
    <VFormItem label="失败示例">
      <VSwitch
        v-model:checked="valueRef2"
        :before-change="() => beforeChange(false)"
      />
      <VSwitch
        v-model:checked="valueRef3"
        class="vui-ml-10"
        :before-change="() => beforeChange(false)"
      />
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';
import { toast } from 'vui/plugins';

// 开关值
const valueRef1 = ref(false);
const valueRef2 = ref(false);
const valueRef3 = ref(true);

// 切换前
let timer = null;
const beforeChange = state => {
  return new Promise(resolve => {
    timer = setTimeout(() => {
      clearTimeout(timer);
      if (state) {
        toast.success('操作成功');
      } else {
        toast.error('操作失败');
      }
      resolve(state);
    }, 2000);
  });
};
</script>
