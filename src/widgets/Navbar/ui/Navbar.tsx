import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { memo, useCallback, useState } from "react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/authByUsername";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, isUserAdmin, userActions } from "entities/User";
import Text, { TextTheme } from "shared/ui/Text/Text";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import Avatar from "shared/ui/Avatar/Avatar";
import HStack from "shared/ui/Stack/HStack/HStack";
import { getUserRoles } from "entities/User/model/selectors/roleSelector/roleSelector";

interface NavbarProps {
  className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthodal] = useState(false);
  const { t } = useTranslation("common");
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  
  const role = useSelector(getUserRoles)
console.log(role, authData)

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
      <header className={classNames(cls.navbar, {}, [className])}>
        <Text className={cls.logo} title="Ormina" theme={TextTheme.PRIMATY} />
        <HStack justify={'between'} max>
          <AppLink
            to={RouterPath.article_create}
            theme={AppLinkTheme.PRIMARY}
            className={cls.createBtn}
          >
            {t("Создать статью")}
          </AppLink>
          <Dropdown
            className={cls.dropdown}
            items={[
              ...(isAdmin ? [{
                  content:t('Администрирование'),
                  href:RouterPath.admin_panel
              }] : []),
               {
                  content:t('Профиль'),
                  href:RouterPath.profile + authData.id
              },
              {
                content: t("Выйти"),
                onCLick: onLogout,
              },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
            direction={'bottom left'}
          />
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
