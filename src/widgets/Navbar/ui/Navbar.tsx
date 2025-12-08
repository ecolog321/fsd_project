import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { memo, useCallback, useState } from "react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/authByUsername";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import Text, { TextTheme } from "shared/ui/Text/Text";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import HStack from "shared/ui/Stack/HStack/HStack";
import { NotificationButton } from "features/notificationButton";
import { AvatarDropdown } from "features/avatarDropdown";

interface NavbarProps {
  className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthodal] = useState(false);
  const { t } = useTranslation("common");
  const authData = useSelector(getUserAuthData);
  const onCloseModal = useCallback(() => {
    setIsAuthodal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthodal(true);
  }, []);


  if (authData) {

    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <Text className={cls.logo} title="Ormina" theme={TextTheme.PRIMARY} />
        <HStack justify={"between"} max>
          <AppLink
            to={RouterPath.article_create}
            theme={AppLinkTheme.PRIMARY}
            className={cls.createBtn}
          >
            {t("Создать статью")}
          </AppLink>
          <HStack gap={"16"} className={cls.actions}>
            <NotificationButton/>
            <AvatarDropdown/>
          </HStack>
        </HStack>
      </header>
    );
  }
  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onShowModal}>
          {t("Войти")}
        </Button>
        {isAuthModal && (
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        )}
      </div>
    </header>
  );
});

export default Navbar;
