const path = require('path');
module.export = {
  //方法一
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components'
    };
  }
  //方法二
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       coponents: '@/component',
  //     },
  //   },
  // },
};
