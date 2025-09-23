import { memo } from "react";
import cls from "./Text.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export const enum TextTheme {
  PRIMATY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

const Text = memo(({
  className,
  title,
  text,
  theme = TextTheme.PRIMATY,
}: TextProps) => {
  return (
      <div className={classNames(cls.text, {}, [className, cls[theme]])}>
          {title && <p className={cls.title}>{title}</p>}
          {text && <p className={cls.text}>{text}</p>}
      </div>
  );
});

export default Text;
