// var fibonacci = function (n) {
//   if (n === 1 || n === 2) {
//     console.log(fibonacci(n));
//     return 1;
//   }

//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

var fibonacci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
var listFibonacci = function (number) {
  if (number === 1) {
    return 0;
  }
  if (number > 0) {
    console.log(fibonacci(number - 1));
  }
  return listFibonacci(number - 1);
};
console.log(listFibonacci(5));
