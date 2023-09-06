// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  router: {
    middleware: 'auth'
  },
  modules: [
    // ...
    '@pinia/nuxt',
    '@nuxtjs/device',
    // '~/plugins/axios',
  ],

  plugins: [
    // '/e:/---- SIGMA ----/jeSICA/plugins/axios.js'
    // './plugins/howler.js'
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    },
  },

  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },

  routes: [
    {
      path: '/chats',
      component: 'pages/ChatPage.vue',
      middleware: 'auth'
    }
  ]

})
