import { ReactNode } from "react";
import cls from "./Drawer.module.scss";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Portal } from "@headlessui/react";
import { Overlay } from "../Overlay/Overlay";
import { useModal } from "shared/lib/hooks/useModal";

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?:boolean;
}

export const Drawer = ({
  className,
  children,
  lazy,
  isOpen,
  onClose,
}: DrawerProps) => {
  const { theme } = useTheme();
   const { close, isClosing, isMounted } = useModal({
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
      <div
        className={classNames(cls.drawer, mods, [
          className,
          theme,
          "app_drawer",
        ])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
      ;
    </Portal>
  );
};
