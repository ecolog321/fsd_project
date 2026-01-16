import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import Navbar from "./Navbar";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const initialStateNoLog = {
  user: {
    authData: undefined,
    _inited: true,
  },
};

const initialStateLog = {
  user: {
    authData: {
      id: "1",
      username: "admin",
    },
    _inited: true,
  },
};

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories для неавторизованного пользователя
export const Light: Story = {
  args: {},
  parameters: {
    store: initialStateNoLog,
    theme: Theme.LIGHT,
  },
  decorators: [StoreDecorator],
};

export const Dark: Story = {
  args: {},
  parameters: {
    store: initialStateNoLog,
    theme: Theme.DARK,
  },
  decorators: [ThemeDecorator, StoreDecorator],
};

// Stories для авторизованного пользователя
export const LightLoggedIn: Story = {
  args: {},
  parameters: {
    store: {
      initialState:initialStateLog,
    },
    theme: Theme.LIGHT,
  },
  decorators: [StoreDecorator],
};

export const DarkLoggedIn: Story = {
  args: {},
  parameters: {
    store: {
      initialState:initialStateLog,
    },
    theme: Theme.DARK,
  },
  decorators: [ThemeDecorator, StoreDecorator],
};
