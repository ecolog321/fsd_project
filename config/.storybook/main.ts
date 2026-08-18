import { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { fileURLToPath } from 'url';
import svgr from 'vite-plugin-svgr'

// Эмуляция __dirname в ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    // Явно указываем алиас, используя путь относительно текущего файла
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../../src'),
    };
    config.define={
       ...config.define,
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('http://localhost:8000'), // или ваш реальный URL
      __PROJECT__: JSON.stringify('storybook'),
    }
     config.plugins = config.plugins || [];
    config.plugins.push(
      svgr({
        include: '**/*.svg',
      })
    );
    return config;
  },
};
export default config;