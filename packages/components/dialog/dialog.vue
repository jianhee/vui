<!-- 对话框 -->
<script>
import { h, provide } from 'vue';
import BaseModal from './components/base-modal.vue';

export default {
  setup(props, { slots }) {
    provide('typeName', 'dialog');
    return () => h(BaseModal, null, slots);
  }
};
</script>
