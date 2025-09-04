import type { Meta, StoryObj } from "@storybook/react-webpack5";

import AppLink, { AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeSecorator";
import { Theme } from "app/providers/ThemeProvider";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const ComponentMeta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { to: "/" },
} satisfies Meta<typeof AppLink>;

export default ComponentMeta;
type Story = StoryObj<typeof ComponentMeta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "LINK",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: "LINK",
    theme: AppLinkTheme.SECONDARY,
  },
};
export const SecondaryDark: Story = {
  args: {
    children: "LINK",
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
