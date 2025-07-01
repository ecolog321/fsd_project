
import "./styles/index.scss";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./provider/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";



export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
