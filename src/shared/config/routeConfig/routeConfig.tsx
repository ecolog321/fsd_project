import { AboutPage } from "pages/AboutPage";
import { ArticleDetailsPage } from "pages/ArticleDetailsPage";
import { ArticlePage } from "pages/ArticlePage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

export type AppRoutesProsp = RouteProps & {
    authOnly?:boolean;
}

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_DETAILS = "articles_details",
  NOTFOUND = "not_found",
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]:"/profile",
    [AppRoutes.ARTICLES]:"/articles",
    [AppRoutes.ARTICLE_DETAILS]:"/articles/", // +id
    [AppRoutes.NOTFOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProsp> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RouterPath.profile,
        element: <ProfilePage />,
        authOnly:true,
    },
    [AppRoutes.ARTICLES]: {
        path: RouterPath.articles,
        element: <ArticlePage />,
        authOnly:true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RouterPath.articles_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly:true,
    },
    [AppRoutes.NOTFOUND]: {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
    },
};
