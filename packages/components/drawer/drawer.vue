<!-- 抽屉 -->
<script>
import BaseModal from '../dialog/base/base-modal.vue';
import { h, provide } from 'vue';

export default {
  setup(props, { slots }) {
    provide('typeName', 'drawer');
    return () => h(BaseModal, null, slots);
  }
};
</script>
