import Modal from "shared/ui/Modal/Modal";
import cls from "./LoginModal.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import LoginForm from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string;
  isOpen?:boolean;
  onClose?:()=>void;
}

const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
      <Modal 
      className={classNames(cls.modal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
      >
          <LoginForm/>
      </Modal>
  )
};

export default LoginModal;
