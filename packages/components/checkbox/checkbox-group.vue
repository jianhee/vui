<!-- 多选框-选项组 -->
<script>
import BaseGroup from './base/base-group.vue';
import { h, provide } from 'vue';

export default {
  setup(props, { slots }) {
    provide('typeName', 'checkbox');
    return () => h(BaseGroup, null, slots);
  }
};
</script>
