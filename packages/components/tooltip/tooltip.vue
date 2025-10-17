<!-- 文字提示 -->
<script>
import { h, ref } from 'vue';
import VPopover from '../popover/popover.vue';

export default {
  setup(props, { slots, expose }) {
    // 方法
    const componentRef = ref(null);
    expose({
      open: arg => componentRef.value?.open?.(arg),
      close: arg => componentRef.value?.close?.(arg),
      update: arg => componentRef.value?.update?.(arg)
    });

    // 渲染
    return () =>
      h(
        VPopover,
        {
          ref: componentRef,
          class: 'vui-tooltip'
        },
        slots
      );
  }
};
</script>
