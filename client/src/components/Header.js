import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
/* import { FaUser } from "react-icons/fa"; */

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/images/favicon.png" alt="ProTrack" />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/races">Соревнования</Link>
      </nav>
      <div className="auth">
        <Link to="/auth">Войти</Link>
      </div>
    </header>
  );
};

export default Header;
