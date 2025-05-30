// 多选框/单选框
import { computed } from 'vue';

// emits
export const optionEmits = ['change'];
export const groupEmits = ['change'];

// 单个选项的 props
export const optionProps = {
  // 选项数据：选项组有效
  option: { type: Object, default: null },
  // 选项文本
  label: { type: String, default: null },
  // 选项类型：button 按钮
  type: { type: String, default: undefined },
  // 显示模式：默认行内模式
  block: { type: Boolean, default: false },
  inline: { type: Boolean, default: true }
};

// 选项组的 props
export const groupProps = {
  // 选项组
  // 1.对象 [{ label: '文本', value: '值' }]
  // 2.字符串/数字 [1, 2, 3, 4] 会自动格式化为对象格式
  options: { type: Array, required: true },
  // 选项类型：button 按钮
  optionType: { type: String, default: undefined },
  // 显示模式：默认块级模式
  optionBlock: { type: Boolean, default: true },
  optionInline: { type: Boolean, default: false }
};

// 选项组的逻辑
export function useGroup(props) {
  // 格式化后的 options
  const options = computed(() => {
    return props.options.map(option => {
      if (typeof option === 'object') {
        return option;
      } else {
        return { label: option, value: option };
      }
    });
  });

  return { options };
}
