<template>
  <VForm
    ref="formRef"
    class="demo-form"
    :model="formData"
    :rules="formRules"
  >
    <VFormItem
      label="无需校验"
      prop="value1"
    >
      <VInput v-model:value="formData.value1" />
    </VFormItem>
    <VFormItem
      label="校验必填"
      prop="value2"
    >
      <VInput v-model:value="formData.value2" />
    </VFormItem>
    <VFormItem
      label="校验数字"
      prop="value3"
    >
      <VInput v-model:value="formData.value3" />
    </VFormItem>
    <VFormItem
      label="校验必填和手机号"
      prop="value4"
    >
      <VInput v-model:value="formData.value4" />
    </VFormItem>
    <VFormItem
      label="选择器示例"
      prop="value5"
    >
      <VSelect
        v-model:value="formData.value5"
        :options="options"
      />
    </VFormItem>
    <VFormItem
      label="多选框示例"
      prop="value6"
    >
      <VCheckboxGroup
        v-model:value="formData.value6"
        :options="options"
        option-inline
      />
    </VFormItem>
    <VFormItem
      label="单选框示例"
      prop="value7"
    >
      <VRadioGroup
        v-model:value="formData.value7"
        :options="options"
        option-inline
      />
    </VFormItem>
    <VFormItem
      label="开关示例"
      prop="value8"
    >
      <VSwitch v-model:checked="formData.value8" />
    </VFormItem>
    <VFormItem
      label="滑动条示例"
      prop="value9"
    >
      <VSlider v-model:value="formData.value9" />
    </VFormItem>
    <VFormItem>
      <VButton @click="onSubmit">提交</VButton>
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';
import { toast } from 'vui/plugins';

// 选项
const options = ['选项1', '选项2', '选项3'];

// 绑定值
const formData = ref({
  value1: null,
  value2: null,
  value3: null,
  value4: null,
  value5: null,
  value6: [],
  value7: null,
  value8: null,
  value9: null
});

// 规则
const formRules = {
  value2: [{ required: true, message: 'value2 不能为空' }],
  value3: [{ pattern: /^[1-9]\d*$/, message: 'value3 必须为数字' }],
  value4: [
    { required: true, message: 'value4 不能为空' },
    { pattern: /^1[3456789]\d{9}$/, message: 'value4 格式错误' }
  ],
  value5: [{ required: true, message: 'value5 不能为空' }],
  value6: [{ required: true, message: 'value6 不能为空' }],
  value7: [{ required: true, message: 'value7 不能为空' }],
  value8: [{ required: true, message: 'value8 不能为空' }],
  value9: [{ required: true, message: 'value9 不能为空' }]
};

// 提交
const formRef = ref(null);
async function onSubmit() {
  const valid = await formRef.value.validate();
  if (valid) {
    toast.success('校验通过');
  } else {
    toast.error('校验不通过');
  }
}
</script>
