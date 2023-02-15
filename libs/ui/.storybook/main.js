const path = require('path');
const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,
  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      options: {
        nextConfigPath: path.resolve(
          __dirname,
          '../apps/next-app/next.config.js'
        ),
      },
    },
  },
};

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
