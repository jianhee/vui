<!-- 多选框-选项组 -->
<script>
import { h, provide } from 'vue';
import BaseGroup from './components/base-group.vue';

export default {
  setup(props, { slots }) {
    provide('typeName', 'checkbox');
    return () => h(BaseGroup, null, slots);
  }
};
</script>
