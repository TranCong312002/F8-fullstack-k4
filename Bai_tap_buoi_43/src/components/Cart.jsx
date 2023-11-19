import React, { useEffect, useState } from "react";

function Cart({ render }) {
  const data = JSON.parse(localStorage.getItem("listCart"));
  const [value, setValue] = useState(data);
  useEffect(() => {
    setValue(data);
  }, [render]);
  return value ? (
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
            {value.map(
              ({ name, totalPrice, productId, quantity, resQuantity }) => {
                return (
                  <tr key={productId}>
                    <td>{name}</td>
                    <td>{quantity}</td>
                    <td>{resQuantity}</td>
                    <td>{totalPrice}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
        <button className="pay-cart">Thanh toán</button>
      </div>
    </div>
  ) : (
    <div>Chưa có hàng</div>
  );
}

export default Cart;
