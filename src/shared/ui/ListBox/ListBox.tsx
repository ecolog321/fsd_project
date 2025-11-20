import { Listbox as HListbox } from "@headlessui/react";
import cls from "./Listbox.module.scss";
import { Fragment, ReactNode, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import Button from "../Button/Button";
import { read } from "fs";
import HStack from "../Stack/HStack/HStack";

export interface ListboxItem {
  value?: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = "top" | "bottom";

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
  bottom: cls.optionsBottom,
  top: cls.optionsTop,
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
    direction = "bottom",
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
        <HListbox.Button disabled={readonly} className={cls.triggerBtn}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items.map((item) => (
            <HListbox.Option
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
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
}
