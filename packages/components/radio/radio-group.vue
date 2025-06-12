<!-- 单选框-选项组 -->
<script>
import { h, provide } from 'vue';
import BaseGroup from '../checkbox/checkbox-group.vue';

export default {
  setup(props, { slots }) {
    provide('checkboxType', 'radio');
    return () => h(BaseGroup, null, slots);
  }
};
</script>
