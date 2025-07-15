// 筛选原生属性
import { computed, useAttrs } from 'vue';

// 所有的原生属性
const booleanProps = ['autofocus', 'checked', 'disabled', 'multiple', 'readonly', 'required'];
// const stringProps = ['accept', 'alt', 'autocomplete', 'capture', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'height', 'list', 'max', 'maxlength', 'min', 'minlength', 'name', 'pattern', 'placeholder', 'size', 'src', 'step', 'type', 'value', 'width'];

// 使用
export const useNativeProps = (includes = []) => {
  const filteredProps = computed(() => {
    const native = {};
    const root = {};

    // 未声明的属性
    const attrs = useAttrs();
    for (const key in attrs) {
      const value = attrs[key];

      // 是否是原生属性
      const isNative = includes.includes(key);
      if (isNative) {
        // 是否是布尔型属性
        const isBoolean = booleanProps.includes(key);
        native[key] = isBoolean ? value !== false : value;
      } else {
        root[key] = value;
      }
    }

    // 添加类名
    root.class = [attrs.class, { 'is-disabled': native.disabled }];

    return { native, root };
  });

  return {
    rootProps: computed(() => filteredProps.value.root),
    nativeProps: computed(() => filteredProps.value.native)
  };
};
