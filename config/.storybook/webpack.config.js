const webpack = require('webpack');
const path = require('path');

// Если ваш buildCssLoader написан на TypeScript, его тоже нужно либо скомпилировать,
// либо переписать на CommonJS, либо скопировать логику сюда.
// Проще всего — скопировать содержимое buildCssLoader прямо сюда или использовать require,
// но убедитесь, что файл buildCssLoader экспортирует CommonJS-модуль.
// Временно, для демонстрации, я продублирую логику css-лоадера, но вы можете заменить на require.

// Пример функции buildCssLoader (если она у вас есть в CommonJS):
// const buildCssLoader = require('../buildOptions/loaders/buildCssLoader');

// Если же она на TypeScript, вы можете либо скомпилировать её в .js,
// либо просто скопировать её код в это место, либо использовать require с расширением .ts,
// но тогда нужно использовать ts-node/tsx для запуска конфига — это сложнее.
// Поэтому я предлагаю вынести её логику прямо сюда:

function buildCssLoader(isDev) {
  return {
    test: /\.(css|s[ac]ss)$/i,
    use: [
      isDev ? 'style-loader' : 'mini-css-extract-plugin',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.\w+$/i,
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };
}

module.exports = ({ config }) => {
  const paths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: ''
  };

  // Добавляем пути для резолва
  config.resolve.modules = config.resolve.modules || [];
  config.resolve.modules.push(paths.src);
  config.resolve.extensions = config.resolve.extensions || [];
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': paths.src,
  };

  // Исключаем svg из стандартных правил (чтобы обрабатывать через @svgr/webpack)
  if (config.module && config.module.rules) {
    config.module.rules = config.module.rules.map((rule) => {
      // Проверяем, что правило — объект и его test содержит svg
      if (rule && typeof rule === 'object' && rule.test && /svg/.test(rule.test.toString())) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });
  }

  // Добавляем правило для svg
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  // Добавляем DefinePlugin
  config.plugins.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(''),
      __PROJECT__: JSON.stringify('storybook'),
    })
  );

  // Добавляем кастомный лоадер для CSS/SCSS
  config.module.rules.push(buildCssLoader(true));

  return config;
};