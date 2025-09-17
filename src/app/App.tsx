
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";




export const App = () => {
    
    const { theme } = useTheme();
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(userActions.initAuthData())
    }, [dispatch])
   

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
