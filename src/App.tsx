import { Header } from "./components/Header";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";

export const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>Главная</Link>
      <Link to={"about"}>О стайте</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
      </Routes>
      </Suspense>
      <Header />
    </div>
  );
};

export default App;
