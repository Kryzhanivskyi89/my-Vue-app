// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('define')
      .tap(args => {
        args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = JSON.stringify(true);
        return args;
      });
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://apt-booking-api.herokuapp.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});