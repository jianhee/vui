<!-- 单选框-选项组 -->
<script>
import { h, provide } from 'vue';
import BaseGroup from '../checkbox/components/base-group.vue';

export default {
  setup(props, { slots }) {
    provide('typeName', 'radio');
    return () => h(BaseGroup, null, slots);
  }
};
</script>
