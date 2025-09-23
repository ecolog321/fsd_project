import { FC, memo, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
    PRIMARY= 'primary',
    SECONDARY = 'secondary',
    RED= 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?:AppLinkTheme;
  children?:ReactNode;
}

const AppLink = memo(({ className, children, to, theme=AppLinkTheme.PRIMARY }:AppLinkProps) => {
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
});

export default AppLink;
