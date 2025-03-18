import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        {/* Компонент Outlet — это, по сути, компонент-заполнитель, который будет отображать любое содержимое нашей текущей страницы. */}
        <Outlet /> {/* Здесь будут рендериться страницы */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
