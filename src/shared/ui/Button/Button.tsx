import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "sizeM",
  L = "sizeL",
  XL = "sizeXl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?:boolean;
  children?:ReactNode;
}

const Button = memo((props:ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };

  return (
      <button
      type="button"
      className={classNames(cls.button, mods, [
        className,
        cls[theme],
        cls[size],
      ])}
      disabled={disabled}
      {...otherProps}
    >
          {children}
      </button>
  );
});

export default Button;
