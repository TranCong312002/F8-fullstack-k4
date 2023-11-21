import React from "react";
import LoginButton from "./Login";

function FormLogin() {
  return (
    <div>
      <div className="container-login">
        <div className="form-login">
          <div className="content-title">
            Cảm ơn bạn đã sử dụng dịch vụ của F8
          </div>
          <div className="content">
            Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi
            tại đây!
          </div>
          <div className="place-login">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
