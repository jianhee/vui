<!-- 单选框-选项组 -->
<script>
import { h, provide } from 'vue';
import BaseCheckboxGroup from '../checkbox/checkbox-group.vue';

export default {
  setup(props, { slots }) {
    provide('vuiCheckboxType', 'radio');
    return () => h(BaseCheckboxGroup, null, slots);
  }
};
</script>
