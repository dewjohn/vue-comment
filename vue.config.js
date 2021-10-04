module.exports = {
  devServer: {
    host: 'localhost',
    port: 8081,
    proxy: {
      '/': {
        ws: false,
        target: 'http://localhost:3000', // 后端地址
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  }
}
