import React, { useEffect, useState } from "react";
import { client } from "../config/client";

function ListProduct({ onRender }) {
  const [listProduct, setListProduct] = useState([]);
  const [listCart, setListCart] = useState([]);
  // const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await client.get("/products");
      const { listProduct } = data.data;
      console.log(listProduct);
      setListProduct(listProduct);
    };
    getProduct();
  }, []);
  useEffect(() => {}, [listCart]);
  const handleAddCart = async (e) => {
    e.preventDefault();
    const dataApiKey = JSON.parse(localStorage.getItem("dataApi"));
    client.setApiKey(dataApiKey);
    const item = listProduct.find((item) => {
      return item._id === e.target.id;
    });
    console.log(item);
    let listClone = [...listCart];
    console.log(listClone);
    const check = listClone.some(({ productId }) => {
      if (e.target.id === productId) {
        return true;
      }
      return false;
    });
    console.log(check);
    if (!check) {
      listClone = [
        ...listCart,
        {
          productId: item._id,
          name: item.name,
          totalPrice: item.price,
          quantity: 1,
          resQuantity: item.quantity,
        },
      ];
    } else {
      listClone = [...listClone];
    }

    console.log(listClone);
    localStorage.setItem("listCart", JSON.stringify(listClone));
    setListCart(listClone);
    onRender();
  };
  return (
    <div>
      <div className="products">
        {listProduct.map(({ _id, name, price, image }) => (
          <div className="product" key={_id}>
            <div>
              {" "}
              <img src={image} alt="" />
            </div>
            <h2 className="name-product">{name}</h2>
            <div className="place-buy">
              <p className="cost-product">${price}</p>
              <button className="add-cart" id={_id} onClick={handleAddCart}>
                Add to cart!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProduct;
