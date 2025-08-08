<template>
  <VForm
    ref="formRef"
    class="demo-form"
    :model="formData"
    :rules="formRules"
  >
    <VFormItem
      label="无需校验"
      prop="value11"
    >
      <VInput v-model:value="formData.value11" />
    </VFormItem>
    <VFormItem
      label="校验必填"
      prop="value12"
    >
      <VInput v-model:value="formData.value12" />
    </VFormItem>
    <VFormItem
      label="校验数字"
      prop="value13"
    >
      <VInput v-model:value="formData.value13" />
    </VFormItem>
    <VFormItem
      label="校验必填和手机号"
      prop="value14"
    >
      <VInput v-model:value="formData.value14" />
    </VFormItem>
    <VFormItem
      label="校验密码"
      prop="value15"
    >
      <VInput v-model:value="formData.value15" />
    </VFormItem>
    <VFormItem
      label="选择器示例"
      prop="value2"
    >
      <VSelect
        v-model:value="formData.value2"
        :options="options"
      />
    </VFormItem>
    <VFormItem
      label="多选框示例"
      prop="value3"
    >
      <VCheckboxGroup
        v-model:value="formData.value3"
        :options="options"
        option-inline
      />
    </VFormItem>
    <VFormItem
      label="单选框示例"
      prop="value4"
    >
      <VRadioGroup
        v-model:value="formData.value4"
        :options="options"
        option-inline
      />
    </VFormItem>
    <VFormItem
      label="开关示例"
      prop="value5"
    >
      <VSwitch v-model:checked="formData.value5" />
    </VFormItem>
    <VFormItem
      label="滑动条示例"
      prop="value6"
    >
      <VSlider v-model:value="formData.value6" />
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
  value11: null,
  value12: null,
  value13: null,
  value14: null,
  value15: null,
  value2: null,
  value3: [],
  value4: null,
  value5: null,
  value6: null
});

// 规则
const formRules = {
  value12: [{ required: true, message: '不能为空' }],
  value13: [{ pattern: /^[1-9]\d*$/, message: '数字格式错误' }],
  value14: [
    { required: true, message: '不能为空' },
    { pattern: /^1[3456789]\d{9}$/, message: '手机号格式错误' }
  ],
  value15: [{ validator: checkPassword }],
  value2: [{ required: true, message: '不能为空' }],
  value3: [{ required: true, message: '不能为空' }],
  value4: [{ required: true, message: '不能为空' }],
  value5: [{ required: true, message: '不能为空' }],
  value6: [{ required: true, message: '不能为空' }]
};

// 自定义规则
function checkPassword(val) {
  if (val !== '123') {
    return '密码错误';
  } else {
    return true;
  }
}

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
