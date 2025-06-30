
import "./styles/index.scss";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./provider/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const Compon = () => {
    const { t, i18n } = useTranslation();
  
    const toogle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <div>
            <button onClick={toogle}>{t("Перевести")}</button>
            {t("Тестовый пример")}
        </div>
    );
};

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <Compon />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
