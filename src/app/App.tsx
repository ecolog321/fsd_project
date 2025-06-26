import "./styles/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { useTheme } from "./provider/ThemeProvider/lib/useTheme";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Change Theme</button>
      <AppRouter />
    </div>
  );
};

export default App;
