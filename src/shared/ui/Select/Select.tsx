import { ChangeEvent, memo, useMemo } from "react";
import cls from "./Select.module.scss";
import { classNames, Mods } from "shared/lib/classNames/classNames";

export interface SelectOptions {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

const Select = memo(
  ({ className, label, options, value, onChange, readonly }: SelectProps) => {
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
      onChange?.(e.target.value);
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
);

export default Select;
