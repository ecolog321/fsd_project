import Modal from "@/shared/ui/Modal/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
  className?: string;
  isOpen?:boolean;
  onClose?:()=>void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal 
      isOpen={isOpen}
      onClose={onClose}
      lazy
      >
      <LoginFormAsync onSuccess={onClose}/>
    </Modal>
  )
};

export default LoginModal;
