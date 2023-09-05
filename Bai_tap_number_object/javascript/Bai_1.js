var plus = function (...args) {
  var total = 0;
  for (var i in args) {
    var number = args[i];
    if (
      typeof number !== "number" ||
      Math.abs(number) === Infinity ||
      Number.isNaN(number)
    ) {
      if (number === Infinity || number === NaN) {
        return `
      ${number} không được.
      Mời bạn nhập lại`;
      }
      return `
      ${number} không phải là số.
      Mời bạn nhập lại`;
    } else {
      total += number;
    }
  }
  return total;
};
console.log();

console.log(plus(-Infinity, 11, 22, 33, 44, 55, 66, 88));
