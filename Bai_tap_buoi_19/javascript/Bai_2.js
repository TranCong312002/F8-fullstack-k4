var arr = [1, 7, 3, 8, 34, 6, 25, 100, 8];
if (Array.isArray(arr)) {
  var check = true;
  var dem = 0;
  var total = 0;
  for (var i in arr) {
    if (arr[i] % 1 !== 0) {
      check = false;
    }
  }
  if (check === true) {
    for (var index in arr) {
      var checkPrime = true;
      if (arr[index] < 2) {
        continue;
      } else {
        for (var i = 2; i < arr[index]; i++) {
          if (arr[index] % i === 0) {
            checkPrime = false;
          }
        }
      }
      if (checkPrime === true) {
        dem++;
        total += arr[index];
      }
    }
    if (dem === 0) {
      console.log("Không có số nguyên tố");
    } else {
      console.log(`đếm= ${dem}`);
      console.log(`tổng= ${total}`);
      var average = total / dem;
      console.log(`Trung bình các số nguyên tố trong mảng là: ${average}`);
    }
  } else {
    console.log("Không phải dãy số nguyên. mời bạn nhập lại");
  }
} else {
  console.log(`Không phải mảng. Mời bạn nhập lại`);
}
