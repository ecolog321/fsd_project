import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import cls from "./Input.module.scss";
import { classNames, Mods } from "shared/lib/classNames/classNames";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (value: string) => void;
  type?: string;
  autoFocus?: boolean;
  readonly?: boolean;
  numeric?:boolean;
}

const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    placeholder,
    onChange,
    type = "text",
    autoFocus,
    readonly,
    numeric,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);


  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (numeric) {
      // Разрешаем только цифры и пустую строку
      const numericValue = e.target.value.replace(/[^0-9]/g, '');
      onChange?.(numericValue);
    } else {
      onChange?.(e.target.value);
    }
  };

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref?.current?.focus();
    }
  }, [autoFocus]);

  const mods:Mods = {
    [cls.readonly]:readonly
  }
  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      <input
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className={cls.input}
        readOnly={readonly}
        pattern={numeric ?"[0-9]*" : undefined}
        inputMode={numeric ? "numeric" : "text"}
        {...otherProps}
      />
    </div>
  );
});

export default Input;
