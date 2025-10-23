import { createContext } from "react";

export const enum Theme {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme",
  ALTER = "app_alter_theme",
}

export interface ThemeContextProps {
    theme?:Theme;
    setTheme?:(theme:Theme)=>void;
}

export const ThemeContext = createContext<ThemeContextProps>({})

