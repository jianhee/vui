import { toast } from '@mxui/plugins/toast';
// log
export function writeLog(name, ...args) {
  console.log(name, ...args);
  toast.success(`do ${name}`);
}
