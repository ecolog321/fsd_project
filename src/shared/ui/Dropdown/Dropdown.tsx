import { Menu } from "@headlessui/react";
import cls from "./Dropdown.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import {  ReactNode } from "react";
import { DropdownDirection } from "shared/types/ui";

import AppLink from "../AppLink/AppLink";
import { To } from "react-router-dom";
import Button from "../Button/Button";

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onCLick?: () => void;
  href?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  "bottom left": cls.optionsBottomLeft,
  "bottom right": cls.optionsBottomRight,
  "top left": cls.optionTopLeft,
  "top right": cls.optionTopRight,
};

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
    <Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.items, {}, itemsClasses)}>
        {items.map((item, id) => {
          const content = ({ active }: { active: boolean }) => (
            <Button
            disabled={item.disabled}
              className={classNames(cls.item, { [cls.active]: active }, [])}
            >
              {item.content}
            </Button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href as To} key={id}>
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item as={'button'} style={{width:'100%', border:'none'}} onClick={item.onCLick} key={id}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
