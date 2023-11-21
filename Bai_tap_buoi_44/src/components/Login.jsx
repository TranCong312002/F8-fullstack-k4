import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()}>ĐĂNG NHẬP || ĐĂNG KÍ</button>
  );
};

export default LoginButton;
