// 表单校验
import { provide, inject, ref, computed, watch } from 'vue';

// 表单 props
export const formValidateProps = {
  // 表单的数据对象
  model: { type: Object, default: null },
  // 表单的校验规则
  rules: { type: Object, default: null }
};

// 表单项 props
export const formItemValidateProps = {
  // 表单项的字段名
  prop: { type: String, default: null }
};

// 校验表单
export const useFormValidate = ({ props }) => {
  // 校验结果
  const validateResults = ref({
    // a: { isError: false, errorMsg: '' },
    // b: { isError: true, errorMsg: '必填' }
  });

  // 手动校验：通过返回 true，不通过返回 false
  async function validate() {
    // 是否需要校验
    const formRulesMap = props.rules || {};
    const formRulesArr = Object.keys(formRulesMap);
    if (!formRulesArr.length) return true;

    // 校验所有值
    const formModel = props.model || {};
    formRulesArr.forEach(key => {
      const itemValue = formModel[key];
      const itemRules = formRulesMap[key];
      validateResults.value[key] = validateValue(itemValue, itemRules);
    });

    // 是否有错误
    const hasError = formRulesArr.some(key => validateResults.value[key].isError);
    return !hasError;
  }

  provide('VFormValidateRes', validateResults);
  return { validate };
};

// 校验表单项
export const useFormItemValidate = ({ formRoot, formItem }) => {
  const itemName = computed(() => formItem.props.prop);
  const itemValue = computed(() => formRoot.props.model?.[itemName.value]);
  const itemRules = computed(() => formRoot.props.rules?.[itemName.value]);
  const isRequired = computed(() => itemRules.value?.some(item => item.required === true));

  // 校验结果
  const validateResults = inject('VFormValidateRes', {});
  const itemResult = computed(() => validateResults.value[itemName.value]);
  const errorMsg = computed(() => itemResult.value?.errorMsg);

  // 校验类名
  const validateClasses = computed(() => ({
    'is-required': isRequired.value,
    'is-error': itemResult.value?.isError
  }));

  // 输入值时重新校验
  watch(
    itemValue,
    newVal => {
      if (!itemRules.value) return;
      validateResults.value[itemName.value] = validateValue(newVal, itemRules.value);
    },
    { deep: true }
  );

  return {
    errorMsg,
    validateClasses
  };
};

// 校验方法：通过返回 true，不通过返回 false
const validateMap = {
  // 必填
  required: (value, required) => {
    // 无需校验
    if (required !== true) return true;
    // 区分类型
    const dataType = typeof value;
    if (dataType === 'undefined' || value === null) {
      return false;
    } else if (dataType === 'string') {
      return !!value.trim();
    } else if (Array.isArray(value)) {
      return !!value.length;
    } else {
      return true;
    }
  },
  // 正则
  pattern: (value, pattern) => {
    return pattern.test(value);
  }
};

// 校验表单项的值
function validateValue(value, rules) {
  const errorRule = rules.find(item => {
    const hasError = Object.keys(item).some(key => {
      let isSuccess = true;
      if (validateMap[key]) {
        isSuccess = validateMap[key](value, item[key]);
      }
      return !isSuccess;
    });

    return hasError;
  });

  return {
    isError: !!errorRule,
    errorMsg: errorRule?.message
  };
}
