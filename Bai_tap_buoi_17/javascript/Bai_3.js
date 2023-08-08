var s = 0;
function value(n) {
  for (var i = 1; i < n + 1; i++) {
    s += i * (i + 1);
  }
  return s;
}
console.log(`${value(4)}`);
