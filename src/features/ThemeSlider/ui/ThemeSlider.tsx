import { FC, memo } from "react";
import cls from "./ThemeSlider.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import DarkIcon from "../assets/DarkIcon.svg";
import LightIcon from "../assets/LightIcon.svg";
import Button, { ButtonTheme } from "@/shared/ui/Button/Button";
import { useTheme } from "@/shared/lib/hooks/useTheme";
import { Theme } from "@/shared/const/theme";


interface ThemeSliderProps {
  className?: string;
}

const ThemeSlider: FC<ThemeSliderProps> = memo(
  ({ className }: ThemeSliderProps) => {
    const { toggleTheme, theme } = useTheme();
    return (
      <Button
        theme={ButtonTheme.CLEAR}
        className={classNames(cls.themeSlider, {}, [className])}
        onClick={toggleTheme}
      >
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
    );
  }
);

export default ThemeSlider;
