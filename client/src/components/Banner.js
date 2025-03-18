import React from "react";
import "../styles/banner.css";
const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-title">
          <span className="pro">Pro</span>
          <img src="/images/favicon.png" alt="Logo" className="logo" />
        </div>
        <div className="banner-subtitle">
          <div className="slogan">
            <span>БОЛЬШЕ,</span>
            <span>ЧЕМ</span>
            <span>ГОНКИ</span>
          </div>
          <span className="track">Track</span>
        </div>
        <div className="banner-buttons">
          <a href="/join" className="banner-btn">
            Стать участником
          </a>
          <a href="/organizer" className="banner-btn">
            Стать организатором
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
