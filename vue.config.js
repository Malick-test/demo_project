const { defineConfig } = require('@vue/cli-service')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
module.exports = defineConfig({
  publicPath: './', // 基本路径
  outputDir: 'dist', //构建时输出目录
  assetsDir: 'static', // 放置静态资源的目录
  indexPath: 'index.html', // html 的输出路径
  filenameHashing: true, // 文件名哈希值
  lintOnSave: false, // 是否在保存的时候使用 eslint-loader 进行检查
  runtimeCompiler: false, // 在运行的时候才去编译template
  transpileDependencies: [], // babel-loader 默认会跳过node_modules 依赖
  productionSourceMap: false, // 是否为生产环境构建生产 source map
  // 调整内部 webpack 配置
  configureWebpack: (config) => {
    // console.error(data);
    config.resolve = {
      ...config.resolve,
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
    // plugins: {
    //   new CopyWebpackPlugin([{
    //     from: './pulic/',
    //     to: 'pulic'
    //   }])
    // }
  },
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  },
  // diefine: {
  //   __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  // },
  // 配置 webpack-dev-server 行为
  devServer: {
    open: true, // 编译后默认打开浏览器
    // host: '0.0.0.0', // 域名
    port: 8080, // 端口
    // https: false, // 是否是https
    // 显示警告和错误
    // overlay: {
    //   warnings: true,
    //   errors: true,
    // }
  },
  
})
