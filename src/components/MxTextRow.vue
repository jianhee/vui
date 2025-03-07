<!-- 文字行溢出隐藏 -->
<script>
import { h } from 'vue';

export default {
  props: {
    tag: { type: String, default: 'span' }
  },
  setup(props, { slots }) {
    return () => h(props.tag, { class: 'mx-text-row' }, slots.default && slots.default());
  }
};
</script>

<style lang="scss">
.mx-text-row {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
