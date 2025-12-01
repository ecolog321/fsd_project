import { ComponentType, FC, SVGProps } from "react";
import cls from "./Icon.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';

interface IconProps {
  className?: string;
  Svg:ComponentType<SVGProps<SVGSVGElement>>
}

const Icon = ({ className , Svg}: IconProps) => {
  return (
    <Svg className={classNames(cls.icon, {}, [className])}>
      
    </Svg>
  );
};

export default Icon;