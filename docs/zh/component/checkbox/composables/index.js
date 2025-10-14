import { useAttrs } from 'vue';
import { writeLog } from '@vp/utils';
import { validateRoutePath } from '@vp/composables';

export const useDemo = () => {
  const attrs = useAttrs();
  const isBasic = Object.keys(attrs).length === 0;
  const isCheckbox = validateRoutePath('checkbox');
  const onChange = val => {
    if (isBasic) {
      writeLog('change', val);
    }
  };

  return {
    isBasic,
    isCheckbox,
    onChange
  };
};
