import { toast } from 'vui/plugins';

// log
export const writeLog = (...args) => {
  toast.success(...args);
  console.log(...args);
};
