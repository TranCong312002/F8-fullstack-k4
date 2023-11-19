import React, { useState, useEffect } from "react";
import ListProduct from "./ListProduct";
import Cart from "./Cart";
import FormLogin from "./formLogin";
function Shop() {
  const [isLogin, setIsLogin] = useState(false);
  const handleGetData = (state) => {
    setIsLogin(state);
  };
  useEffect(() => {
    const getDataApi = localStorage.getItem("dataApi");
    if (getDataApi) {
      setIsLogin(true);
    }
  }, []);
  const [render, setRender] = useState(false);
  const handlerRender = () => {
    setRender(!render);
  };
  return (
    <div>
      {isLogin ? (
        <>
          <ListProduct onRender={handlerRender} />
          <Cart render={render} />
        </>
      ) : (
        <FormLogin onGetData={handleGetData} />
      )}
    </div>
  );
}

export default Shop;
