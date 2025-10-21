import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { memo, useCallback, useState } from "react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/authByUsername";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import Text, { TextTheme } from "shared/ui/Text/Text";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import { Theme } from "app/providers/ThemeProvider";

interface NavbarProps {
  className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthodal] = useState(false);
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthodal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthodal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Text className={cls.logo} title="Ormina" theme={TextTheme.PRIMATY} />
        <AppLink
          to={RouterPath.article_create}
          theme={AppLinkTheme.PRIMARY}
          className={cls.createBtn}
        >
          Создать статью
        </AppLink>
        <Button theme={ButtonTheme.OUTLINE} onClick={onLogout}>
          {t("Выйти")}
        </Button>
      </div>
    );
  }
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onShowModal}>
          {t("Войти")}
        </Button>
        {isAuthModal && (
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        )}
      </div>
    </div>
  );
});

export default Navbar;
