import React from "react";
import FormLogin from "./components/FormLogin";
import FormMail from "./components/FormMail";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated);
  console.log(isLoading);
  return isAuthenticated ? (
    <FormMail />
  ) : (
    <>
      (<FormLogin />)
    </>
  );
}

export default App;
