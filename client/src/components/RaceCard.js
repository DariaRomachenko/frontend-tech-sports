import React from "react";
import "../styles/raceCard.css";
/* import { useSpring, animated } from "react-spring"; */

const RaceCard = ({ image, title, location, date }) => {
  /*   const styles = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  }); */

  return (
    <div className="race-card">
      <div className="race-img">
        <img src={image} alt={title} className="race-image" />
        <button className="register-btn">Зарегистрироваться</button>
      </div>
      <div className="race-info">
        <h3>{title}</h3>
        <p>{location}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default RaceCard;
