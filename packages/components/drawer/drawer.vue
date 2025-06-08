<!-- 抽屉 -->
<script>
import { h, provide } from 'vue';
import BaseModal from '../dialog/components/base-modal.vue';

export default {
  setup(props, { slots }) {
    provide('typeName', 'drawer');
    return () => h(BaseModal, null, slots);
  }
};
</script>
