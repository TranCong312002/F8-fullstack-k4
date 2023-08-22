var arr = [
  ["a", 1, true],
  ["b", 2, false, "c", 4, 8, false],
  ["c", 100, false],
  [null, undefined, function () {}],
];
if (Array.isArray(arr)) {
  var newArr = function (arr) {
    return arr.reduce(function (pre, current) {
      if (Array.isArray(current)) {
        return pre.concat(newArr(current));
      }
      pre.push(current);
      return pre;
    }, []);
  };
  var arr2 = newArr(arr);
  var arrSting = [];
  var arrNumbers = [];
  var arrBoolean = [];
  for (var index in arr2) {
    if (typeof arr2[index] == "number") {
      arrNumbers.push(arr2[index]);
    }
    if (typeof arr2[index] == "string") {
      arrSting.push(arr2[index]);
    }
    if (typeof arr2[index] == "boolean") {
      arrBoolean.push(arr2[index]);
    }
  }
  var finalArr = [];
  finalArr.push(arrSting, arrNumbers, arrBoolean);
} else {
  console.log("Không phải mảng");
}
console.log(finalArr);
