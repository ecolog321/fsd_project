import { ChangeEvent, useMemo } from "react";
import cls from "./Select.module.scss";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";

export interface SelectOptions <T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOptions<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

const Select =<T extends string>
  ({ className, label, options, value, onChange, readonly }: SelectProps<T>) => {
    const mods: Mods = {
      [cls.readonly]: readonly,
    };

    const optionsList = useMemo(() => {
      return options?.map((item) => (
        <option key={item.value} className={cls.option} value={item.value}>
          {item.content}
        </option>
      ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value as T);
    };

    return (
      <div className={classNames(cls.wrapper, mods, [className])}>
        {label && <span className={cls.label}>{label}</span>}
        <select
          className={cls.select}
          value={value}
          onChange={onChangeHandler}
          disabled={readonly}
        >
          {optionsList}
        </select>
      </div>
    );
  }
;

export default Select;
