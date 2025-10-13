import { useAttrs } from 'vue';
import { writeLog } from '@vp/utils';

export const useDemo = () => {
  const attrs = useAttrs();
  const isBasic = Object.keys(attrs).length === 0;
  const onChange = val => {
    if (isBasic) {
      writeLog('change', val);
    }
  };

  return {
    isBasic,
    onChange
  };
};
