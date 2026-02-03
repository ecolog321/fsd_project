import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import cls from "./Dropdown.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import {  ReactNode } from "react";
import { DropdownDirection } from "@/shared/types/ui";
import { To } from "react-router-dom";
import Button from "../../../Button/Button";
import AppLink from "../../../AppLink/AppLink";
import { mapDirectionClass } from "../../styles/consts";
import popupCls from '../../styles/popups.module.scss'


export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onCLick?: () => void;
  href?: string;
}



interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
  const { className, items, trigger, direction = "bottom left" } = props;
  const itemsClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(cls.dropdown, {}, [className, popupCls.popup])}>
      <MenuButton className={popupCls.trigger}>{trigger}</MenuButton>
      <MenuItems className={classNames(cls.items, {}, itemsClasses)}>
        {items.map((item, id) => {
          const content = ({ active }: { active: boolean }) => (
            <Button
              disabled={item.disabled}
              className={classNames(cls.item, { [popupCls.active]: active }, [])}
            >
              {item.content}
            </Button>
          );

          if (item.href) {
            return (
              <MenuItem as={AppLink} to={item.href as To} key={id}>
                {content}
              </MenuItem>
            );
          }
          return (
            <MenuItem as={'div'} style={{width:'100%', border:'none'}} onClick={item.onCLick} key={id}>
              {content}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}
