import type { Preview } from '@storybook/react-webpack5'
import '../../src/app/styles/index.scss'
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator/ThemeSecorator'
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import {Theme} from "../../src/app/providers/ThemeProvider"

const customViewports = {
    iphoneSE: {
        name: 'iPhone SE',
        styles: {
            width: '375px',
            height: '667px',
        },
    },
    iphone12: {
        name: 'iPhone 12',
        styles: {
            width: '390px',
            height: '844px',
        },
    },
    ipad: {
        name: 'iPad',
        styles: {
            width: '768px',
            height: '1024px',
        },
    },
    macbook: {
        name: 'MacBook Pro',
        styles: {
            width: '1440px',
            height: '900px',
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
            viewports: customViewports,
            defaultViewport: 'desktop',
        },
    
        // Настройки для Chromatic
        chromatic: {
            viewports: [320, 375, 768, 1440],
            pauseAnimationAtEnd: true,
            delay: 100,
        },
    },
    decorators:[
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
    ]
};
export default preview;