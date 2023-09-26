var customers = [
  {
    id: 1,
    nameItem: "Sản phẩm 1",
    price: "1000",
  },
  {
    id: 2,
    nameItem: "Sản phẩm 2",
    price: "2000",
  },
  {
    id: 3,
    nameItem: "Sản phẩm 3",
    price: "3000",
  },
  {
    id: 4,
    nameItem: "Sản phẩm 4",
    price: "4000",
  },
];
var btn = document.querySelectorAll(".btn");
var cart = document.querySelector(".cart");
var root = document.querySelector("#root");
var para = document.querySelector(".para");
var total = document.querySelector(".total");
var updateCart = document.querySelector(".update-cart");

var listItemCart = document.querySelector(".list-item-cart");
var listItemInCart = document.querySelector(".list-item-in-cart");
var totalPrice = 0;
var count = 0;
var stt = 1;
var tr = [];
var quantityItem = [0, 0, 0, 0];
var prices = [0, 0, 0, 0];
for (let i = 0; i < btn.length; i++) {
  var getID = [];
  btn[i].addEventListener("click", function (e) {
    var inputItem = document.querySelector(`#item-${i + 1}`);
    quantityItem[i] += +inputItem.value;
    prices[i] = customers[i]["price"] * quantityItem[i];
    for (var k = 0; k < prices.length; k++) {
      totalPrice += prices[k];
      count += +quantityItem[k];
    }
    cart.classList.add("focus");
    para.classList.add("hidden");
    if (getID.includes(customers[i]["id"])) {
      console.log(quantityItem[i]);

      tr[i] = `
      <tr>
        <td>${i + 1}</td>
        <td>${customers[i]["nameItem"]}</td>
        <td>${customers[i]["price"]}</td>
        <td>
          <input type="number" class="quantity" value='${quantityItem[i]}' />
        </td>
        <td>${prices[i]}</td>
        <td><button class="delete-btn">Xóa</button></td>
      </tr>`;
    } else {
      console.log(quantityItem[i]);

      tr[i] = `
      <tr>
        <td>${i + 1}</td>
        <td>${customers[i]["nameItem"]}</td>
        <td>${customers[i]["price"]}</td>
        <td>
          <input type="number" class="quantity" value='${quantityItem[i]}' />
        </td>
        <td>${prices[i]}</td>
        <td><button class="delete-btn">Xóa</button></td>
      </tr>`;

      getID.push(customers[i]["id"]);
    }
    listItemInCart.innerHTML = tr.join(" ");

    // console.log(tr);
    total.innerHTML = `<tr>
    <td colspan="3">Tổng</td>
    <td>${count}</td>
    <td colspan="2">${totalPrice}</td>
  </tr>`;
    inputItem.value = 1;
    totalPrice = 0;
    count = 0;
  });
}
updateCart.addEventListener("click", function () {
  for (let i = 0; i < prices.length; i++) {
    console.log(quantityItem[i]);
  }
  listItemInCart.innerHTML = tr.join(" ");
});
