import React, { useState } from "react";
import { Login, Register } from "./index";
import "./authPage.css";
export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleAuthPageToggle = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <div className="auth-container">
      {isLogin ? (
        <Login switchAuthHandler={handleAuthPageToggle} />
      ) : (
        <Register switchAuthHandler={handleAuthPageToggle} />
      )}
    </div>
  );
};
