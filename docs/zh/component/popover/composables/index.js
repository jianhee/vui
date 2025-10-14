import { validateRoutePath } from '@vp/composables';

export const useDemo = () => {
  const isDropdown = validateRoutePath('dropdown');
  const popoverProps = {
    content: '弹框内容弹框内容弹框内容弹框内容弹框内容弹框内容弹框内容弹框内容'
  };
  const dropdownProps = {
    items: Array.from({ length: 5 }).map((_, key) => ({
      key,
      label: `选项${key}`
    }))
  };
  const props = isDropdown ? dropdownProps : popoverProps;

  return {
    props
  };
};
