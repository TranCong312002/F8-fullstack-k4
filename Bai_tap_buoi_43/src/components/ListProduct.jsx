import React, { useEffect, useState } from "react";
import { client } from "../config/client";

function ListProduct() {
  const [listProduct, setListProduct] = useState([]);
  const [listCart, setListCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await client.get("/products");
      const { listProduct } = data.data;
      console.log(listProduct);
      setListProduct(listProduct);
    };
    getProduct();
  }, []);
  const handleAddCart = async (e) => {
    e.preventDefault();
    const dataApiKey = JSON.parse(localStorage.getItem("dataApi"));
    client.setApiKey(dataApiKey);
    const item = listProduct.find((item) => {
      return item._id === e.target.id;
    });
    console.log(item);
    setListCart([...listCart, { productId: item._id, quantity: 1 }]);
    console.log(listCart);
    const { response, data } = await client.post("/orders", listCart);
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
