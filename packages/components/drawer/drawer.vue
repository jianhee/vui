<!-- 抽屉 -->
<script>
import { h, provide } from 'vue';
import BaseDialog from '../dialog/dialog.vue';

export default {
  setup(props, { slots }) {
    provide('vuiDialogType', 'drawer');
    return () => h(BaseDialog, null, slots);
  }
};
</script>
