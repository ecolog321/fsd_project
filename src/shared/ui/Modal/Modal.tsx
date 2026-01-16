import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { ReactNode } from "react";
import Portal from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import { useModal } from "@/shared/lib/hooks/useModal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

function Modal(props: ModalProps) {
  const { className, children, isOpen, onClose, lazy } = props;
  const { isClosing, isMounted, close } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
}

export default Modal;
