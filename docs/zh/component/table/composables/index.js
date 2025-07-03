// 生成数据
export const renderData = (length = 1000, level = 0, _path = '0') => {
  return Array.from({ length }).map((_, index) => {
    const path = `${_path}-${index}`;
    const type = index % 3 === 0 ? 'folder' : 'note';
    return {
      id: path,
      title: path,
      type,
      desc: type === 'folder' ? `目录-${path}` : `文件-${path}`,
      name: `姓名-${path}`,
      age: `年纪-${path}`,
      phone: `手机号-${path}`,
      address: `地址-${path}`,
      children: type === 'folder' && level > 0 ? renderData(length, level - 1, path) : null
    };
  });
};

// 列数据
export const colItems = [
  { key: 'id', title: 'ID', width: 80, cellClass: 'demo-table-cell' },
  { key: 'desc', title: '说明', width: 120 },
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年纪' },
  { key: 'phone', title: '手机' },
  { key: 'address', title: '地址' }
];
