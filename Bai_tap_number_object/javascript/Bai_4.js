Array.prototype.filter2 = function (callback) {
  if (typeof callback !== "function") {
    return;
  }
  var info = this;
  var newArr = [];
  for (var i = 0; i < info.length; i++) {
    var result = callback(info[i], i);
    if (result === true) {
      newArr[newArr.length] = info[i];
    }
  }
  return newArr;
};

var a = [1, 2, 3, 4, 6, 7, 8, 9];
console.log(
  a.filter(function (value, index) {
    if (value > 3) {
      return true;
    }
  })
);
console.log(
  a.filter2(function (value, index) {
    if (value > 3) {
      return true;
    }
  })
);
