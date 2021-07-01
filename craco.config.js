/* craco.config.js */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#6aceef',
            '@layout-header-background': '#2E2A2B'},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};