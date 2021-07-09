/* craco.config.js */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#6DDAF2',
            '@layout-header-background': '#262424',
            // '@menu-dark-selected-item-text-color':'#262424',
            '@menu-dark-highlight-color':"#262424"
            
          },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};