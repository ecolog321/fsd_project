import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useCallback, useState } from "react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
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
            <div className={cls.links}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onLogout}>
                    {t("Выйти")}
                </Button>
            </div>
        </div>
    );
  }
  return (
      <div className={classNames(cls.navbar, {}, [className])}>
          <div className={cls.links}>
              <Button theme={ButtonTheme.OUTLINE} onClick={onShowModal}>
                  {t("Войти")}
              </Button>
              {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
          </div>
      </div>
  );
};

export default Navbar;
