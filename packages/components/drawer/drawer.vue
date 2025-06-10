<!-- 抽屉 -->
<script>
import { h, provide } from 'vue';
import BaseDiaolg from '../dialog/dialog.vue';

export default {
  setup(props, { slots }) {
    provide('dialogType', 'drawer');
    return () => h(BaseDiaolg, null, slots);
  }
};
</script>
