import { Popover as HPopover, PopoverButton as HPopoverButton, PopoverPanel as HPopoverPanel } from "@headlessui/react";
import { mapDirectionClass } from "../../styles/consts";
import { ReactNode } from "react";
import { DropdownDirection } from "@/shared/types/ui";
import popupCls from "../../styles/popups.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from './Popover.module.scss'

interface PopupProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children?:ReactNode;
}

export function Popover(props: PopupProps) {
  const { className, trigger, direction = "bottom left", children } = props;
  const itemsClasses = [mapDirectionClass[direction]];

  return (
    <HPopover className={classNames(cls.popover, {}, [className, popupCls.popup])}>
      <HPopoverButton className={popupCls.trigger}>{trigger}</HPopoverButton>
      <HPopoverPanel className={classNames(cls.panel, {}, itemsClasses)}>
        {children}
      </HPopoverPanel>
    </HPopover>
  );
}
