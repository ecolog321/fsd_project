import { memo } from "react";
import cls from "./Text.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export const enum TextTheme {
  PRIMATY = "primary",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}
export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  aling?:TextAlign;
  size?:TextSize;
}

const Text = memo(({
  className,
  title,
  text,
  theme = TextTheme.PRIMATY,
  aling = TextAlign.LEFT,
  size = TextSize.M
}: TextProps) => {

  return (
    <div className={classNames(cls.text, {}, [className, cls[theme], cls[aling], cls[size]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

export default Text;
