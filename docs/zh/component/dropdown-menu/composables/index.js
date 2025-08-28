// 生成菜单
export const items = Array.from({ length: 5 }).map((_, key) => ({
  key,
  label: `选项${key}`
}));
