var totalE = 0;
var numberE = 0;

function moneyE(numberE) {
  if (numberE < 0) {
    totalE = 0;
  } else if (numberE <= 50) {
    totalE = numberE * 1.678;
  } else if (numberE <= 100) {
    totalE = numberE * 1.734;
  } else if (numberE <= 200) {
    totalE = numberE * 2.014;
  } else if (numberE <= 300) {
    totalE = numberE * 2.536;
  } else if (numberE <= 400) {
    totalE = numberE * 2.834;
  } else {
    totalE = numberE * 2.927;
  }
  return totalE;
}
console.log(`${moneyE(408)} đ`);
