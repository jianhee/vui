// 表单校验
import { provide, inject, ref, computed, watch } from 'vue';

// 表单 props
export const formValidProps = {
  // 表单的数据对象
  model: { type: Object, default: undefined },
  // 表单的校验规则
  // - `trigger`    校验触发时机 `input|submit'
  // - `message`    校验不通过时的提示信息
  // - `required`   是否必填，必填项会在标签前面添加 `*` 号
  // - `pattern`    是否符合正则
  // - `validator`  自定义校验规则 <br> 参数为当前值，返回 `true` 表示校验通过，返回其它值表示错误信息
  rules: { type: Object, default: undefined }
};

// 表单项 props
export const formItemValidProps = {
  // 表单项的字段名
  prop: { type: String, default: undefined }
};

// 校验表单项的值
async function validateValue({ value, rules, trigger }) {
  let isValid = true;
  let message = '';
  for (const rule of rules) {
    if (rule.trigger === 'submit' && trigger !== 'submit') continue;

    // 必填
    if (rule.required) {
      const dataType = typeof value;
      if (dataType === 'undefined' || value === null) {
        // 空值
        isValid = false;
      } else if (dataType === 'string') {
        // 字符串
        isValid = !!value.trim();
      } else if (Array.isArray(value)) {
        // 数组
        isValid = !!value.length;
      } else {
        // 其它：数字、布尔值
        isValid = true;
      }

      message = rule.message;
      if (!isValid) break;
    }

    // 正则
    if (rule.pattern) {
      isValid = rule.pattern.test(value);
      message = rule.message;
      if (!isValid) break;
    }

    // 自定义规则
    if (rule.validator) {
      const res = await rule.validator(value);
      isValid = res === true;
      message = res || rule.message;
      if (!isValid) break;
    }
  }

  return {
    valid: isValid,
    message: isValid ? null : message
  };
}

// 校验表单
export const useFormValid = ({ props }) => {
  // 校验结果
  const formValidResults = ref({
    // a: { valid: false, message: '必填' },
    // b: { valid: true, message: '' }
  });

  // 手动校验
  async function validate() {
    // 是否需要校验
    const formRulesMap = props.rules || {};
    const formRulesKeys = Object.keys(formRulesMap);
    if (!formRulesKeys.length) return true;

    // 校验所有值
    const formModel = props.model || {};
    for (const key of formRulesKeys) {
      const itemValue = formModel[key];
      const itemRules = formRulesMap[key];
      formValidResults.value[key] = await validateValue({
        value: itemValue,
        rules: itemRules,
        trigger: 'submit'
      });
    }

    // 校验结果
    return {
      valid: formRulesKeys.every(key => formValidResults.value[key].valid)
    };
  }

  provide('vuiFormValidateRes', formValidResults);
  return { validate };
};

// 校验表单项
export const useFormItemValid = formItem => {
  // 继承
  const formRoot = inject('vuiFormRoot', {});

  // 需要的属性
  const itemName = computed(() => formItem.props.prop);
  const itemValue = computed(() => formRoot.props.model?.[itemName.value]);
  const itemRules = computed(() => formRoot.props.rules?.[itemName.value]);
  const isRequired = computed(() => itemRules.value?.some(item => item.required));

  // 校验结果
  const formValidResults = inject('vuiFormValidateRes', {});
  const itemValidResult = computed(() => formValidResults.value[itemName.value]);
  const itemValidMessage = computed(() => itemValidResult.value?.message);

  // 校验类名
  const validClasses = computed(() => ({
    'is-required': isRequired.value,
    'is-error': itemValidResult.value ? !itemValidResult.value.valid : false
  }));

  // 输入值时重新校验
  watch(
    itemValue,
    async newVal => {
      if (!itemRules.value) return;
      formValidResults.value[itemName.value] = await validateValue({
        value: newVal,
        rules: itemRules.value,
        trigger: 'input'
      });
    },
    { deep: true }
  );

  return {
    errorMessage: itemValidMessage,
    validClasses
  };
};
