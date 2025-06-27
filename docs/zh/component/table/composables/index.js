// 行数据
export const renderRows = (length = 1000) => {
  return Array.from({ length }).map((_, index) => {
    return {
      id: index,
      type: index % 4 === 0 ? 'folder' : 'others',
      name: `姓名-${index}`,
      age: `年纪-${index}`,
      phone: `手机号-${index}`,
      address: `地址-${index}`,
      btn: `按钮-${index}`
    };
  });
};

// 列数据
export const colItems = [
  { key: 'id', title: 'ID', width: 150, cellClass: 'demo-table-cell' },
  // { key: 'type', title: '类型' },
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年纪' },
  { key: 'phone', title: '手机' },
  { key: 'address', title: '地址' },
  { key: 'btn', title: '按钮' }
];
