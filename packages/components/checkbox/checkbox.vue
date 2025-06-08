<!-- 多选框-单个选项 -->
<script>
import { h, provide } from 'vue';
import BaseOption from './components/base-option.vue';

export default {
  setup(props, { slots }) {
    provide('typeName', 'checkbox');
    return () => h(BaseOption, null, slots);
  }
};
</script>
