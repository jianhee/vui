<!-- 抽屉 -->
<script>
import { h, provide } from 'vue';
import BaseDialog from '../dialog/dialog.vue';

export default {
  setup(props, { slots }) {
    provide('dialogType', 'drawer');
    return () => h(BaseDialog, null, slots);
  }
};
</script>
