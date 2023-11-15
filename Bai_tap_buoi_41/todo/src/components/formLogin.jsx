import React, { useState, useEffect } from "react";
import { client } from "../config/client";
function FormLogin({ onGetData }) {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    const query = {
      email: email,
    };
    const querystring = new URLSearchParams(query).toString();
    console.log(querystring);
    const { response, data } = await client.get(`/api-key?${querystring}`);
    // console.log(response, data);
    // console.log(data.data.apiKey);
    if (response.ok) {
      onGetData(true);
      localStorage.setItem("dataApi", JSON.stringify(data.data.apiKey));
    } else {
      alert("Email không tồn tại");
    }
    console.log("Đã submit");
  };

  return (
    <div>
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="title-login">Mời bạn nhập email</div>
        <input
          type="email"
          className="email-login"
          placeholder="input your email"
          onChange={handleChange}
        />
        <button className="btn-login">Nhập</button>
      </form>
      <div className="overlay"></div>
    </div>
  );
}

export default FormLogin;
