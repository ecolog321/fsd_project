import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useCallback, useState } from "react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {

  const [isAuthModal, setIsAuthodal] = useState(false);
  const {t} =useTranslation()

  const onCloseModal = useCallback(()=>{
    setIsAuthodal(false)
  },[])
  const onShowModal = useCallback(()=>{
    setIsAuthodal(true)
  },[])


  return (
      <div className={classNames(cls.navbar, {}, [className])}>
          <div className={cls.links}>
              <Button theme={ButtonTheme.OUTLINE} onClick={onShowModal}>{t('Войти')}</Button>
              <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
          </div>
      </div>
  );
};

export default Navbar;
