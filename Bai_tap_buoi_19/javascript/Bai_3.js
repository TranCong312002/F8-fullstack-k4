var arr = [7, 6, 7, 8, 7, 6];
console.log(` mảng ban đầu là: ${arr}`);
if (Array.isArray(arr)) {
  var check = true;
  for (var i in arr) {
    if (arr[i] % 1 !== 0) {
      check = false;
    }
  }
  if (check === true) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          var newArr = [];
          for (var index in arr) {
            if (+index === +j) {
              continue;
            } else {
              newArr[newArr.length] = arr[index];
            }
          }
          j--;
          arr = newArr;
        }
      }
    }
    console.log(` mảng được lọc là: ${arr}`);
  } else {
    console.log("Không phải dãy số nguyên. mời bạn nhập lại");
  }
} else {
  console.log(`Không phải mảng. Mời bạn nhập lại`);
}
