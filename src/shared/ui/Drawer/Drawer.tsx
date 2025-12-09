import { ReactNode } from "react";
import cls from "./Drawer.module.scss";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Portal } from "@headlessui/react";
import { Overlay } from "shared/Overlay/Overlay";

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = ({
  className,
  children,
  isOpen,
  onClose,
}: DrawerProps) => {
  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
  };
  return (
    <Portal>
      <div
        className={classNames(cls.drawer, mods, [
          className,
          theme,
          "app_drawer",
        ])}
      >
        <Overlay onClick={onClose} />
        <div className={cls.content}>{children}</div>
      </div>
      ;
    </Portal>
  );
};
