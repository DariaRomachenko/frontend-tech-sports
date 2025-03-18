import React from "react";
import RaceCard from "./RaceCard";
import { useNavigate } from "react-router-dom";
import "../styles/raceList.css";

const races = [
  {
    id: 1,
    image: "/images/race1.png",
    title: "СУСАНИН 2024",
    location: "ЗЕЛЕНОГОРСК",
    date: "14.09.2024",
  },
  {
    id: 2,
    image: "/images/race1.png",
    title: "WAY OFFROAD 2024",
    location: "КОСТРОМА",
    date: "11.08.2024",
  },
  {
    id: 3,
    image: "/images/race1.png",
    title: "ПОСЛЕДНИЙ ГЕРОЙ",
    location: "С. НИКОЛАЕВКА",
    date: "14.09.2024",
  },
  {
    id: 4,
    image: "/images/race1.png",
    title: "ЖАТАЙСКИЙ HARD CLIMB",
    location: "ЯКУТСК",
    date: "01.09.2024",
  },
];

const RaceList = () => {
  const navigate = useNavigate();

  return (
    <div className="race-list">
      <h2>ЗАПЛАНИРОВАННЫЕ СОРЕВНОВАНИЯ</h2>
      <button className="view-all-btn" onClick={() => navigate("/races")}>
        Смотреть все
      </button>
      <div className="race-slider">
        {races.map((race) => (
          <RaceCard key={race.id} {...race} />
        ))}
      </div>
    </div>
  );
};

export default RaceList;

/* 
import React, { useEffect, useState } from "react";
import RaceCard from "./RaceCard";
import "./raceList.css";

const RaceList = () => {
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Получение данных с API
  useEffect(() => {
    fetch("https://example.com/api/races") // Здесь будет URL к твоему бэкенду
      .then((response) => response.json()) // Преобразуем ответ в формат JSON
      .then((data) => {
        setRaces(data); // Сохраняем данные в стейт
        setLoading(false); // Останавливаем загрузку
      })
      .catch((err) => {
        setError("Ошибка при загрузке данных");
        setLoading(false);
      });
  }, []); // Пустой массив зависимостей, чтобы загрузить данные один раз

  if (loading) {
    return <p>Загрузка...</p>; 
  }

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <div className="race-list">
      <h2>ЗАПЛАНИРОВАННЫЕ ГОНКИ</h2>
      <div className="race-slider">
        {races.map((race) => (
          <RaceCard key={race.id} {...race} />
        ))}
      </div>
    </div>
  );
};

export default RaceList;
 */
