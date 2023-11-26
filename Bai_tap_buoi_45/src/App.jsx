import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./components/Content";
import Histories from "./components/histories";
import RandomNumberGenerator from "./components/Random";

function App() {
  const notify = () => toast.info("Chào mừng bạn đến với trò chơi đoán số");
  useEffect(() => {
    notify();
  }, []);
  return (
    <div>
      <div className="main">
        <Content />
        <Histories />
        <RandomNumberGenerator />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
