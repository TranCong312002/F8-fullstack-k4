import React, { useEffect, useState } from "react";
import { client } from "../config/client";
function TodoForm({ getDataList }) {
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataApiKey = JSON.parse(localStorage.getItem("dataApi"));
    client.setApiKey(dataApiKey);
    const { response, data } = await client.post("/todos", { todo: content });
    setContent("");
    if (response.ok) {
      getDataList();
    } else {
      console.log("Thêm thất bại");
    }
  };
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <div>
      <form action="" className="form-todos" onSubmit={handleSubmit}>
        <div className="form-search">
          <input
            type="text"
            className="ip-search"
            placeholder="add Todo"
            onChange={handleChange}
            value={content}
          />
        </div>
        <button className="btn-add">Add Todos</button>
        {/* <button className="btn-search">Search todo</button> */}
      </form>
    </div>
  );
}

export default TodoForm;
