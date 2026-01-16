import { ForwardedRef, forwardRef, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
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

const AppLink = forwardRef((props:AppLinkProps, ref:ForwardedRef<HTMLAnchorElement>) => {
  const {className, children, to, theme=AppLinkTheme.PRIMARY } = props;
    return (
      <Link to={to} ref={ref} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
        {children}
      </Link>
    );
});

export default AppLink;
