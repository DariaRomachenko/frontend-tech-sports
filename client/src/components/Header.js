import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src="/images/favicon.png" alt="ProTrack" />
        </NavLink>
      </div>
      <nav className="nav">
        <NavLink to="/races" activeClassName="active">Соревнования</NavLink>
      </nav>
      <div className="auth">
        <NavLink to="/auth" activeClassName="active">Войти</NavLink>
      </div>
    </header>
  );
};

export default Header;
