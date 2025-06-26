
import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
          to={"/"}
        >
          Главная
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
          to={"about"}
        >
          О стайте
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
