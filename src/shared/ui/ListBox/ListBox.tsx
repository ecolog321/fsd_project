import { Listbox as HListbox, ListboxButton as HListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import cls from "./Listbox.module.scss";
import { Fragment, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import Button from "../Button/Button";
import HStack from "../Stack/HStack/HStack";
import { DropdownDirection } from "shared/types/ui";

export interface ListboxItem {
  value?: string;
  content: ReactNode;
  disabled?: boolean;
}



interface ListboxProps {
  label?: string;
  items: ListboxItem[];
  className?: string;
  value: string | undefined;
  defaultValue?: string;
  readonly?: boolean;
  direction?: DropdownDirection;
  onChange: <T extends string>(value: T) => void;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionTopLeft,
  'top right': cls.optionTopRight,
};

export function Listbox(props: ListboxProps) {
  const {
    label,
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = "bottom left",
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap={'8'}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <HListbox
        as={"div"}
        disabled={readonly}
        className={classNames(cls.listbox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListboxButton disabled={readonly} className={cls.triggerBtn}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListboxButton>
        <ListboxOptions
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items.map((item) => (
            <ListboxOption
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [cls.active]: active,
                    [cls.disabled]: item.disabled,
                  })}
                >
                  {selected && "!!!!"}
                  {item.content}
                </li>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </HListbox>
    </HStack>
  );
}
