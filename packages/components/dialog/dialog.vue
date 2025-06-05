<!-- 对话框 -->
<script>
import BaseModal from './base/base-modal.vue';
import { h, provide } from 'vue';

export default {
  setup(props, { slots }) {
    provide('typeName', 'dialog');
    return () => h(BaseModal, null, slots);
  }
};
</script>
