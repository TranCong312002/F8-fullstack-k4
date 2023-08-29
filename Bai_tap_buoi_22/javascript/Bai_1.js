function sum(...args) {
  var total = 0;
  for (var value of args) {
    if (!Number(value)) {
      return `
      Giá trị không hợp lệ
      Dữ liệu sai do ${value} không phải là số`;
    } else {
      total = total + value * 1;
    }
  }
  return total;
}

console.log(sum());
