<!-- 多选框-单个选项 -->
<script>
import BaseOption from './base/base-option.vue';
import { h, provide } from 'vue';

export default {
  setup(props, { slots }) {
    provide('typeName', 'checkbox');
    return () => h(BaseOption, null, slots);
  }
};
</script>
