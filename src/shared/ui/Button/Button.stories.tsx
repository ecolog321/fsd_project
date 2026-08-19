import type { Meta, StoryObj } from "@storybook/react-vite";
import Button, { ButtonTheme } from "./Button";
import Text from '../Text/Text';

const meta = {
  title: "shared/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: "123",
    children: <Text title={'Button'}/>,
  },
};
export const Secondary: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: <p>123</p>,
  },
};
