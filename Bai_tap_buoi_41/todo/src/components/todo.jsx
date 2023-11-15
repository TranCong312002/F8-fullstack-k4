import React, { Component, useEffect, useState } from "react";
import { client } from "../config/client";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import FormLogin from "./formLogin";
function Todo() {
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [listTodo, setListTodo] = useState([]);
  const getDataList = async () => {
    const dataApiKey = JSON.parse(localStorage.getItem("dataApi"));
    client.setApiKey(dataApiKey);
    const { response, data } = await client.get("/todos");
    if (response.ok) {
      setListTodo(data.data.listTodo);
    }
  };
  useEffect(() => {
    const getDataApi = localStorage.getItem("dataApi");
    if (getDataApi) {
      setIsLogin(true);
      getDataList();
    }
  }, []);
  const handleGetData = (info) => {
    setIsLogin(info);
  };

  return (
    <div>
      <div className="container">
        <h1 className="title">todos App</h1>
        {isLogin ? (
          <>
            <TodoForm getDataList={getDataList} />
            <TodoList listTodo={listTodo} getDataList={getDataList} />
          </>
        ) : (
          <FormLogin onGetData={handleGetData} />
        )}
      </div>
    </div>
  );
}
export default Todo;
