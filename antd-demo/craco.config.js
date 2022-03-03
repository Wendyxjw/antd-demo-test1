const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A', "@primary-color-hover": '#ff4092' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};