// 将继承的属性分配到对应的组件
import { computed } from 'vue';
export const useComponentsProps = ({ props, emits, components }) => {
  // props
  const componentsProps = computed(() => {
    return components.map(component => {
      const propsObj = {};
      Object.keys(component.props).forEach(key => {
        propsObj[key] = props[key];
      });
      return propsObj;
    });
  });

  // emits
  const componentsEmits = computed(() => {
    return components.map(component => {
      return component.emits?.reduce((emitsObj, emitName) => {
        emitsObj[emitName] = (...args) => emits(emitName, ...args);
        return emitsObj;
      }, {});
    });
  });

  return {
    componentsProps,
    componentsEmits
  };
};
