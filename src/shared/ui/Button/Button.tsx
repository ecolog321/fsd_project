import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?:ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme=ThemeButton.CLEAR, ...otherProps } = props;
    return (
        <button
            type="button"
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
