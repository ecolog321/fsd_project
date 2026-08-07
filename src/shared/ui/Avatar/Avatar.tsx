import { CSSProperties, useMemo } from "react";
import cls from "./Avatar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppImage } from "../AppImage";

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
    <AppImage
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
    ></AppImage>
  );
};

export default Avatar;
