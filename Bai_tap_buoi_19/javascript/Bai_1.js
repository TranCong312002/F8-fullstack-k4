var arr = [1, 7, 3, 8, 34, 6, 25, 100, 8];

if (Array.isArray(arr)) {
  var check = true;
  for (var i in arr) {
    if (arr[i] % 1 !== 0) {
      check = false;
    }
  }
  if (check === true) {
    var max = 0;
    var indexMax = 0;
    var indexMin = 0;
    var min = 0;
    for (var index in arr) {
      if (index == 0) {
        max = arr[0];
        indexMax = index;
        min = arr[0];
        indexMin = index;
      }

      if (arr[index] >= max) {
        max = arr[index];
        indexMax = index;
      }
      if (arr[index] < min) {
        min = arr[index];
        indexMin = index;
      }
    }
    console.log(`Số lớn nhất trong dãy là: ${max}
Chỉ số trong mảng là:${indexMax}`);
    console.log(`Số lớn nhất trong dãy là: ${min}
Chỉ số trong mảng là:${indexMin}`);
  } else {
    console.log("Không phải dãy số nguyên. mời bạn nhập lại");
  }
} else {
  console.log(`Không phải mảng. Mời bạn nhập lại`);
}
