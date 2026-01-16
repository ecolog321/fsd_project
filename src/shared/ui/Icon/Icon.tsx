import { ComponentType, SVGProps } from "react";
import cls from "./Icon.module.scss";
import { classNames } from '@/shared/lib/classNames/classNames';

interface IconProps {
  className?: string;
  Svg:ComponentType<SVGProps<SVGSVGElement>>;
  inverted?:boolean;
}

const Icon = ({ className , Svg, inverted}: IconProps) => {
  return (
    <Svg className={classNames(inverted ? cls.inverted : cls.icon , {}, [className])}>
      
    </Svg>
  );
};

export default Icon;