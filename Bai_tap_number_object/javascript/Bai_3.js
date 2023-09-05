var a = [1, 2, 3, 4];
Array.prototype.push2 = function (...value) {
  var result = this;
  console.log(result);
  for (var i = 0; i < value.length; i++) {
    result[result.length] = value[i];
  }

  return result;
};
console.log(a.push2("a"));
