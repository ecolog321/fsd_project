import React, { FC, useState } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSlider } from "widgets/ThemeSlider";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {

  const { className, ...otherProps } = props;
  const [collasped, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collasped }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSlider/>
      </div>
    </div>
  );
};

export default Sidebar;
