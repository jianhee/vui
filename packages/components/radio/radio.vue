<!-- 单选框-单个选项 -->
<script>
import { h, provide } from 'vue';
import BaseCheckbox from '../checkbox/checkbox.vue';

export default {
  setup(props, { slots }) {
    provide('checkboxType', 'radio');
    return () => h(BaseCheckbox, null, slots);
  }
};
</script>
