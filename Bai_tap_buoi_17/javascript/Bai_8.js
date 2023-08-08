var sum = 0;
function total(n) {
  var a = 1;
  if (n === 1) {
    return sum + 1;
  }
  sum += 1 / n;
  return total(n - 1);
}
console.log(`${total(1)}`);
document.write(total(1));
