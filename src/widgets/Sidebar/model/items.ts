import { SVGProps, VFC } from "react";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticleIcon from "shared/assets/icons/article.svg";

export interface SidebarItemType {
    path:string;
    text:string;
    Icon:VFC<SVGProps<SVGSVGElement>>;
    authOnly?:boolean;
}

export const SidebarItemsList : SidebarItemType[]= [
    {
       path:RouterPath.main,
       text:'Главная',
       Icon:MainIcon,
    },
    {
       path:RouterPath.about,
       text:'О сайте',
       Icon:AboutIcon,
    },
    {
       path:RouterPath.profile,
       text:'Профиль',
       Icon:ProfileIcon,
       authOnly:true,
    },
    {
       path:RouterPath.articles,
       text:'Статьи',
       Icon:ArticleIcon,
       authOnly:true,
    },
]