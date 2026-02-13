import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import { RouterPath } from "@/shared/const/router";
import MainIcon from "@/shared/assets/icons/main.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";
import ArticleIcon from "@/shared/assets/icons/article.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import { SidebarItemType } from "../types/items";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RouterPath.main,
      text: "Главная",
      Icon: MainIcon,
    },
    {
      path: RouterPath.about,
      text: "О сайте",
      Icon: AboutIcon,
    },
  ];
  if (userData) {
    sidebarItemsList.push(
      {
        path: RouterPath.profile + userData?.id,
        text: "Профиль",
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RouterPath.articles,
        text: "Статьи",
        Icon: ArticleIcon,
        authOnly: true,
      }
    );
  }
  return sidebarItemsList;
});
