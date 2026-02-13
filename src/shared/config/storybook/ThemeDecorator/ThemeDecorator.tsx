import { Decorator } from "@storybook/react-webpack5";
import "../../../../app/styles/index.scss";
// eslint-disable-next-line ormina-plugin/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from "@/shared/const/theme";



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

