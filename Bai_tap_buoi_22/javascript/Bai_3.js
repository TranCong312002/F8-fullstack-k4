Array.prototype.reduce2 = function (callback, initialValue) {
  if (typeof callback !== "function") {
    return;
  }
  if (initialValue === undefined) {
    var pre = (initialValue = this[0]);
    for (var i = 1; i < this.length; i++) {
      var result = callback(pre, this[i], i);
      pre = result;
    }
    return pre;
  } else {
    var pre = initialValue;
    for (var i = 0; i < this.length; i++) {
      var result = callback(pre, this[i], i);
      pre = result;
    }
    return pre;
  }
};
// Tìm phần tử khác nhau giữa 2 mảng
var arr1 = [5, 2, 1, 9, 8];
var arr2 = [2, 1, 8, 3];

//Kết quả [5,9]

var difficult = arr1.reduce(function (pre, current) {
  if (!arr2.includes(current)) {
    pre.push(current);
  }
  return pre;
}, []);
console.log(difficult);
