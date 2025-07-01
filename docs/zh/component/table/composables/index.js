// 行数据
export const renderRows = (params = {}) => {
  const { length = 1000 } = params;
  return Array.from({ length }).map((_, index) => {
    return {
      id: index,
      drop: index % 3 === 0 ? '是' : '否',
      canDropInto: index % 3 === 0,
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
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年纪' },
  { key: 'phone', title: '手机' },
  { key: 'address', title: '地址' },
  { key: 'btn', title: '按钮' }
];
