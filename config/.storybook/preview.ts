import type { Preview } from "@storybook/react-webpack5";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { TranslationDecorator } from "../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator";
import { SuspenceDecorator } from "../../src/shared/config/storybook/SuspenceDecorator/SuspenceDecorator";
import { Theme } from "../../src/shared/const/theme";

const customViewports = {
  iphoneSE: {
    name: "iPhone SE",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
  iphone12: {
    name: "iPhone 12",
    styles: {
      width: "390px",
      height: "844px",
    },
  },
  ipad: {
    name: "iPad",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  macbook: {
    name: "MacBook Pro",
    styles: {
      width: "1440px",
      height: "900px",
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: customViewports
    },

    // Настройки для Chromatic
    chromatic: {
      viewports: [320, 375, 768, 1440],
      pauseAnimationAtEnd: true,
      delay: 100,
    },
    store: {},
    theme: Theme.LIGHT,
  },

  decorators: [
    StyleDecorator,
    ThemeDecorator,
    RouterDecorator,
    TranslationDecorator,
    SuspenceDecorator
  ],

  initialGlobals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  }
};
export default preview;
