import React, { useEffect, useState } from "react";
import { client } from "../config/client";

function TodoList({ listTodo, getDataList }) {
  useEffect(() => {
    getDataList();
  }, []);
  const handleDelete = async (id) => {
    console.log(id);
    const { response, data } = await client.delete(`/todos/${id}`);
    console.log(response, data);
    if (response.ok) {
      getDataList();
    }
  };
  // const handleChange=(id)=>{
  //   console.log(id);
  // }
  return (
    <div>
      {listTodo.map((data) => {
        // console.log(data);
        return (
          <div className="place-todos" key={data._id}>
            <div className="todo">
              <span className="content">{data.todo}</span>
              <div className="action">
                <button
                  className="nav-action delete"
                  onClick={() => {
                    handleDelete(data._id);
                  }}
                >
                  Xóa
                </button>
                <button className="nav-action change">Sửa</button>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="place-todos">
        <div className="todo">
          <span className="content">
            Nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp,
            dễ sử dụng và tối ưu trải nghiệm người dùng, Nhiệm vụ của lập trình
            viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và tối ưu
            trải nghiệm người dùng
          </span>
          <div className="action">
            <button className="nav-action delete">Xóa</button>
            <button className="nav-action change">Sửa</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default TodoList;
