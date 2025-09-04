import React, { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSlider } from "widgets/ThemeSlider";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collasped, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const { t, i18n } = useTranslation();

  const toogle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collasped }, [
        className,
      ])}
    >
      <button data-testid='sidebar-toogle' onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSlider />
        <button 
        onClick={toogle}>{t("Перевести")}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
