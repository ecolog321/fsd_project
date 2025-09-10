import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSlider } from "widgets/ThemeSlider";
import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collasped, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collasped }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toogle"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={classNames(cls.collapsedBtn)}
        square
        size={ButtonSize.XL}
      >
        {collasped ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          className={cls.item}
          to={RouterPath.main}
        >
          <MainIcon className={cls.icon}></MainIcon>
          <span className={cls.link}> Главная</span>
        </AppLink>

        <AppLink
          theme={AppLinkTheme.PRIMARY}
          className={cls.item}
          to={RouterPath.about}
        >
          <AboutIcon className={cls.icon}></AboutIcon>
          <span className={cls.link}> О стайте</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSlider />
        <LangSwitcher short={collasped} className={cls.lang} />
      </div>
    </div>
  );
};

export default Sidebar;
