import { FC } from "react";
import cls from "./ThemeSlider.module.scss";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import DarkIcon from "../assets/DarkIcon.svg";
import LightIcon from "../assets/LightIcon.svg";
import { Theme, useTheme } from "app/provider/ThemeProvider";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface ThemeSliderProps {
  className?: string;
}

const ThemeSlider: FC<ThemeSliderProps> = ({ className }) => {
    const { toggleTheme, theme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.themeSlider, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

export default ThemeSlider;
