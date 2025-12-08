import { memo } from "react";
import cls from "./Text.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export const enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}
export enum TextSize {
  S = 'sizeS',
  M = 'sizeM',
  L = 'sizeL'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?:TextAlign;
  size?:TextSize;
  'data-testid'?:string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag:Record<TextSize, HeaderTagType> = {
  [TextSize.S]:'h3',
  [TextSize.M]:'h2',
  [TextSize.L]:'h1',
}

const Text = memo(({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSize.M,
  "data-testid":dataTestId = "Text"
}: TextProps) => {

  const HeaderTag = mapSizeToHeaderTag[size] 

  return (
    <div className={classNames(cls.container, {}, [className, cls[theme], cls[align], cls[size]])}>
      {title && (
        <HeaderTag 
          data-testid={`${dataTestId}.Header`}
          className={cls.title}>
          {title}
        </HeaderTag>
        )}
      {text && (
        <p 
          data-testid={`${dataTestId}.Paragraph`}
          className={cls.text}>
          {text}
          </p>)}
    </div>
  );
});

export default Text;
