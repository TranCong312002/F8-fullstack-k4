var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var same = arrA.reduce(function (pre, current) {
  if (arrB.includes(current)) {
    pre.push(current);
  }
  return pre;
}, []);

console.log(same);
