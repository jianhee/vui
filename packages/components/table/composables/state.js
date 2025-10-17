// 加载状态/空状态
import { defineComponent, computed, useSlots, h } from 'vue';
import VEmpty from '../../empty/empty.vue';
import VLoading from '../../loading/loading.vue';

// 状态属性
export const stateProps = {
  // 加载状态和属性
  loading: { type: Boolean, default: false },
  loadingProps: VLoading.props,
  // 空状态属性
  emptyProps: VEmpty.props
};

// 使用状态
export const useState = ({ type, props, dataRef }) => {
  const slots = useSlots();

  // 渲染组件：直接使用 h 渲染会在切换页面时报错
  const renderComponent = (component, props) => {
    return defineComponent({
      render() {
        return h(component, props);
      }
    });
  };

  // 渲染加载状态
  const renderLoading = computed(() => {
    if (!props.loading) return null;

    // 优先使用插槽
    if (slots.loading) {
      return h('div', { class: `vui-${type}-loading` }, slots.loading());
    }

    // 其次使用加载组件
    return renderComponent(VLoading, props.loadingProps);
  });

  // 渲染空状态
  const renderEmpty = computed(() => {
    if (props.loading || dataRef.value?.length) return null;

    // 优先使用插槽
    if (slots.empty) {
      return h('div', { class: `vui-${type}-empty` }, slots.empty());
    }

    // 其次使用空状态组件
    return renderComponent(VEmpty, { icon: null, ...props.emptyProps });
  });

  // 渲染状态内容
  const renderState = computed(() => renderLoading.value || renderEmpty.value);

  return {
    renderState
  };
};
