import type { Preview } from '@storybook/react-webpack5'
import '../../src/app/styles/index.scss'
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator/ThemeSecorator'
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import {Theme} from "../../src/app/providers/ThemeProvider"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators:[
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
  ]
};
export default preview;