// 校验地址是否包含某个路径
import { useRoute } from 'vitepress';
export const useRouteValid = path => {
  const route = useRoute();
  return route.path.includes(path);
};
