<!-- 根据路由地址匹配组件 -->
<script>
import { h, ref } from 'vue';
import { useRoute } from 'vitepress';
import VCheckbox from 'vui/components/checkbox/checkbox.vue';
import VCheckboxGroup from 'vui/components/checkbox/checkbox-group.vue';
import VRadio from 'vui/components/radio/radio.vue';
import VRadioGroup from 'vui/components/radio/radio-group.vue';
import VDialog from 'vui/components/dialog/dialog.vue';
import VDrawer from 'vui/components/drawer/drawer.vue';
import VEmpty from 'vui/components/empty/empty.vue';
import VLoading from 'vui/components/loading/loading.vue';
import VPopover from 'vui/components/popover/popover.vue';
import VTooltip from 'vui/components/tooltip/tooltip.vue';
import VDropdown from 'vui/components/dropdown/dropdown.vue';
import VTable from 'vui/components/table/table.vue';
import VTree from 'vui/components/tree/tree.vue';

const componentMap = {
  checkbox: VCheckbox,
  checkboxGroup: VCheckboxGroup,
  radio: VRadio,
  radioGroup: VRadioGroup,
  dialog: VDialog,
  drawer: VDrawer,
  empty: VEmpty,
  loading: VLoading,
  popover: VPopover,
  tooltip: VTooltip,
  dropdown: VDropdown,
  table: VTable,
  tree: VTree
};

export default {
  props: {
    routeSuffix: { type: String, default: undefined }
  },
  setup(props, { slots, expose }) {
    // 组件
    const route = useRoute();
    const routeName = route.path.split('/')[2];
    const componentName = `${routeName}${props.routeSuffix || ''}`;
    const componentModule = componentMap[componentName];

    // 方法
    const componentRef = ref(null);
    expose({
      open: arg => componentRef.value?.open?.(arg),
      close: arg => componentRef.value?.close?.(arg),
      update: arg => componentRef.value?.update?.(arg)
    });

    return () => h(componentModule, { ref: componentRef }, slots);
  }
};
</script>
