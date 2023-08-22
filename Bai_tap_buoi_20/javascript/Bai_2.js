var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]], [13, 14]];
// var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);

var newArr = function (arr) {
  return arr.reduce(function (pre, current) {
    if (Array.isArray(current)) {
      return pre.concat(newArr(current));
    }
    pre.push(current);
    return pre;
  }, []);
};
console.log(newArr(arr));
