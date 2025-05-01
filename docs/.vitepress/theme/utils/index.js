import { toast } from 'vui/plugins';

// log
export function writeLog(name, ...args) {
  console.log(name, ...args);
  toast.success(`do ${name}`);
}
