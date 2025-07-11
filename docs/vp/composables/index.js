// 区分路由
import { useRoute } from 'vitepress';

// 校验是否指定路由
export const useRouteValid = path => {
  const route = useRoute();
  return route.path.includes(path);
};
