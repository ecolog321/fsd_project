import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
    PRIMARY= 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?:AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = ({ className, children, to, theme=AppLinkTheme.PRIMARY }) => {
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};

export default AppLink;
