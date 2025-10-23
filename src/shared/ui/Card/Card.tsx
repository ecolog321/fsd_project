import { HTMLAttributes, ReactNode } from "react";
import cls from "./Card.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';

export enum CardTheme {
  NORMAL ='normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children:ReactNode;
  theme?:CardTheme;
}

const Card = ({ className, children, theme = CardTheme.NORMAL, ...othersProps }: CardProps) => {
  return (
    <div className={classNames(cls.сard, {}, [className, cls[theme]])}
      {...othersProps}>
      {children}
    </div>
  );
};

export default Card;