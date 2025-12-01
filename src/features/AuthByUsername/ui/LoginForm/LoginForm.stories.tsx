import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const initialState ={
            loginForm: { 
                username: 'user', 
                password: '123', 
                error: '',
                isLoading: false 
            }
        }
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const ComponentMeta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        background:{control:'color'},
        store: initialState    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
    decorators:[
        StoreDecorator
    ]
} satisfies Meta<typeof LoginForm>;

export default ComponentMeta;
type Story = StoryObj<typeof ComponentMeta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    decorators:[
     
    ]
};