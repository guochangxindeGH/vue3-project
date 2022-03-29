const webpack = require('webpack')
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './', // 项目部署的基础路径
  outputDir: 'dist', // 将构建好的文件输出到哪里（或者说将编译的文件）
  assetsDir: 'static', // 放置静态资源的地方 (js/css/img/font/...)

  // 用于多页配置，默认是 undefined
  pages: {
    index: {
      entry: 'src/main.js', /* 这个是根入口文件 */
      template: 'public/index.html', // 模板文件
      filename: 'index.html', // 输出文件
      title: 'Index Page' // 页面title
    },
    // 简写格式
    // 模板文件默认是 `public/subpage.html`
    // 如果不存在，就是 `public/index.html`.
    // 输出文件默认是 `subpage.html`.
    subpage: 'src/main.js' /* 注意这个是 */
  },

  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,

  // 使用带有浏览器内编译器的完整构建版本
  // 查阅 https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
  runtimeCompiler: false,

  // babel-loader 默认会跳过 node_modules 依赖。 通过这个选项可以显式转译一个依赖。
  transpileDependencies: [/* string or regex */],

  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,

  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@views', resolve('src/views'))
      .set('@apis', resolve('src/apis'))
      .set('@components', resolve('src/components'))
      .set('@store', resolve('src/store'))
      .set('@plugins', resolve('src/plugins'))
      .set('@mixins', resolve('src/mixins'))
      .set('@utils', resolve('src/utils'))
      .set('@service', resolve('src/service')) /* 别名配置 */
    config.optimization.runtimeChunk('single')
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        new webpack.BannerPlugin(' The project developed by chengpeiquan! ')
      ]
    }
  },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,

  // PWA 插件的选项。
  // 查阅 https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa
  pwa: {},

  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },

  devServer: {
    /* 本地ip地址 */
    // host: "127.0.0.1",
    host: '0.0.0.0',
    port: '8080',
    hot: true,
    https: false, // https:{type:Boolean}配置前缀
    open: false, /* 自动打开浏览器 */
    /* 跨域代理 */
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888/', /* 目标代理服务器地址 */
        changeOrigin: true, /* 允许跨域 */
        secure: false, // 如果是https接口，需要配置这个参数
        ws: true, // 如果要代理 websockets，配置这个参数
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  // 三方插件的选项
  pluginOptions: {
    // ...
  }
}
