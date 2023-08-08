var totalMoney = 0;
var km = 0;
var discount = 0;
function MoneyTaxi(km) {
  if (km > 120) {
    discount = km * 11000 * 0.1;
    totalMoney = km * 11000 - discount;
  }
  if (km > 5 || km <= 120) {
    totalMoney = km * 11000;
  }
  if (km > 1 || km <= 5) {
    totalMoney = km * 13500;
  }
  if (km <= 1) {
    totalMoney = km * 15000;
  }
  return totalMoney;
}
console.log(`${MoneyTaxi(2)} đ`);
