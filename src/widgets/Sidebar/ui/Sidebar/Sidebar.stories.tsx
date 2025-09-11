import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Sidebar from './Sidebar';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const ComponentMeta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Sidebar>;

export default ComponentMeta;
type Story = StoryObj<typeof ComponentMeta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light: Story = {
};

export const Dark: Story = {
    decorators:[ThemeDecorator(Theme.DARK)]
};
