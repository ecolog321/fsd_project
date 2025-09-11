import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import Modal from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {

  const [isAuthModal, setIsAuthodal] = useState(false);

  const onToggleModal = useCallback(()=>{
    setIsAuthodal((prev)=>!prev)
  },[])
  return (
      <div className={classNames(cls.navbar, {}, [className])}>
          <div className={cls.links}>
              <Button theme={ButtonTheme.OUTLINE} onClick={onToggleModal}>Войти</Button>
              <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
                  modi tempore esse magnam architecto qui voluptate. Cupiditate tempora
                  modi voluptatem at accusantium? Libero labore voluptas quia? Pariatur
                  placeat eligendi cumque.
              </Modal>
          </div>
      </div>
  );
};

export default Navbar;
