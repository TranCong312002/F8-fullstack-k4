function triangle(n) {
  count = 1;
  for (var i = 1; i <= n; i++) {
    range = "";
    for (var j = 1; j <= i; j++) {
      range += count + " ";
      count++;
    }
    console.log(range);
  }
}
triangle(5);
