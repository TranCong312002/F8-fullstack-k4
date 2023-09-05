Number.prototype.getCurrency = function (char) {
  var number = this;
  if (typeof char !== "string") {
    return `Sai kiểu tiền tệ`;
  }
  number = number.toLocaleString("vie");
  return `${number + " " + char}`;
};

var price = "20000000";
price = Number(price);
if (Number.isNaN(price)) {
  console.log("bạn nhập sai số tiền");
} else {
  console.log(price.getCurrency("$"));
}
