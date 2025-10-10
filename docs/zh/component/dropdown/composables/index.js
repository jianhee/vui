// 生成菜单项
export const renderItems = (count = 5) =>
  Array.from({ length: count }).map((_, key) => ({
    key,
    label: `选项${key}`
  }));
