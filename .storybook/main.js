const path = require('path');
const webpackConfig = require('../webpack.config.js');

module.exports = {
  "stories": [
    "../client/app/**/*.stories.mdx",
    "../client/app/**/*.stories.@(js|jsx|ts|tsx)",
    "../client/app/**/*.story.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@components': path.resolve(__dirname, '../client/app/components'),
          '@mocks': path.resolve(__dirname, '../client/app/mocks'),
          '@routes': path.resolve(__dirname, '../client/app/routes'),
          '@storybook/decorators': path.resolve(__dirname, './decorators'),
          '@images': path.resolve(__dirname, '../client/app/images'),
          '@docs': path.resolve(__dirname, '../client/app/docs'),
          '@utilities': path.resolve(__dirname, '../client/app/utilities'),
          '@translations': path.resolve(__dirname, '../client/app/translations'),
        }
      },
      module: {
        ...config.module,
        rules: webpackConfig({ NODE_ENV: 'development' }).module.rules
      },
    };
  },
}
