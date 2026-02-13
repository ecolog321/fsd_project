import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';
import Button, { ButtonTheme } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const ComponentMeta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        background:{control:'color'}
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn(), },
} satisfies Meta<typeof Button>;

export default ComponentMeta;
type Story = StoryObj<typeof ComponentMeta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        children:'Text',
    },
};

export const Clear: Story = {
    args: {
        children:'Text',
        theme:ButtonTheme.CLEAR
    },
};

export const OutlineLight: Story = {
    args: {
        children:'Text',
        theme:ButtonTheme.OUTLINE
    },
    decorators:[
        ThemeDecorator
    ]
};
export const OutlineDark: Story = {
    args: {
        children:'Text',
        theme:ButtonTheme.OUTLINE
    },
    parameters:{
        theme:Theme.DARK
    },
    decorators:[
        ThemeDecorator
    ]
};