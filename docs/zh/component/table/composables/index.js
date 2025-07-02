// 生成数据
export const renderData = (length = 1000, level = 0, _path = '0') => {
  return Array.from({ length }).map((_, index) => {
    const path = `${_path}-${index}`;
    return {
      id: path,
      title: path,
      canDropInto: index % 3 === 0,
      action: index % 3 === 0 ? `可以移入-${index}` : `不能移入-${index}`,
      name: `姓名-${index}`,
      age: `年纪-${index}`,
      phone: `手机号-${index}`,
      address: `地址-${index}`,
      children: level > 0 ? renderData(length, level - 1, path) : null
    };
  });
};

// 列数据
export const colItems = [
  { key: 'id', title: 'ID', width: 80, cellClass: 'demo-table-cell' },
  { key: 'action', title: '操作', width: 120 },
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年纪' },
  { key: 'phone', title: '手机' },
  { key: 'address', title: '地址' }
];
