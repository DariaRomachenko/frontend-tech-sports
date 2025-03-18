import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import "../styles/auth.css";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <>
      {activeTab === "login" ? (
        <LoginForm setActiveTab={setActiveTab} />
      ) : (
        <RegisterForm setActiveTab={setActiveTab} />
      )}
    </>
  );
};

export default Auth;
