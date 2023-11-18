import React from "react";

function Cart() {
  return (
    <div>
      <div className="cart">
        <table className="product-cart" cellSpacing={0}>
          <thead className="title-cart">
            <tr>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Còn lại</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody className="body-cart">
            <tr>
              <td>Phụ kiện công nghệ Maybelline</td>
              <td>1</td>
              <td>12345</td>
              <td>43221</td>
            </tr>
          </tbody>
        </table>
        <button className="pay-cart">Thanh toán</button>
      </div>
    </div>
  );
}

export default Cart;
