var arr = [1, 7, 3, 8, 34, 6, 25, 100, 8];
var add = 30;
if (Number.isInteger(add) === true) {
  if (Array.isArray(arr)) {
    var check = true;
    for (var i in arr) {
      if (arr[i] % 1 !== 0) {
        check = false;
      }
    }
    if (check === true) {
      arr.sort(function (a, b) {
        if (a < b) return -1;
      });
      console.log(arr);
      for (var i = 1; i < arr.length; i++) {
        console.log(add);
        if (arr[i - 1] < add && add < arr[i]) {
          arr.splice(i - 1, 2, arr[i - 1], add, arr[i]);
        }
      }
      console.log(arr);
    } else {
      console.log("Không phải dãy số nguyên. mời bạn nhập lại");
    }
  } else {
    console.log(`Không phải mảng. Mời bạn nhập lại`);
  }
} else {
  console.log(`số cần chèn vào Không phải số nguyên. mời bạn nhập lại `);
}
