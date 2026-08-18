import { Decorator } from "@storybook/react";
// eslint-disable-next-line ormina-plugin/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from "@/shared/const/theme";
import "../../../../app/styles/index.scss";

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = context.parameters?.theme || context.globals?.theme || Theme.LIGHT;
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};