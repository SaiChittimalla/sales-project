// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.177:8000', // Your backend server address
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // Remove /api from the request path
        }
      }
    }
  }
}
