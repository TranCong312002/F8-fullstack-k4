function prime(a) {
  if (a <= 1) {
    return false;
  }
  for (var i = 2; i < a; i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(`${prime(37)}`);
