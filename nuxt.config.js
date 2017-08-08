module.exports = {
  head: {
    title: 'nuxt-vuetify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  loading: { color: '#3B8070' },
  plugins: ['~plugins/vuetify'],
  css: [
    { src: '~assets/style/app.styl', lang: 'styl' },
    { src: '~assets/style/material-icons/material-icons.css' },
    { src: 'mdi/css/materialdesignicons.min.css' }
  ]
}
