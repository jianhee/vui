import { toast } from 'vui/plugins';
// log
export function writeLog(...args) {
  toast.success(...args);
  console.log(...args);
}
