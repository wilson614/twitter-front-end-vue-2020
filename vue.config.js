module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
         @import "@/assets/scss/main.scss";
        `,
      },
    },
  },
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/twitter-front-end-vue-2020/'
      : '/',
}
