const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'naut.ch',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      {
        src: '/scripts/animvendor.js',
        type: 'text/javascript'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        crossorigin: 'crossorigin',
        type: 'font/woff2',
        as: 'font',
        href: '/fonts/BrandonGrotesque-Light.woff2'
      },
      {
        rel: 'preload',
        crossorigin: 'crossorigin',
        type: 'font/woff2',
        as: 'font',
        href: '/fonts/BrandonGrotesque-Regular.woff2'
      },
      {
        rel: 'stylesheet',
        href: '/styles/fonts.css',
        defer: true
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: 'node_modules/vue-rellax/lib/nuxt-plugin' },
    { src: '~/plugins/vue-tiny-slider.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [['vue-scrollto/nuxt', { duration: 400 }]],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
        'postcss-custom-media': { importFrom: './config/customMedia.css' }
      }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
