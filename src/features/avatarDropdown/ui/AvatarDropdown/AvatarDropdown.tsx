
import { classNames } from "@/shared/lib/classNames/classNames";
import { getRouteProfile, RouterPath } from "@/shared/const/router";
import { getUserAuthData, isUserAdmin, userActions } from "@/entities/User";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Avatar from "@/shared/ui/Avatar";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useCallback } from "react";
import { Dropdown } from "@/shared/ui/Popups/ui";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = ({ className }: AvatarDropdownProps) => {
  const isAdmin = useSelector(isUserAdmin);
  const { t } = useTranslation("common");
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);
  if (!authData) {
    return null;
  }
    return (
      <Dropdown
        className={classNames('', {}, [className])}
        items={[
          ...(isAdmin
            ? [
                {
                  content: t("Администрирование"),
                  href: RouterPath.admin_panel,
                },
              ]
            : []),
          {
            content: t("Профиль"),
            href: getRouteProfile(authData.id),
          },
          {
            content: t("Выйти"),
            onCLick: onLogout,
          },
        ]}
        trigger={<Avatar size={30} src={authData.avatar} />}
        direction={"bottom left"}
      />
    );
  }
