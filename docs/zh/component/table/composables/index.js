// 生成数据
export const renderItems = (params = {}) => {
  const { length = 1000, level = 0, path = '0' } = params;
  return Array.from({ length }).map((_, index) => {
    const _path = `${path}-${index}`;
    const type = index % 2 === 0 ? 'folder' : 'note';
    return {
      id: parseInt(Math.random() * 100000),
      type,
      title: type === 'folder' ? `目录-${_path}` : `文件-${_path}`,
      name: `姓名-${_path}`,
      age: `年纪-${_path}`,
      phone: `手机号-${_path}`,
      address: `地址-${_path}`,
      children: type === 'folder' && level > 0 ? renderItems({ length, level: level - 1, path: _path }) : null
    };
  });
};

// 列数据
export const renderCols = (params = {}) => {
  const { sortable } = params;
  return [
    { key: 'id', title: 'ID', width: 80, cellClass: 'demo-table-cell', sortable },
    { key: 'title', title: '标题', width: 120, sortable },
    { key: 'name', title: '姓名', minWidth: 120, sortable },
    { key: 'age', title: '年纪' },
    { key: 'phone', title: '手机' },
    { key: 'address', title: '地址' }
  ];
};

// 图标
export const renderIcon = node => {
  return node.data.type === 'note' ? 'note' : node.isExpanded ? 'folder-open' : 'folder';
};
