import React, { useState } from "react";
import "../styles/login.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const RegisterForm = ({ setActiveTab }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true); // состояние для отслеживания совпадения паролей

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value && confirmPassword) {
      setPasswordsMatch(e.target.value === confirmPassword);
    } else {
      setPasswordsMatch(true);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value) {
      setPasswordsMatch(password === e.target.value);
    } else {
      setPasswordsMatch(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Добро пожаловать!</h1>
        <p>
          Уже зарегистрированы? Введите свои данные для входа в личный кабинет.
        </p>
        <button onClick={() => setActiveTab("login")}>Войти</button>
      </div>

      <div className="login-right">
        <h2 className="login-title">Создайте аккаунт</h2>
        <form className="login-form">
          <input
            type="text"
            placeholder="ФИО"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Почта"
            className="input"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="+7 (999) 999-99-99"
            className="input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="birthday"
            placeholder="Дата рождения"
            className="input"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Придумайте пароль"
              className={`input`}
              value={password}
              /* onChange={(e) => setPassword(e.target.value)} */
              onChange={handlePasswordChange}
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </div>
          <div className="password-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Повторите пароль"
              className={`input ${!passwordsMatch ? "input-error" : ""}`}
              value={confirmPassword}
              /* onChange={(e) => setConfirmPassword(e.target.value)} */
              onChange={handleConfirmPasswordChange}
            />
            <span
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>

            {!passwordsMatch && (
              <p className="error-message">
                Пароли не совпадают! Повторите попытку.
              </p>
            )}
          </div>

          <button className="login-button">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
