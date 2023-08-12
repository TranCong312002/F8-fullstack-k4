var x = "";
var change = function (n) {
  if (n < 0 || n % 1 !== 0) {
    return ":(";
  }

  if (n < 10) {
    return (x += n);
  }
  x += n % 10;
  return change(parseInt(n / 10));
};
console.log(change(4356976));
