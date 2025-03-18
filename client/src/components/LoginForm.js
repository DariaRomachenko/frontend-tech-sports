import React, { useState } from "react";
import "../styles/login.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginForm = ({ setActiveTab }) => {
  /*   const [activeTab, setActiveTab] = useState("login");  */
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>С возвращением!</h1>
        <p>
          Еще нет аккаунта? Создайте его, чтобы начать пользоваться всеми
          возможностями.
        </p>
        <button onClick={() => setActiveTab("register")}>
          Зарегистрироваться
        </button>
      </div>

      <div className="login-right">
        <h2 className="login-title">Войдите в аккаунт</h2>

        <form className="login-form">
          {/*TODO: валидация номера */}
          <input
            type="tel"
            placeholder="+7 (999) 999-99-99"
            className="input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/*TODO: валидация пароля */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </div>

          <a href="#" className="forgot-password">
            Забыли пароль?
          </a>

          <button className="login-button">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
