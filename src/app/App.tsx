import "./styles/index.scss";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./provider/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
