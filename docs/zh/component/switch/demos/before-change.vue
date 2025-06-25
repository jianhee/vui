<template>
  <VForm>
    <VFormItem label="允许切换">
      <VSwitch
        v-model:checked="valueRef1"
        :before-change="beforeChange1"
      />
    </VFormItem>
    <VFormItem label="阻止切换">
      <VSwitch
        v-model:checked="valueRef2"
        :before-change="beforeChange2"
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

// 切换前
let timer = null;
const beforeChange1 = async checked => {
  return new Promise(resolve => {
    timer = setTimeout(() => {
      clearTimeout(timer);
      toast.success('切换成功');
      resolve(true);
    }, 1000);
  });
};

const beforeChange2 = async checked => {
  return new Promise(resolve => {
    timer = setTimeout(() => {
      clearTimeout(timer);
      toast.error('切换失败');
      resolve(false);
    }, 1000);
  });
};
</script>
