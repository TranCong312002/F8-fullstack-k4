var arr = [5, 1, 9, 8, 10];
console.log(`Dãy ban đầu: ${arr}`);
var add = 4;
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
      for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] < add && add < arr[i]) {
          arr.splice(i - 1, 2, arr[i - 1], add, arr[i]);
        }
      }
      console.log(`Dãy sau khi add: ${arr}`);
    } else {
      console.log("Không phải dãy số nguyên. mời bạn nhập lại");
    }
  } else {
    console.log(`Không phải mảng. Mời bạn nhập lại`);
  }
} else {
  console.log(`số cần chèn vào Không phải số nguyên. mời bạn nhập lại `);
}
