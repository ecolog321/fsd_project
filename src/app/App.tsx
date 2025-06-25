
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { useTheme } from "./provider/ThemeProvider/lib/useTheme";
import { AppRouter } from "./provider/router";

export const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change Theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"about"}>О стайте</Link>
      <AppRouter/>
    </div>
  );
};

export default App;
