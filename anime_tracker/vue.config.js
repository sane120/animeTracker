module.exports = {
  devServer: {
    proxy: {
      '/Pizza': {
        target: 'https://localhost:7259',
        changeOrigin: true,
      },
    },
  },
};
