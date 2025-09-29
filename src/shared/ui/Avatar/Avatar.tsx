import { CSSProperties, useMemo } from "react";
import cls from "./Avatar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?:string
}

const Avatar = ({ className, src, size,alt }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);
  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
    ></img>
  );
};

export default Avatar;
