import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Admin from "../pages/Admin";
import Profile from "../pages/Profile";
import Auth from "../pages/Auth";
import Races from "../pages/Races";
/* для прав доступа буду юзать protected routes */

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Создаем вложенность, чтобы каждый дочерний компонент юзал Layout, в него входит header и footer (подумать нужно ли это в авторизации)*/}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="profile" element={<Profile />} />
          <Route path="races" element={<Races />} />
          {/* Компонент для просмотра конкретных соревнований
        Чтобы получить доступ к динамическому значению в пользовательском компоненте, используется хук useParams
        <Route path="/competitions/:id" element={<Сompetitions />} /> */}

          {/* Маршрут соответствующий чему угодно, можно использовать для страницы 404*/}
          {/* <Route path="*" element={<p>There's nothing here: 404! </p>} /> */}
        </Route>

        {/* защищённые маршруты */}
        {/* <Route element={<PrivateRoute />}>
            <Route path='/admin' element={<Admin />} />
      </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
