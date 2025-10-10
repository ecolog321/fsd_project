import { HTMLAttributes, ReactNode } from "react";
import cls from "./Card.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children:ReactNode;
}

const Card = ({ className, children, ...othersProps }: CardProps) => {
  return (
      <div className={classNames(cls.сard, {}, [className])}
      {...othersProps}>
      {children}
      </div>
  );
};

export default Card;