import { memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSlider } from "widgets/ThemeSlider";
import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import SidebarItem from "../SidebarItem/SidebarItem";
import { useSelector } from "react-redux";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";

interface SidebarProps {
  className?: string;
}

const Sidebar = memo((props:SidebarProps) => {
  const { className } = props;
  const [collasped, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems)

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(() => {
    return sidebarItemsList.map((item) => (
      <SidebarItem key={item.path} item={item} collapsed={collasped}/>
    ));
  }, [collasped, sidebarItemsList]);

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
        {itemList}
      </div>
      <div className={cls.switchers}>
        <ThemeSlider />
        <LangSwitcher short={collasped} className={cls.lang} />
      </div>
    </div>
  );
});

export default Sidebar;
