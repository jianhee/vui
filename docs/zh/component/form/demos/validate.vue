<template>
  <VForm
    ref="formRef"
    class="demo-form"
    :model="formData"
    :rules="formRules"
  >
    <VFormItem
      label="无需校验"
      prop="strValue"
    >
      <VInput v-model:value="formData.strValue" />
    </VFormItem>
    <VFormItem
      label="字符串必填"
      prop="requiredStr"
    >
      <VInput v-model:value="formData.requiredStr" />
    </VFormItem>
    <VFormItem
      label="数字必填"
      prop="requiredNum"
    >
      <VSelect
        v-model:value="formData.requiredNum"
        :options="options"
      />
    </VFormItem>
    <VFormItem
      label="布尔值必填"
      prop="requiredBoolean"
    >
      <VSwitch v-model:checked="formData.requiredBoolean" />
    </VFormItem>
    <VFormItem
      label="数组必填"
      prop="requiredArray"
    >
      <VCheckboxGroup
        v-model:value="formData.requiredArray"
        :options="options"
        option-inline
      />
    </VFormItem>
    <VFormItem
      label="正则"
      prop="patternStr"
    >
      <VInput v-model:value="formData.patternStr" />
    </VFormItem>
    <VFormItem
      label="自定义规则"
      prop="validatorStr"
    >
      <VInput v-model:value="formData.validatorStr" />
    </VFormItem>
    <VFormItem
      label="多个规则"
      prop="muiltStr"
    >
      <VInput v-model:value="formData.muiltStr" />
    </VFormItem>
    <VFormItem>
      <VButton
        type="primary"
        @click="onSubmit"
      >
        提交
      </VButton>
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';
import { toast } from 'vui/plugins';

// 选项
const options = [
  { label: '选项0', value: 0 },
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 }
];

// 绑定值
const formData = ref({
  strValue: null,
  // 必填
  requiredStr: null,
  requiredNum: null,
  requiredBoolean: null,
  requiredArray: [],
  // 正则
  patternStr: null,
  // 自定义
  validatorStr: null,
  // 多个
  muiltStr: null
});

// 规则
const formRules = {
  // 必填
  requiredStr: [{ required: true, message: '字符串不能为空' }],
  requiredNum: [{ required: true, message: '数字不能为空' }],
  requiredBoolean: [{ required: true, message: '布尔值不能为空' }],
  requiredArray: [{ required: true, message: '数组不能为空' }],
  // 正则
  patternStr: [{ pattern: /^[1-9]\d*$/, message: '数字格式错误' }],
  // 自定义
  validatorStr: [{ validator: checkPassword }],
  // 多个
  muiltStr: [{ required: true, message: '不能为空' }, { pattern: /^[1-9]\d*$/, message: '数字格式错误' }, { validator: checkPassword }]
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
