module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://192.168.1.177:8000',
        changeOrigin: true
      },
    }
  }
}