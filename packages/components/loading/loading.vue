<!-- 加载状态 -->
<script>
import { h, provide } from 'vue';
import BaseEmpty from '../empty/empty.vue';

export default {
  setup(props, { slots }) {
    provide('stateType', 'loading');
    return () => h(BaseEmpty, null, slots);
  }
};
</script>
