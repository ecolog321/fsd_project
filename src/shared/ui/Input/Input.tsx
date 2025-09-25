import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import cls from "./Input.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  placeholder?:string;
  onChange?: (value: string) => void;
  type?: string;
  autoFocus?:boolean;
}

const Input = memo((props: InputProps) => {
  const { className, value, placeholder, onChange, type = "text", autoFocus, ...otherProps} = props;


  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused]= useState(false)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(()=>{
    if (autoFocus) {
        setIsFocused(true)
        ref?.current?.focus();
    }
  },[autoFocus])
  return (
      <div className={classNames(cls.inputWrapper, {}, [className])}>
          <input ref={ref} type={type} value={value} placeholder={placeholder} onChange={onChangeHandler} className={cls.input} {...otherProps}/>
      </div>
  );
});

export default Input;
