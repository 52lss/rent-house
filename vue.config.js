const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      open: true,
      host: 'localhost',
      port: 8888
    },
    resolve: {
      alias: {
        cpns: resolve(__dirname, 'src/components'),
        views: resolve(__dirname, 'src/views')
      }
    }
  }
  // vantcss样式
  // css: {
  //   loaderOptions: {
  //     less: {
  //       // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
  //       lessOptions: {
  //         modifyVars: {
  //           // 直接覆盖变量
  //           'text-color': '#111',
  //           'border-color': '#eee',
  //           // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
  //           hack: `true; @import "your-less-file-path.less";`
  //         }
  //       }
  //     }
  //   }
  // }
})
