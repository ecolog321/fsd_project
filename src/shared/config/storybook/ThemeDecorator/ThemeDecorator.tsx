import { Decorator } from "@storybook/react-webpack5";
import "../../../../app/styles/index.scss";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

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

