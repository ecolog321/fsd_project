import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./SidebarItem.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { SidebarItemType } from "../../model/types/items";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed?: boolean;
}

const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null;
  }
  
  return (
    <AppLink theme={AppLinkTheme.PRIMARY} className={classNames(cls.item, {[cls.collapsed]:collapsed})} to={item.path}>
      <item.Icon className={cls.icon} />
      <span className={cls.link}> {t(item.text)}</span>
    </AppLink>
  );
};

export default SidebarItem;
